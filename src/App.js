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
  const boxNumberElement = box.map((item) => (
    <NumberBox id={boxNumber} />
  ))

  console.log(box)
  return (
    <div>
      <h1>flipping box</h1>
      {boxElement}

    </div>
  );
}
