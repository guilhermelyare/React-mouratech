import React from "react";
import Timer from "../components/Exemplo1";
import Menu from "../components/Menu"

function HomePage(){
    return(
        <div className="bg-gray-400 w-screen h-screen">
            <Menu />
            <Timer />
        </div>
    )
}

export default HomePage;
