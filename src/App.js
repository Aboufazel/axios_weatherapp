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
      <div className={"flex items-center w-full mb-4 searchInput h-[36px] p-[8px]"}>

        <button>
          <svg opacity={'50%'} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
               className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
          </svg>
        </button>


        <input type={"search"} placeholder={"Search for a city or airport"} className={"w-full ml-[4px] text-amber-50"}/>
      </div>
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
