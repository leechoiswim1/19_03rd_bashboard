import React, { useEffect } from 'react';
import { Nav } from 'components/organisms';
import { getRequest } from './api/request';

const App = () => {
  useEffect(() => {
    console.log(getRequest().then(data => console.log(data)));
  }, []);
  return (
    <div className="App">
      <Nav />
    </div>
  );
};
export default App;
