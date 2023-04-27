
import './App.css';
import {handleGetOneDayWeather} from "./components/api";
import {useEffect} from "react";

function App() {

  const ShirazDetail = async ()=>{
    const data = await  handleGetOneDayWeather("shiraz");
    console.log(data)
  }


  useEffect(()=>{
    ShirazDetail().then()
  } , [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
