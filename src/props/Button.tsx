import React from 'react'
import "./Button.css"

interface ButtonProps{
    label:string;
    onClick:()=>void;
    disabled?:boolean;
    color?: "primary" | "secondary" | "readmore";
}
const Button = ({label, onClick, disabled=false, color="primary"}:ButtonProps) => {
  const btnStyle = `button ${color} ${disabled}? "disabled": ""`
  return (
    <div>
      <button className= {btnStyle} onClick={onClick} disabled={disabled} color={color}>{label}</button>
      
    </div>
  )
}

export default Button
