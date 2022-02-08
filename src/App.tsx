import React, { useEffect } from 'react';
import { Nav } from 'components/organisms';
import { Dashboard } from 'components/pages';
import { getRequest } from './api/request';

const App = () => {
  useEffect(() => {
    console.log(getRequest().then(data => console.log(data)));
  }, []);
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
};
export default App;
