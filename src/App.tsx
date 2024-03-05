import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Headers/Header'
import Project from './cordinates/Project'
import RouterApp from './components/Router/RouterApp'
import Routers from './Segments/Routers/Routers'
import Button from './props/Button'
import Buttonprp from './prps/Buttonprp'
import Students from './students/Students'
import { GENDER } from './Segments/consts/k'
import TestHome from './test/TestHome'
import Counter from './Usestate/Counter'






function App() {
const handleClick = ()=>{
  alert("clicked")
};

const handleReadmore = ()=>{
  alert("clicked on read more")
}

  return (
    <>
    {/* <Button label='Sign up' onClick={handleClick}/>
    <Button label='Login' onClick={handleClick} color='secondary'/>
    <Button label='Read More' onClick={handleReadmore} color='readmore'/>
    <Buttonprp label='Sign in' onClick={handleClick}/>
    <Students id={1} firstName='Daniel' LastName='Egele' gender={GENDER.Male} /> */}

  

      {/* <Header/> */}
      {/* <Project/> */}
      {/* <RouterApp/> */}
      {/* <Routers/>
      <TestHome id={1} firstName='Daniel' lastName='Egele' gender={GENDER.Male}/> */}
      <Counter/>
      
      
      
    </>
  )
}

export default App
