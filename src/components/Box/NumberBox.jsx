import React from 'react'

export default function NumberBox(props){

console.log(props)
  return(
    <div>
      <h1 >box {props.id} has been flipped</h1>
    </div>
  )
}