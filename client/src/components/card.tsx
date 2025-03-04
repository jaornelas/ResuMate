import React from "react";
import { Card as BootstrapCard} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

interface CardProps {
  children: React.ReactNode;
  className?: string; // Allows custom styles
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return <BootstrapCard className={`card ${className}`}>{children}</BootstrapCard>;
};

export default Card;
