import {handleGetOneDayWeather} from "./components/api";
import {useEffect} from "react";
import "./index.css"
import CityCard from "./components/CityCard/CityCard";



function App() {

  const ShirazDetail = async ()=>{
    const data = await  handleGetOneDayWeather("shiraz");
    console.log(data)
  }


  useEffect(()=>{
    ShirazDetail().then()
  } , [])

  return (
    <div style={{height:"94.3vh"  ,padding:"20px"}}>
       <CityCard/>
    </div>
  );
}

export default App;
