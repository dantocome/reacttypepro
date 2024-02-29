import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Headers/Header'
import Project from './cordinates/Project'
import RouterApp from './components/Router/RouterApp'
import Routers from './Segments/Routers/Routers'
import Button from './props/Button'




function App() {
const handleClick = ()=>{
  alert("button clicked")
}

  return (
    <>
    <Button label='Sign up' onClick={handleClick}/>
      {/* <Header/> */}
      {/* <Project/> */}
      {/* <RouterApp/> */}
      {/* <Routers/> */}
      
      
      
    </>
  )
}

export default App
