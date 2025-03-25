import { useState } from "react";

export default function Item ({title}){

   const[value,setValue]=  useState(title);

    const changeIt= ()=>{
        setValue("Hello");
    }
    return (
        <>
        <div>{value}</div>
        <button onClick={changeIt}>click to chnge</button>
        </>
    )
}