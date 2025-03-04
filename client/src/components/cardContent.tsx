import React from "react";

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => {
  return <div className={`card-content ${className}`}>{children}</div>;
};

export default CardContent;
