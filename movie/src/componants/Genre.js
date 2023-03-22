import React from "react";
import { useEffect,useState } from "react";
function Genre(props){
let [isLoading,setLoading] = useState(true);
let [content,setContent] = useState([]);

useEffect(()=>{
    async function fetchData(){

      let response = await fetch('http://localhost:3000/genre');
      response = await response.json();
      setContent(response);
      setLoading(false);
    }fetchData(); 
},[])
    
function HandleGenreClick(e){
    let genreName = e.target.innerText;     // agar yaha innerText ki jagah innerHTML kroge to movies table mein includes()mein nhi chalega
    // console.log(genreName);
    props.genreNameHandler(genreName);
}

    return(
        <div className="w-1/5 text-center" >
             <div className="border-2 text-center h-10 hover:bg-gray-200 py-1 font-bold cursor-pointer" onClick={HandleGenreClick}> All Genre </div>
        {
            isLoading===true?<div>Loading...</div>:
            <div>
                {
                    content.map((gen,idx)=>{
                        return(
                            <div className="border-2 text-center h-10 hover:bg-gray-200 py-1 border-t-0 cursor-pointer" onClick={HandleGenreClick}> {gen.name} </div>
                        )
                    })
                }
            </div>
        }
        </div>
    )
}

export default Genre;