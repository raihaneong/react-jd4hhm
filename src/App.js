import React from 'react';
import './style.css';
import boxes from './boxes';

import { Box} from './components';

export default function App() {

  return (
    <div>
      <h1>flipping box</h1>
      <Box key={boxes.id} on={boxes.on} id={boxes.id} />
    </div>
  );
}
