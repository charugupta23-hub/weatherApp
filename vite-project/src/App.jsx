import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './Components/SearchBox'
import InfoBox from './Components/InfoBox'

function App() {
  
  const[weatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        description: "clear sky",
        temp: 35.94,
        feelsLike: 34.12,
        minTemp: 35.94,
        maxTemp: 35.94,
        humidity: 20
  })
  let updateInfo=((result)=>{
    setWeatherInfo(result)
  })
  
  return (
    <>
      <div style={{height:"100vh",width:"100vw",backgroundImage:""}}>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox {...weatherInfo}/>
      </div>
    </>
  )
}

export default App
