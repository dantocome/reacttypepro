import React from 'react'

function Home() {
    interface Ih2{
        color:string,
    }
    interface IP{
        color:string,
    }
    const pstyle:IP = {color: "royalblue"}
    const h2style:Ih2 = {color: "red"};

  return (
    <div>
      <h2 style = {h2style}>Home page</h2>
      <p style={pstyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quasi.</p>
    </div>
  )
}

export default Home
