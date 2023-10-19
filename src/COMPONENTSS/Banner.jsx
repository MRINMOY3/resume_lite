import React, { useEffect } from "react";
import './Banner.css'


const Banner = ({gamebanner})=>{


    useEffect(()=>{
        console.log("gamebanner",gamebanner)
    },[])
    return (

        <div className="relative">

                <div className="absolute bottom-0 p-5">

                    <h2 className="text-[24px] text-white font-bold">{gamebanner.name}</h2>
                    <button  className="banner_button text-white px-2 p-1 hover:bg-purple-500">Get Now ! </button>
                </div>


                <img src={gamebanner.background_image} className="dd"/>
        </div>
    )
}


export default Banner;