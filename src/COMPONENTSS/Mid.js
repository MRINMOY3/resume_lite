import React, { useEffect, useState } from "react";
import './Mid.css'
import Splin from "./Splin";
import GenreList from "./GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "./Banner";
import Right from "./Right";
import Games from "./Games";

const Mid=()=>{



    function startCounter(start, end, interval, callback) {
  let current = start;

  function displayCount() {
    callback(current);
    current++;

    if (current <= end) {
      setTimeout(displayCount, interval);
    }
  }

  if (start <= end) {
    displayCount();
  } else {
    console.error("Invalid input: 'start' should be less than or equal to 'end'");
  }
}

// Usage example
startCounter(1, 10, 1000, (count) => {
  console.log(count);
});









    const [allGameList,setAllGameList]=useState();
            useEffect(()=>{
            getAllGamesList();
        },[])






    const [allGameList1,setAllGameList1]=useState();
            useEffect(()=>{
            getAllGamesList();
        },[])

















    const getAllGamesList=()=>{
        GlobalApi.getAllGames.then((resp)=>{
            console.log(resp.data.results)
            setAllGameList(resp.data.results)
        })
    }




    return <div className="  head1  md:w-32 lg:w-48">

           <div className=" grid  mx-6 my-6">
            <div className="bb1 ">
        

        <div className= "details     bg-pink-300/100 ... gap-2 items-center mb-1   rounded-3xl p-4  ">
            <GenreList />
            
        </div>


            <div className="flex ">
              
            </div>
            <div className="details ml-1   font-bold">
              {allGameList?.length>0?  <Banner gamebanner={allGameList[0]}/>:null}
              
              
              
              <div className="det1 bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                  <h1>Hello!</h1>
                  <div>
                    <pre>
                      <code>
                        #include
                        
                        <h1 className="bg-green-500">&lt;iostream&gt;</h1>
                        using namespace std;
                        <br></br>int main()

                      </code>
                    </pre>
                  
                  </div>

                


              </div>


            </div>
                  <div className=" Ori_Gamme backdrop-blur-sm bg-white/30 ...">
                                <Games game ={allGameList1}/>
                  </div>
            <div>
            </div>
        
            
            </div>
  
           </div>




           


           
             </div>;
             

    

}

export default Mid;


