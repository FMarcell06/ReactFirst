import React from 'react'

export const MyImage = ({nr,name,id}) => {
    console.log(nr);
    const url=`https://picsum.photos/id/${nr}/200/300`
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px"}}>
      <img src={url}  alt="" />
    </div>
  )
}

