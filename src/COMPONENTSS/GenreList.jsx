import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import './GenreList.css'


function GenreList() {
  const [GenreList, setGenreList] = useState([]);
  const numberOfImagesToDisplay = 8; // Adjust this number as needed

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      console.log(resp.data.results);

      // Use slice to limit the number of items
      const limitedGenreList = resp.data.results.slice(0, numberOfImagesToDisplay);

      setGenreList(limitedGenreList);
    });
  };

  return (
    <div>
      <h2 className="text-[20px] font-bold ">Genre</h2>
      {GenreList.map((item) => (
        <div className="hover:bg-gray-400  flex gap-2 items-center mb-1 cursor-pointer  p-5  rounded-3xl" key={item.id}> {/* Adding a key to each item for React */}
        
          <img src={item.image_background} className="nd1 w-[20px] h-[20px] gap-2 items-center mb-1 "  alt={item.name} />
          <h3 className="text-[30px] ml-1 group-hover:font-bold  cursor-pointer">{item.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
