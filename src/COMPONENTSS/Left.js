import React from "react";
import Games from "./Games";



import './Left1.css'
import Mx from "./MusicPlayer.js/Mx";
import { HiLightBulb } from "react-icons/hi2";
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { HiMiniPhoto } from "react-icons/hi2";
import { HiArrowRightCircle } from "react-icons/hi2";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { HiMiniCpuChip } from "react-icons/hi2";
import { HiMiniBolt } from "react-icons/hi2";


const Left=()=>{


    const addHandler=event=>{
        event.preventDefault();


        const newGoal={
            id:Math.random.toString(),
            text:"Hello There"
        }

        console.log(newGoal);
    };



    return (

        <div className="head">
            <div className="search-container ">

            <div className="f1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                <HiLightBulb className="ic1 cursor-pointer"/>
                <HiOutlineMusicalNote className="ic1 cursor-pointer"/>
                <HiMiniPhoto className="ic1  cursor-pointer"/>
                <HiMiniCodeBracketSquare className="ic1  cursor-pointer"/>
                <HiMiniCpuChip className="ic1  cursor-pointer"/>
                <HiMiniBolt className="ic1  cursor-pointer"/>


                <div class="Loading">
               <div class="Loading-progress">

                <div className="butterfly_effect1  ">

                </div>
               </div>
               
            </div>


              <div class="Loading">
               <div class="Loading-progress">

                <div className="butterfly_effect1  ">

                </div>
               </div>
               
            </div>


              <div class="Loading">
               <div class="Loading-progress">

                <div className="butterfly_effect1  ">

                </div>
               </div>
               
            </div>

            </div>


            
            </div>

                            
            </div>

    )

}

export default Left;