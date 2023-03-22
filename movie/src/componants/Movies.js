import React from "react";
import InputBox from './InputBox';
import MoviesTable from './MoviesTable';
import Pagination from './Pagination';
import { useState } from "react";
function Movies(props)
{
    let [searchVal,setSearchVal]=useState("");
    let [counterVal,setCounterVal]=useState(0);
     function HandlerForCounter(count){
        // console.log(count);
        setCounterVal(count);
     }
     function HandleInputText(text){
        // console.log(text);
        setSearchVal(text);
    }
    return(
        <div className="border-l-2 py-2 px-2 w-4/5 h-screen "> 
            <InputBox HandlerForInputText={HandleInputText} HandlerForCounter={HandlerForCounter}></InputBox>
            <MoviesTable searchVal={searchVal} counterVal={counterVal} genreName={props.genreName}></MoviesTable>
            <Pagination></Pagination>

        </div>
    )
}

export default Movies;