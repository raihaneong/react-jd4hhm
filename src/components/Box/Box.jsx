import React, { useState } from 'react';

import './Box.css';

export default function Box(props) {
  const [on, setOn] = useState(props.on);

  const styles = {
    backgroundColor: on ? 'black' : 'white',
  };

  function toggle() {
    setOn((prevValue) => !prevValue),
      console.log(`box ${props.number} has been clicked`);
  }
  return (
      <div onClick={toggle} style={styles} className="box" key={props.id}></div>
    );
}
