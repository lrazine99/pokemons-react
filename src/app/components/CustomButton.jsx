import React from "react";

function CustomButton({
  text,
  color = "bg-blue-500",
  textColor = "text-white",
}) {
  return (
    <button
      className={`px-4 py-2 rounded ${color} ${textColor} hover:cursor-pointer hover:opacity-80 transition duration-300`}
    >
      {text}
    </button>
  );
}

export default CustomButton;
