import React from 'react'

export const MyMood = ({isHappy}) => {
    console.log("ishappy" + isHappy)

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px"}}>
      <img  src={"public/yipee.jpg"} style={{width:"100%" , height:"150px"}} alt="" />
    </div>
  )
}
