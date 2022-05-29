import React, { useState } from 'react';
import './Box.css';
import boxes from '../../boxes';


export default function Box() {
  const [on, setOn] = useState(boxes.on);
  const [box, setBox] = useState(boxes)
  console.log(boxes)

  const styles = {
    backgroundColor: on ? 'black' : 'white',
  };

  function toggle() {
    setOn((prevValue) => !prevValue),
      console.log(`box ${boxes.number} has been clicked`);
  }


  const boxElement = box.map((item) => (
    <div onClick={toggle} style={styles} className="box" key={item.id}></div>
  ));

  return (
    <div>
      {boxElement}
      <h1>box {boxes.id} has been flipped</h1>
    </div>
  );
}
