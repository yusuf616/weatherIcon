import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { Layout } from "./Layout/Layout";
import { Home } from "./pages/Home";
import { Thanks } from "./pages/Thanks";



export const App=()=>{    
    return (<>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>} />
                    <Route path="/thanks" element={<Thanks/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>);

}