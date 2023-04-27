
import './App.css';
import {handleGetOneDayWeather} from "./components/api";
import {useEffect, useState} from "react";
import Night from "./assets/pics/dark-clouds-during-rainy-weather.jpg"
import Sun from "./assets/pics/sunset-background-featuring-sky-clouds.jpg"


function App() {
   const [day , setDay] = useState(false)
  const ShirazDetail = async ()=>{
    const data = await  handleGetOneDayWeather("shiraz");
    console.log(data)
  }


  const date = new Date();

   useEffect(()=>{
     if(date.getHours() >= 12){
       setDay(true)
     }
   } , [date])



  useEffect(()=>{
    ShirazDetail().then()
  } , [])

  return (
    <div style={{height:"100vh"  ,padding:"20px"}}>
      jhdfjsdkjfhkfjghf
    </div>
  );
}

export default App;
