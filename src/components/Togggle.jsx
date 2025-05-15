import React from 'react'
import { useState } from 'react'
import { BiHappyAlt } from "react-icons/bi";
import { FaRegFaceSadCry } from "react-icons/fa6";


export const Togggle = () => {
    const [isHappy,setIsHappy]=useState(true)
    const iconStyle={
        fontSize:"90px"
    }
  return (
    <div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
      <button onClick={()=>setIsHappy(!isHappy)} style={{height:"auto",width:"auto"}}>{isHappy ? <BiHappyAlt style={{...iconStyle,color:"green"}}/> : <FaRegFaceSadCry style={{...iconStyle,color:"red"}}/>}</button>
    </div>
  )
}
