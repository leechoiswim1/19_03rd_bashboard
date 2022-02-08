import React, { useEffect } from 'react';
import { Sample, Nav } from 'components';
import { getRequest } from './api/request';

const App = () => {
  useEffect(() => {
    console.log(getRequest().then(data => console.log(data)));
  }, []);
  return (
    <div className="App">
      <Nav />
      <Sample sampleId={1} title="Sample">
        123
      </Sample>
    </div>
  );
};
export default App;
