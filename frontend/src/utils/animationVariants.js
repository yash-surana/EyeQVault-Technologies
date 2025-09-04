/**
 * Common animation variants for use across components
 */

// Container animations with staggered children
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Standard item animations for cards and sections
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Background gradient animations
export const backgroundVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 1.2,
      ease: "easeOut" 
    } 
  },
};

// Title and heading animations
export const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7,
      ease: "easeOut" 
    } 
  },
};

// Logo grid container animations
export const logoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Logo item animations
export const logoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10
    } 
  },
};

// Image hover animations
export const imageHoverVariants = {
  hover: { 
    scale: 1.05, 
    transition: { 
      type: "spring", 
      stiffness: 300 
    } 
  }
};

// Card hover animations
export const cardHoverVariants = {
  hover: { 
    scale: 1.03, 
    transition: { 
      type: "spring", 
      stiffness: 300,
      damping: 10
    } 
  }
};

// Floating animation for elements like the world animation
export const floatingVariants = {
  animate: {
    scale: [1, 1.02, 1],
    rotate: [0, 1, 0, -1, 0],
    transition: { 
      duration: 8, 
      ease: "easeInOut", 
      repeat: Infinity,
      repeatType: "reverse" 
    } 
  }
};

// List item staggered animations
export const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: "spring",
      stiffness: 100
    } 
  }
};

// Counter number animations
export const counterVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 100
    } 
  }
};