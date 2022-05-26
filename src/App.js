import React, {useState} from 'react';
import './style.css';
import boxes from './boxes';

import { Box } from './components';

export default function App() {
  const [box, setBox] = useState(boxes)
  const boxElement = box.map(item => <Box key={item.id} on={item.on} />);

  return (
    <div>
      <h1>flipping box</h1>
      {boxElement}
    </div>
  );
}
