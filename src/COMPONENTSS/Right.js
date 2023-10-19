import './right.css'

import React, { useEffect, useState } from "react";
import './Mid.css'
import Splin from "./Splin";
import GenreList from "./GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "./Banner";
import Games from './Games';

const Right=()=>{


       const [allGameList,setAllGameList]=useState();




            useEffect(()=>{
            getAllGamesList();
        },[])




    const getAllGamesList=()=>{
        GlobalApi.getAllGames.then((resp)=>{
            console.log(resp.data.results)
            setAllGameList(resp.data.results)
        })
    }




    return(
        <div className="Details  bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900" >
            <div className="  font-bold">
              {allGameList?.length>0?  <Banner gamebanner={allGameList[0]}/>:null}
            </div>

       
        </div>
    )
}


export default Right;