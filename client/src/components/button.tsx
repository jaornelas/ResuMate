import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset"; // Allows different button types
  onClick?: () => void; // Handles button click events
  children: React.ReactNode; // Button text or icon
  variant?: "primary" | "secondary" | "outline"; // Button styles
  size?: "small" | "medium" | "large"; // Button size
  disabled?: boolean; // Disables button if true
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
}) => {
  return (
    <button
      className={`btn ${variant} ${size}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
