// Reusable Button component to be used across the site
// Using props to allow different text and click events
import React from 'react';

// Defining what props the button accepts
interface ButtonProps {
  text: string;           // The label on the button
  onClick?: () => void;   // Optional function when clicked
  variant?: 'primary' | 'secondary'; // To change styles easily
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  // Simple logic to switch colors based on the 'variant' prop
  // Primary is blue, Secondary is gray/outline
  const baseStyle = "px-6 py-2 rounded font-medium transition duration-200";
  const primaryStyle = "bg-blue-600 text-white hover:bg-blue-700";
  const secondaryStyle = "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button 
      className={`${baseStyle} ${variant === 'primary' ? primaryStyle : secondaryStyle}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;