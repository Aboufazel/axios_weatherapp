import "./cityCars.style.scss";
import Status from "../../assets/pics/weather-status/Sun cloud angled rain.png"
const CityCard = ({name}) => {



    return(
        <div className={"flex flex-col relative my-[35px] items-center py-[5px] px-[20px] justify-start shadow-xl w-[280px] h-[135px] cityCard"}>
            <img src={Status} alt={"weather-status"} className={"absolute top-[-47px] right-[6px] w-[45%]"}/>
                <div className={"flex w-full items-center"}>
                   <h1 className={"font-semibolds text-[45px]"}>
                    19°
                   </h1>
                </div>
                <div className={"flex items-center justify-between w-full"}>
                    <div className={"flex flex-col w-1/2"}>
                        <p className={"flex items-center opacity-50 text-[14px] gap-[8px]"}>
                            <span>H:16°</span>
                            <span>L:8°</span>
                        </p>
                        <p className={"mt-[-3px] font-semibold"}>
                            Fars, Shiraz
                        </p>
                    </div>
                    <div className={"flex justify-end items-center w-1/2"}>
                        <p className={"font-bold"}>
                            {"Cloudy"}
                        </p>
                    </div>
                </div>
        </div>
    )
}


export default CityCard;