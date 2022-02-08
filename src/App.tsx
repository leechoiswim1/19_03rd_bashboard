import React from 'react';
import { Sample, Nav } from 'components';

const App = () => (
  <div className="App">
    <Nav />
    <Sample sampleId={1} title="Sample">
      123
    </Sample>
  </div>
);

export default App;
