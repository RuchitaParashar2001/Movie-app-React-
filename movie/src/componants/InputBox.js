import React from "react";
import { useState } from "react";

function InputBox()
{
    let [text,updateText] = useState("");
    let [counter,updateCounter] = useState(0);

    const HandleTextChange = function(e){
        updateText(e.target.value);
    }

    const HandleCounter = function(e){
        updateCounter(e.target.value);
        
    }
    return(
        <div className="flex" >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"> New </button>
            <input type="text" onChange={HandleTextChange} value={text} id="text-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            <input type='number' onChange={HandleCounter} value={counter} id="number-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-300 block dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center ml-2"></input>
        </div>
    )
}

export default InputBox;