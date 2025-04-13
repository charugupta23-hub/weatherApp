import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


const InfoBox = (props) => {
   
      
  return (
   <div className='Box' style={{width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Card style={{width:"30rem"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://plus.unsplash.com/premium_photo-1664303499312-917c50e4047b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHVzdCUyMHN0b3JtfGVufDB8fDB8fHww"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.city} , {props.description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <div>Temperature={props.temp}°C</div>
            <div>Max Temperatue={props.maxTemp}°C</div>
            <div>Min Temperatue={props.minTemp}°C</div>
            <div>Feels Like={props.feelsLike}°C</div>
            <div>Humidity={props.humidity}%</div>
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
   </div>
  )
}

export default InfoBox