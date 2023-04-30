import {handleGetOneDayWeather} from "./components/api";
import {useEffect} from "react";
import "./index.css";
import "./App.css"
import CityCard from "./components/CityCard/CityCard";
import {cityData} from "./cityData/cityData";


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
        {
            cityData.map(item => (
                <div className={"container max-w-[500px] mx-auto flex flex-col items-center"} key={`city-card-show-first${item.id}`}>
                    <CityCard name={item.name}/>
                </div>
            ))
        }
    </div>
  );
}

export default App;
