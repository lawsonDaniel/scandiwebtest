import React from "react";

interface IProps {
  onClick?: () => unknown;
  text: string;
  style?: React.CSSProperties;
  id?:  string;
}

const Button: React.FC<IProps> = ({ text, onClick, style,id }) => {
  console.log(id)
  return (
    <button
      id={id}
      onClick={onClick}
      style={{
        padding: "10px 13px",
        backgroundColor: "green",
        border: "none",
        borderRadius: 10,
        cursor: "pointer",
        color: "#fff",
        ...style,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
