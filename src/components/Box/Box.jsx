import React, { useState } from 'react';
import './Box.css';

export default function Box(props) {
  const [on, setOn] = useState(props);
  console.log(props)

  const styles = {
    backgroundColor: on ? 'black' : 'white',
  };

  function toggle() {
    setOn((prevValue) => !prevValue),
      console.log(`box ${props.number} has been clicked`);
  }


  const boxElement = on.map((item) => (
    <div onClick={toggle} style={styles} className="box" key={item.id}></div>
  ));

  return (
    <div>
      {boxElement}
      <h1>box {props.id} has been flipped</h1>
    </div>
  );
}
