import {handleGetOneDayWeather} from "./components/api";
import {useEffect} from "react";
import "./index.css";
import "./App.css"
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
    <div className={"container flex flex-col items-center lg:w-max-[1800px] w-full"} style={{padding:"20px"}}>
       <CityCard/>
       <CityCard/>
       <CityCard/>
       <CityCard/>
       <CityCard/>
    </div>
  );
}

export default App;
