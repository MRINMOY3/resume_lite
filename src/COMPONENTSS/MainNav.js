import React, { useState } from "react";
import './MainNav.css'
import logo from './../Assets/Images/nimage.png'
import { HiLightBulb } from "react-icons/hi2";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { GiExitDoor } from "react-icons/gi";
import { GiFallingStar } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";




const MainNav=()=>{



//Uisng the react HookS





const [toggle,setToggle]=useState(false);











return(
<div className="nav items-center bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 ">

        <div>
                  <img className="logo" src={logo} width={30} height={30}/>    
        </div>
          
      <h1 className='font-mono ... bold underline ...  font-bold ... pl-8    cursor-pointer'>
        Study
      </h1>
      <h1 className="gp">
      
      </h1>
      
      <h1 className='font-mono ... bold underline ...  font-bold ... pl-3  cursor-pointer'>
        Coding

      </h1>
      <h1 className="gp">
    
      </h1>
      <h1 className='font-mono ... bold underline ...  font-bold ... pl-3  cursor-pointer'>
        Music
      </h1>
      <h1 className="gp">
          
      </h1>

      <h1 className='font-mono ... bold underline ...  font-bold ... pl-3   cursor-pointer'>
        Magic
      </h1>



      <div className="">

        <div className="srcsrc flex ml-10  bg-blue-800 p-1 w-250px items-center">
          <FiSearch/>
          <input  type="text" className="bg-transparent outline-none px-4"/>
        </div>
      </div>



      <div className="nm1">
        <HiEllipsisHorizontal className="reset1"/>
        <GiExitDoor className="reset2"/>
        <GiFallingStar className="reset3"/>
      </div>

<div className="nm2">
      {toggle ? (
        <IoIosEyeOff
          className="reset11 cursor-pointer"
          onClick={() => setToggle(!toggle)} // Correct way to update the state
        />
      ) : (
        <IoIosEye
          onClick={() => setToggle(!toggle)} // Correct way to update the state
          className="reset22 cursor-pointer"
        />
      )}
    </div>

        </div>
)

}

export default MainNav;
