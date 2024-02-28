import React from 'react'

function about() {
    interface Ih2{
        color:string,
        backgroundColor:string,
    }
    const h2style:Ih2 = {color:"red", backgroundColor:"whitesmoke"}
  return (
    <div>
        <h2 style={h2style}>About Us</h2>
      <p>This this about string code company</p>
    </div>
  )
}

export default about
