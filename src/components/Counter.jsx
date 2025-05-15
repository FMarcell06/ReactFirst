import React from 'react'
import { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MyImage } from './MyImage';
import { Togggle } from './Togggle';
export const Counter = () => {
    const [nr,setNr]=useState(10)

    const handleDecrement=()=>{
        setNr(nr-1)
    }

    const handleIncrement=()=>{
        setNr(nr+1)
    }
  return (
    <>
    <div style={{backgroundColor:"lightgreen",padding:"1rem", display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}>
      <button style={{backgroundColor:"red"}} onClick={handleDecrement} disabled={nr==1}><CiCircleMinus/></button>
      <div className='nr'>{nr}</div>
      <button style={{backgroundColor:"green"}} onClick={handleIncrement}><CiCirclePlus/></button>
    </div>
    <MyImage nr={nr} name={"gyula"} id={29}/>
    <Togggle/>
    </>
  )
}
