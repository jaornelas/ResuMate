import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string; // Allows custom styles
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
