import { Outlet } from "react-router-dom"
import { ShowLogo } from "../ShowLogo/ShowLogo"
import { useState } from "react";



export const Layout=({
    children
})=>{

    // const [show,setShow]=useState(true);

    return (<div className="w-screen h-screen bg-amber-800">
        {children||<Outlet/>}
    </div>)
}