import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Slider from "../slider/Slider";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;