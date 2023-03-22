import React from "react";
import { useState,useEffect } from "react";

function MoviesTable(props)
{

    const [isLoading,setLoading] = useState(true);
    const [content,setContent] = useState([]);
useEffect(()=>{
    async function fetchData(){
        let response = await fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON');  //data in json fprmat https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON
        response = await response.json();    //converts it into jso
        setLoading(false);
        setContent(response);
        
    
    }
    fetchData();
},[])

const deleteButtonClicked = function(idToBedeleted){
    let restOfMovies = content.filter((mvi)=>{
        return mvi.imdbID!==idToBedeleted;
    });

    setContent(restOfMovies);
}

let filteredContent = [];
/* ---------------------------------------------for filtering movies acc to search bar-------------------- */

if(props.searchVal){
    filteredContent = content.filter((movie)=>{
        return movie.Title.toLowerCase().includes(props.searchVal.toLowerCase());
    });
}
else{
    filteredContent = content;
}
/* -------------------------------------------------------For filtering according to Genre---------------------------------------------------------- */

// console.log(props.counterVal);
if(props.genreName!="All Genre")
{
    filteredContent = filteredContent.filter((movie)=>{
        // console.log(typeof(movie.Genre));
        let genres = movie.Genre.toLowerCase();
        let propGenre = props.genreName.toLowerCase();
        console.log(genres.includes(propGenre));
        return genres.includes(propGenre);   // note- inlcudes() method binaa toLowercase() ke nahi chalega
    })
}
else{
    //do nothing
}

/*-----------------------------------------------------------for counter------------------------------------------------------------6---------- */
if(props.counterVal>0){
    filteredContent = filteredContent.slice(0,props.counterVal);
}
else{
   //do nothing
}


//  console.log("moviestable: "+props.genreName);


    return(
        <div className="border-2 m-3">
            {isLoading==true? <div>Loading...</div> : 
            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Serial no.</th>
                        <th scope="col" className="px-6 py-3">Movie Name</th>
                        <th scope="col" className="px-6 py-3">Genre</th>
                        <th scope="col" className="px-6 py-3">Stocks</th>
                        <th scope="col" className="px-6 py-3">rate</th>
                    </tr>

                </thead>

                <tbody>
                       {
                        
                        filteredContent.map((movie, idx)=>{
                            return(
                                <tr key={movie.imdbID} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200  text-gray-900">
                                <td className="px-6 py-4">{idx+1}</td>
                                <td className="px-6 py-4">{movie.Title}</td>
                                <td className="px-6 py-4">{movie.Genre}</td>
                                <td className="px-6 py-4">{Math.floor(Math.random()*10)+1}</td>
                                <td className="px-6 py-4">{movie.imdbRating}</td>
                                <td className="px-6 py-4"><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded ml-2" onClick={()=>{ deleteButtonClicked(movie.imdbID);}}>Delete</button></td>
                            </tr>
                            )
                        })
                       }
                </tbody>
            </table>}
        </div>
    )
    
} 

export default MoviesTable;