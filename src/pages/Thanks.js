import { useState } from "react"
import { GrPowerReset } from "react-icons/gr"
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom"
import Typewriter from "typewriter-effect";


export const Thanks=()=>{
    const [hover,setHover]=useState(false)
    const navigate=useNavigate();
    return <div className=" flex h-full w-full justify-center items-center   ">
        <div className=" text-center ">
            <motion.p initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}} className=" text-3xl text-gray-50 " >
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(50).typeString("Thank you for watching").start();
                    }}
                />
                 
            </motion.p>
            <div className=" inline-block mt-8 " >
                <motion.button initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:1}} onClick={()=>navigate("/")} onPointerEnter={()=>{setHover(true)}} onPointerLeave={()=>{setHover(false)}}  className=" flex items-center text-2xl bg-amber-700 text-gray-50 p-4 rounded-xl hover:scale-110 duration-300  " >
                    <motion.div initial={{rotate:0}} animate={{rotate:hover?360:0}} transition={{duration:0.5}}  ><GrPowerReset /></motion.div> <p className="ml-4">Replay</p>  
                </motion.button>
            </div>
        </div>   
    </div>
}