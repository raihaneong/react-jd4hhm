import React, { useState } from 'react';
import './style.css';
import boxes from './boxes';

import { Box, NumberBox } from './components';

export default function App() {
  const [box, setBox] = useState(boxes);
  const [boxNumber, setBoxNumber] = useState(boxes.id)
  const boxElement = box.map((item) => (
    <Box key={item.id} on={item.on} number={item.id} />
  ));
  

  console.log(box)
  return (
    <div>
      <h1>flipping box</h1>
      {boxElement}
      <h1> box number  has been flipped</h1>

    </div>
  );
}
