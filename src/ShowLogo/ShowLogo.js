import { useEffect } from "react"
import { Cloud } from "./Cloud"
import { Sun } from "./Sun"
import {motion} from "framer-motion"

export const ShowLogo=({
    onFinishShow=()=>{}
})=>{

    useEffect(()=>{
        const a=setTimeout(()=>{
            onFinishShow(true)
            clearTimeout(a);
        },8*1000)
        return ()=>{clearTimeout(a)}
    },[])

    return (
        <motion.div initial={{scale:1,opacity:1}} animate={{scale:0,opacity:0}} transition={{delay:4,duration:3,ease:[1,0.9,1,0]}}>
            <div className=" relative w-[512px] h-[512px] ">
                <div className=" absolute top-0 left-0  " >
                    <Sun/>
                </div>
                <div className=" absolute top-0 left-0  " >
                    <Cloud/>
                </div>
            </div>
        </motion.div>
    )
}