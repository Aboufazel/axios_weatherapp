import "./cityCars.style.scss";
import City from "../../assets/pics/washington.png";

const CityCard = ({name}) => {



    return(
        <div className={"flex flex-col my-[15px] items-center gap-[5px] justify-center shadow-xl w-[280px] h-[180px] cityCard"}>
            <div className={"flex flex-col items-center gap-3 justify-center rounded-[50%] w-[60px] h-[60px]"}>
                <img src={City} alt={"weather-status"}/>
                <h1 className={"font-extrabold text-xl"}>
                    {name}
                </h1>
            </div>
        </div>
    )
}


export default CityCard;