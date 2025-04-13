import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBox = ({updateInfo}) => {
  const[result,setResult]=useState({city:"",temp:"",maxTemp:"",minTemp:"",humidity:"",feelsLike:"",description:""})
  const [city,setCity]=useState("")
  const API_URL='https://api.openweathermap.org/data/2.5/weather'
  const API_KEY='fe191a2c0c93333f9ec54d43c147c83b'
  async function getWeatherInfo(){
     let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
     let jsonResponse=await response.json()
     console.log(jsonResponse)
      const result=({
        city:city,
        temp:jsonResponse.main.temp,
        maxTemp:jsonResponse.main.temp_max,
        minTemp:jsonResponse.main.temp_min,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        description:jsonResponse.weather[0].description

     })
     return result;
  }
  function handleChange(e){
    setCity(e.target.value)
  }
  async function handleSubmit(e){
    e.preventDefault()
    console.log(city)
    let info=await getWeatherInfo()
    updateInfo(info)
    setCity("")
    
  }
  
  return (
    <div style={{width:"100vw"}}>
        <h1>Search for the Weather</h1>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City" variant="outlined" required value={city} onChange={handleChange}/>
        <br></br><br></br>
        <Button variant="contained" type='submit' style={{marginBottom:"8px"}}>Search</Button>
        </form>

    </div>
    
  )
}

export default SearchBox