import React from "react";
import InputBox from './InputBox';
import MoviesTable from './MoviesTable';
import Pagination from './Pagination';
function Movies()
{
    return(
        <div className="border-l-2 py-2 px-2 w-4/5 h-screen "> 
            <InputBox></InputBox>
            <MoviesTable></MoviesTable>
            <Pagination></Pagination>

        </div>
    )
}

export default Movies;