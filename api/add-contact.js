// API endpoint to add a contact to Brevo CRM and send confirmation emails
// Used to handle both Express and serverless function environments (AWS Lambda, Vercel)

export default async function handler(req, res) {
  if (req.method && req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const body = req.body || {};
    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      designation,
      chosenService,
    } = body;

    // Sanitize and validate inputs
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Sanitize text inputs to prevent XSS
    const sanitizeInput = (input) => {
      if (!input) return input;

      const trimmedInput = String(input).trim();
      return trimmedInput
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const sanitizedFirstName = sanitizeInput(firstName);
    const sanitizedLastName = sanitizeInput(lastName);
    const sanitizedMessage = sanitizeInput(message);
    const sanitizedDesignation = sanitizeInput(designation);
    const sanitizedChosenService = sanitizeInput(chosenService);
    const sanitizedPhone = phone
      ? String(phone).replace(/[^\d+\-\s()]/g, "")
      : phone;

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@eyeqvault.com";
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const GOOGLE_SHEETS_APP_SCRIPT_URL = process.env.LEADS_APP_SCRIPT_URL;

    if (!BREVO_API_KEY) {
      return res.status(500).json({ error: "Missing BREVO_API_KEY" });
    }

    const brevoHeaders = {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": BREVO_API_KEY,
    };

    // Create timestamp for Google Sheets
    const timestamp = new Date().toISOString();

    // Add contact
    await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: brevoHeaders,
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: sanitizedFirstName,
          LASTNAME: sanitizedLastName,
          PHONE: sanitizedPhone,
          MESSAGE: sanitizedMessage,
          DESIGNATION: sanitizedDesignation,
          CHOSENSERVICE: sanitizedChosenService,
        },
        updateEnabled: true,
        listIds: [3], // ID of Website Form Leads List on Brevo
      }),
    });

    // Send data to Google Sheets via App Script
    if (GOOGLE_SHEETS_APP_SCRIPT_URL) {
      try {
        await fetch(GOOGLE_SHEETS_APP_SCRIPT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: sanitizedFirstName,
            lastName: sanitizedLastName,
            email: email,
            phone: sanitizedPhone || "-",
            message: sanitizedMessage || "-",
            designation: sanitizedDesignation || "-",
            chosenService: sanitizedChosenService || "General Inquiry",
            timestamp,
          }),
        });
      } catch (sheetErr) {
        // Log error but don't fail the whole request
        console.error("LOG | Google Sheets logging error:", sheetErr);
      }
    }

    // Send emails (user + admin)
    await Promise.all([
      fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: brevoHeaders,
        body: JSON.stringify({
          sender: { email: ADMIN_EMAIL, name: "EyeQVault Technologies" },
          to: [{ email, name: `${firstName} ${lastName}` }],
          subject: "Thankyou for your interest in EyeQVault",
          htmlContent: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>EyeQVault - Glad to see your interest in securing your company's digital security.</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
              
              body {
                font-family: 'Poppins', sans-serif;
                line-height: 1.6;
                color: #181818;
                background-color: #f8f8f8;
                margin: 0;
                padding: 0;
              }
              
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 40px 20px;
                background-color: white;
              }
              
              .header {
                text-align: center;
                margin-bottom: 30px;
              }
          
              h1 {
                font-weight: 700;
                font-size: 24px;
                margin-bottom: 20px;
                color: #181818;
              }
              
              p {
                margin-bottom: 16px;
                font-size: 16px;
                color: #585857;
              }
              
              .message-box {
                background-color: #f5f5f5;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #0e58ba;
              }
              
              .footer {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px solid #e5e5e5;
                text-align: center;
                font-size: 14px;
                color: #9dacb1;
              }
              
              .signature {
                margin-top: 30px;
                padding: 20px 0;
                text-align: center;
              }
              
             
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
              
                <h1>Welcome to EyeQVault!</h1>
                <h2>Securing your company's future with cutting-edge cybersecurity solutions</h2>
              </div>
              
              <p>Hi ${sanitizedFirstName},</p>
              
              <p>Thanks for reaching out to EyeQVault. We've received your message and are glad to see your interest in our cybersecurity solutions.</p>
              
              <p>A dedicated cyber expert from our team will reach out to you as soon as possible to discuss how we can help secure your digital future.</p>
              
              <div class="message-box">
                <strong>Your message:</strong>
                <p>${sanitizedMessage || "No message provided"}</p>
              </div>
              
              <p>In the meantime, feel free to explore our website for more information about our services and solutions.</p>
              
              
              <div class="footer">
                <p>© ${new Date().getFullYear()} EyeQVault Technologies. All rights reserved.</p>
                <p>Reach out to us at <a href="tel:+916375051662">+91 6375051662</a>.</p>
                <p>info@eyeqvault.com | <a href="https://www.eyeqvault.com">www.eyeqvault.com</a></p>
              </div>
            </div>
          </body>
          </html>
          `,
        }),
      }),
      fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: brevoHeaders,
        body: JSON.stringify({
          sender: { email: ADMIN_EMAIL, name: "EyeQVault Technologies" },
          to: [{ email: ADMIN_EMAIL, name: "EyeQVaultAdmin" }],
          subject: "New Contact Form Submission",
          htmlContent: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>EyeQVault - New Contact Form Submission</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

              body {
                font-family: 'Poppins', sans-serif;
                line-height: 1.6;
                color: #181818;
                background-color: #f8f8f8;
                margin: 0;
                padding: 0;
              }

              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 40px 20px;
                background-color: white;
              }

              .header {
                text-align: center;
                margin-bottom: 30px;
              }

              h1 {
                font-weight: 700;
                font-size: 24px;
                margin-bottom: 20px;
                color: #181818;
              }

              p {
                margin-bottom: 16px;
                font-size: 16px;
                color: #585857;
              }

              .lead-details {
                background-color: #f5f5f5;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #0e58ba;
              }

              .lead-details ul {
                list-style-type: none;
                padding: 0;
              }

              .lead-details li {
                padding: 8px 0;
                border-bottom: 1px solid #e5e5e5;
              }

              .lead-details li:last-child {
                border-bottom: none;
              }

              .footer {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px solid #e5e5e5;
                text-align: center;
                font-size: 14px;
                color: #9dacb1;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Lead from Website</h1>
              </div>

              <p>A new contact form submission has been received from the website:</p>

              <div class="lead-details">
                <ul>
                  <li><strong>Name:</strong> ${sanitizedFirstName} ${sanitizedLastName}</li>
                  <li><strong>Email:</strong> ${email}</li>
                  <li><strong>Phone:</strong> ${sanitizedPhone || "N/A"}</li>
                  <li><strong>Designation:</strong> ${
                    sanitizedDesignation || "N/A"
                  }</li>
                  <li><strong>Chosen Service:</strong> ${
                    sanitizedChosenService || "General Inquiry"
                  }</li>
                  <li><strong>Message:</strong> ${
                    sanitizedMessage || "No message provided"
                  }</li>
                  <li><strong>Submission Time:</strong> ${new Date().toLocaleString()}</li>
                </ul>
              </div>

              <p>Please follow up with this lead as soon as possible.</p>

              <div class="footer">
                <p>© ${new Date().getFullYear()} EyeQVault Technologies. All rights reserved.</p>
                <p>This is an automated message from your website contact form.</p>
              </div>
            </div>
          </body>
          </html>
          `,
        }),
      }),
    ]);

    res.json({ success: true, message: "Contact has been added." });
  } catch (err) {
    console.error("LOG | add-contact error:", err);
    return res
      .status(500)
      .json({ error: "Internal server error", message: err.message });
  }
}
