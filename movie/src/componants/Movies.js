import React from "react";
import InputBox from './InputBox';
import MoviesTable from './MoviesTable';
import Pagination from './Pagination';
import { useState } from "react";
function Movies()
{
    let [searchVal,setSearchVal]=useState("");
     function HandleInputText(text){
        // console.log(text);
        setSearchVal(text);
    }
    return(
        <div className="border-l-2 py-2 px-2 w-4/5 h-screen "> 
            <InputBox HandlerForInputText={HandleInputText}></InputBox>
            <MoviesTable searchVal={searchVal}></MoviesTable>
            <Pagination></Pagination>

        </div>
    )
}

export default Movies;