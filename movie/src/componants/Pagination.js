import React from "react";

function Pagination(){


    return(
        <div className="border-2 ">
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"> {1} </button>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"> {2} </button>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"> {3} </button>
        </div>
    )
}
export default Pagination;