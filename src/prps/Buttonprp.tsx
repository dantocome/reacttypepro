import React from 'react'
import "./buttonprp.css"



interface Buttonprp{
    label:string,
    onClick: ()=> void,
    color?: "pricolor" | "seccolor"
    disabled?:boolean,
}

const Buttonprp = ({label, onClick, color="pricolor", disabled=false}:Buttonprp) => {
    const btnstyle = `buttonprp ${color}`

  return (
    <div>
      <button className= {btnstyle} onClick={onClick} disabled={disabled}>{label}</button>
    </div>
  )
}

export default Buttonprp
