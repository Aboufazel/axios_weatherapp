import "./cityCars.style.scss";
import Sunny from "../../assets/pics/weather-status/suny.png";
import highTemp from "../../assets/pics/weather-status/heightTemp.png"
import lowTemp from "../../assets/pics/weather-status/lowTemp.png"

const CityCard = () => {

    return(
        <div className={"flex flex-col my-[15px] items-center gap-[5px] justify-center shadow-xl w-[280px] h-[180px] cityCard"}>
            <div className={"flex items-center gap-[9px] justify-center rounded-[50%] w-[80px] h-[80px]"}>
                <img src={Sunny} alt={"weather-status"}/>

                <h1 className={"font-extrabold text-black"}>
                    {"Shiraz"}
                </h1>
            </div>

            <div className={"w-[90%] p-[5px] rounded-[5px] gap-8 flex flex-row  justify-center items-center text-black h-[60px]"}>
                <div className={"flex w-1/2 justify-center gap-2 items-center"}>
                    <img src={highTemp} alt={"high-temp"} className={"w-[35px]"}/>
                    <p className={"font-black"}>
                        {"28°"}
                    </p>
                </div>
                <div className={"flex w-1/2 gap-2 justify-center items-center"}>
                    <img src={lowTemp}  alt={"high-temp"} className={"w-[35px]"}/>
                    <p className={"font-black"}>
                        {"6°"}
                    </p>
                </div>
            </div>
        </div>
    )
}


export default CityCard;