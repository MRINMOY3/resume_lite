import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import './GenreList.css'


function Games() {
  const [GenreList, setGenreList] = useState([]);
  const numberOfImagesToDisplay = 8; // Adjust this number as needed

  useEffect(() => {
    getAllGames();
  }, []);

  const getAllGames = () => {
    GlobalApi.getAllGames.then((resp) => {
      console.log(resp.data.results);

      // Use slice to limit the number of items
      const limitedGenreList = resp.data.results.slice(0, numberOfImagesToDisplay);

      setGenreList(limitedGenreList);
    });
  };

  return (
    <div>
      <h2 className="text-[20px] font-bold ml-3 px-4">Game_List__Popular Games</h2>
      {GenreList.map((item,index) =>index<4&& (

<div>
          <img src={item.image_background} className="nd1 w-[20px] h-[20px] gap-2 items-center mb-1 "  alt={item.name} />
          <h3 className="text-[30px] ml-1 group-hover:font-bold  cursor-pointer">{item.name}</h3>
</div>
          
      ))}
    </div>
  );
}

export default Games;
