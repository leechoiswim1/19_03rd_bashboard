import React, { useEffect } from 'react';
import { Card } from 'components/molecules';
import { Nav } from 'components/organisms';
import { getRequest } from './api/request';

const App = () => {
  useEffect(() => {
    console.log(getRequest().then(data => console.log(data)));
  }, []);
  return (
    <div className="App">
      <Nav />
      <Card>
        <div>abc</div>
      </Card>
    </div>
  );
};
export default App;
