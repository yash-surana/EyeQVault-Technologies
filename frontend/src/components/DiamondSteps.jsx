const DiamondSteps = ({ activeStep = 1, className = "" }) => {
  // Map step numbers to their corresponding diamond sections
  const getStepStyle = (stepNumber) => {
    const isActive = activeStep === stepNumber;
    return {
      // transform: isActive ? "scale(1.05)" : "scale(0.95)",
      opacity: isActive ? 1 : 0.6,
      transition: "all 0.3s ease-in-out",
      transformOrigin: "center",
    };
  };

  return (
    <svg
      width="492"
      height="444"
      viewBox="0 0 492 444"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_389_61)">
        {/* Top section - Step 7 */}
        <g filter="url(#filter1_d_389_61)" style={getStepStyle(7)}>
          <path
            d="M245.071 9.42969L146.862 134.055H343.135L245.071 9.42969Z"
            fill="url(#paint0_linear_389_61)"
          />
        </g>

        {/* Left center section - Step 5 */}
        <g filter="url(#filter2_d_389_61)" style={getStepStyle(5)}>
          <path
            d="M243.508 258L148 138H244L243.508 258Z"
            fill="url(#paint1_linear_389_61)"
          />
        </g>

        {/* Right center section - Step 6 */}
        <g filter="url(#filter3_d_389_61)" style={getStepStyle(6)}>
          <path
            d="M248.492 258L344 138H248L248.492 258Z"
            fill="url(#paint2_linear_389_61)"
          />
        </g>

        {/* Left top section - Step 1 */}
        <g filter="url(#filter4_d_389_61)" style={getStepStyle(1)}>
          <path
            d="M118.64 9.14258C85.8083 50.827 52.8321 92.5114 20 134.196H141.393C174.657 92.5114 207.777 50.827 241.041 9.14258H118.64Z"
            fill="url(#paint3_linear_389_61)"
          />
        </g>

        {/* Right top section - Step 2 */}
        <g filter="url(#filter5_d_389_61)" style={getStepStyle(2)}>
          <path
            d="M371.36 9C404.192 50.6844 437.168 92.5117 470 134.196H348.751C315.631 92.5117 282.367 50.6844 249.247 9H371.36Z"
            fill="url(#paint4_linear_389_61)"
          />
        </g>

        {/* Left bottom section - Step 4 */}
        <g filter="url(#filter6_d_389_61)" style={getStepStyle(4)}>
          <path
            d="M243.344 408.715C169.039 318.351 94.735 227.987 20.4307 137.48C60.7508 137.48 101.071 137.48 141.391 137.48C175.375 179.736 209.359 221.991 243.344 264.247V408.715Z"
            fill="url(#paint5_linear_389_61)"
          />
        </g>

        {/* Right bottom section - Step 3 */}
        <g filter="url(#filter7_d_389_61)" style={getStepStyle(3)}>
          <path
            d="M249 409.377C323.448 318.87 397.753 228.507 472.201 138C431.881 138 391.561 138 351.24 138C317.256 180.255 283.128 222.511 249.144 264.766V409.377H249Z"
            fill="url(#paint6_linear_389_61)"
          />
        </g>
      </g>

      {/* Center decorative elements */}
      <g clipPath="url(#clip0_389_61)">
        <path
          d="M230.586 154.882C231.054 154.124 231.522 153.366 232.08 152.468C232.255 152.811 232.385 153.038 232.478 153.306C234.596 158.831 239.367 161.99 245.329 161.835C249.159 161.711 252.426 160.232 255.479 158.043C258.89 155.587 260.998 152.214 262.314 148.312C262.989 146.302 262.956 144.244 262.59 142.18C262.483 141.641 262.357 141.122 262.052 140.552C261.991 140.865 261.872 141.201 261.946 141.489C263.505 148.611 257.771 156.975 249.971 159.714C246.917 160.796 243.809 160.869 240.718 159.815C237.088 158.57 234.077 155.007 233.564 151.298C234.822 151.769 235.72 153.169 237.403 152.806C236.049 151.659 234.838 150.603 233.628 149.586C233.218 149.253 232.725 149.177 232.495 149.634C231.678 151.184 230.921 152.751 230.203 154.316C230.15 154.415 230.298 154.623 230.345 154.776C230.368 154.833 230.487 154.867 230.586 154.882Z"
          fill="white"
        />
      </g>
      <g clipPath="url(#clip1_389_61)">
        <path
          d="M255.773 123.116C255.4 123.925 255.028 124.733 254.582 125.692C254.367 125.373 254.211 125.162 254.086 124.907C251.318 119.669 246.204 117.098 240.308 117.961C236.522 118.538 233.459 120.395 230.694 122.933C227.606 125.778 225.921 129.379 225.086 133.412C224.659 135.489 224.94 137.53 225.551 139.536C225.723 140.059 225.911 140.56 226.282 141.09C226.305 140.772 226.382 140.424 226.274 140.147C223.868 133.256 228.549 124.266 235.957 120.618C238.857 119.181 241.932 118.739 245.126 119.419C248.878 120.225 252.295 123.407 253.251 127.031C251.946 126.712 250.886 125.428 249.26 125.988C250.741 126.967 252.071 127.872 253.394 128.739C253.84 129.021 254.339 129.038 254.512 128.557C255.136 126.92 255.698 125.274 256.222 123.633C256.263 123.528 256.091 123.34 256.025 123.193C255.996 123.139 255.873 123.119 255.773 123.116Z"
          fill="white"
        />
      </g>

      {/* Step numbers */}
      <text
        x="131"
        y="85"
        fill="url(#paint7_linear_389_61)"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        style={getStepStyle(1)}
      >
        1
      </text>
      <text
        x="364"
        y="85"
        fill="url(#paint8_linear_389_61)"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        style={getStepStyle(2)}
      >
        2
      </text>
      <text
        x="328"
        y="255"
        fill="url(#paint9_linear_389_61)"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        style={getStepStyle(3)}
      >
        3
      </text>
      <text
        x="166"
        y="255"
        fill="url(#paint10_linear_389_61)"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        style={getStepStyle(4)}
      >
        4
      </text>
      <text
        x="213"
        y="190"
        fill="url(#paint11_linear_389_61)"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        style={getStepStyle(5)}
      >
        5
      </text>
      <text
        x="275"
        y="190"
        fill="url(#paint12_linear_389_61)"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        style={getStepStyle(6)}
      >
        6
      </text>
      <text
        x="244"
        y="95"
        fill="url(#paint13_linear_389_61)"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        style={getStepStyle(7)}
      >
        7
      </text>

      {/* All the original defs for gradients and filters */}
      <defs>
        {/* <filter
          id="filter0_d_389_61"
          x="0.9"
          y="4.9"
          width="490.401"
          height="438.577"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="15" />
          <feGaussianBlur stdDeviation="9.55" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_389_61"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_389_61"
            result="shape"
          />
        </filter> */}
        <filter
          id="filter1_d_389_61"
          x="144.962"
          y="1.02969"
          width="216.272"
          height="144.625"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="8.1" dy="1.6" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_389_61"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_389_61"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_389_61"
          x="146.1"
          y="129.6"
          width="116"
          height="140"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="8.1" dy="1.6" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_389_61"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_389_61"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_389_61"
          x="246.1"
          y="129.6"
          width="116"
          height="140"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="8.1" dy="1.6" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_389_61"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_389_61"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_389_61"
          x="18.1"
          y="0.742578"
          width="241.041"
          height="145.053"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="8.1" dy="1.6" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_389_61"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_389_61"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d_389_61"
          x="247.347"
          y="0.6"
          width="240.753"
          height="145.195"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="8.1" dy="1.6" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_389_61"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_389_61"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_d_389_61"
          x="18.5307"
          y="129.08"
          width="242.913"
          height="291.234"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="8.1" dy="1.6" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_389_61"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_389_61"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_d_389_61"
          x="247.1"
          y="129.6"
          width="243.201"
          height="291.377"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="8.1" dy="1.6" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_389_61"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_389_61"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_389_61"
          x1="245.191"
          y1="57.6244"
          x2="245.001"
          y2="134.055"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#223283" />
          <stop offset="0.9999" stopColor="#697FAA" />
          <stop offset="1" stopColor="#666767" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_389_61"
          x1="244"
          y1="138"
          x2="188.5"
          y2="211"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3566C8" />
          <stop offset="1" stopColor="#29353D" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_389_61"
          x1="248"
          y1="138"
          x2="303.5"
          y2="211"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3566C8" />
          <stop offset="1" stopColor="#29353D" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_389_61"
          x1="130.52"
          y1="9.14258"
          x2="130.52"
          y2="134.196"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#030B5F" />
          <stop offset="1" stopColor="#0C8CCC" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_389_61"
          x1="359.624"
          y1="9"
          x2="359.624"
          y2="134.196"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#030B5F" />
          <stop offset="1" stopColor="#0C8CCC" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_389_61"
          x1="131.887"
          y1="137.48"
          x2="131.887"
          y2="408.715"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00347D" />
          <stop offset="1" stopColor="#6EAAD7" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_389_61"
          x1="430.5"
          y1="160.5"
          x2="259.5"
          y2="379.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#173C67" />
          <stop offset="1" stopColor="#3380BE" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_389_61"
          x1="131.5"
          y1="65"
          x2="131.5"
          y2="95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0F0F0F" />
          <stop offset="1" stopColor="#6B6B6B" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_389_61"
          x1="364.5"
          y1="65"
          x2="364.5"
          y2="95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0F0F0F" />
          <stop offset="1" stopColor="#6B6B6B" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_389_61"
          x1="328.5"
          y1="239"
          x2="328.5"
          y2="269"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0F0F0F" />
          <stop offset="1" stopColor="#6B6B6B" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_389_61"
          x1="166.5"
          y1="239"
          x2="166.5"
          y2="269"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0F0F0F" />
          <stop offset="1" stopColor="#6B6B6B" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_389_61"
          x1="213.5"
          y1="172"
          x2="213.5"
          y2="202"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0F0F0F" />
          <stop offset="1" stopColor="#6B6B6B" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_389_61"
          x1="275.5"
          y1="172"
          x2="275.5"
          y2="202"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0F0F0F" />
          <stop offset="1" stopColor="#6B6B6B" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_389_61"
          x1="244.5"
          y1="77"
          x2="244.5"
          y2="107"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0F0F0F" />
          <stop offset="1" stopColor="#6B6B6B" />
        </linearGradient>
        <clipPath id="clip0_389_61">
          <rect
            width="31.8057"
            height="23.0282"
            fill="white"
            transform="matrix(0.674874 -0.737933 -0.742625 -0.669707 246.022 168.924)"
          />
        </clipPath>
        <clipPath id="clip1_389_61">
          <rect
            width="31.7819"
            height="23.0452"
            fill="white"
            transform="matrix(-0.581043 0.813873 0.816959 0.576697 238.765 111)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DiamondSteps;
