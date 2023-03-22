import React from "react";
import Movies from "./Movies";
import Genre from "./Genre";
import { useState } from "react";
function Main(){
    let [genreName,setGenreName] = useState("All Genre");

    function genreNameHandler(genreName){
        // console.log(genreName);
        setGenreName(genreName);
    }
    return(
    <div className="flex h-screen">
        <Genre genreNameHandler = {genreNameHandler}></Genre>
        <Movies genreName={genreName}></Movies>
        
    </div>
    )
        
}
export default Main;