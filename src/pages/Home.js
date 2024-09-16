import { useNavigate } from "react-router-dom"
import { ShowLogo } from "../ShowLogo/ShowLogo"


export const Home=()=>{
    const navigate=useNavigate();


    return <div className=" h-full w-full flex justify-center items-center  " >
        <div className="  relative  ">
            <ShowLogo onFinishShow={(e)=>{e&&navigate("/thanks")}}  />
        </div>
    </div>
}