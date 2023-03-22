import React from "react";
import { useState,useEffect } from "react";

function MoviesTable()
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
                        content.map((movie, idx)=>{
                            return(
                                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200  text-gray-900">
                                <td className="px-6 py-4">{idx+1}</td>
                                <td className="px-6 py-4">{movie.Title}</td>
                                <td className="px-6 py-4">{movie.Genre}</td>
                                <td className="px-6 py-4">{Math.floor(Math.random()*10)+1}</td>
                                <td className="px-6 py-4">{movie.imdbRating}</td>
                                <td className="px-6 py-4"><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded ml-2">Delete</button></td>
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