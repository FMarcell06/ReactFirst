import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
export const Counter = () => {
    let nr=10

    const handleDecrement=()=>{
        nr--;
    }

    const handleIncrement=()=>{
        nr++;
    }
  return (
    <div style={{backgroundColor:"lightgreen",padding:"1rem", display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}>
      <button style={{backgroundColor:"red"}} onClick={handleDecrement}><CiCircleMinus/></button>
      <div className='nr'>{nr}</div>
      <button style={{backgroundColor:"green"}} onClick={handleIncrement}><CiCirclePlus/></button>
    </div>
  )
}
