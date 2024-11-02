import React from 'react';

interface ButtonProps {
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className: string;
  logo?: string; // 이미지 경로를 위한 string 타입
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick, disabled, className, logo }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center px-4 py-4 font-semibold  ${className}`}
    >
      {logo && (
        <img 
          src={logo} 
          alt="logo" 
          className="mr-[7px] w-5 h-5" // 아이콘 크기 조정
        />
      )}
      {text}
    </button>
  );
};

export default Button;