import "./cityCars.style.scss"

const CityCard = () => {

    return(
        <div className={"flex flex-col items-center justify-center w-[280px] h-[180px] cityCard"}>
            <div className={"bg-amber-300 flex items-center justify-center rounded-[50%] w-[80px] h-[80px]"}>
                Weather Icon
            </div>
        </div>
    )
}


export default CityCard;