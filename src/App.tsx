import React from 'react';
import { Nav } from 'components/organisms';
import { Dashboard } from 'components/pages';

const App = () => (
  <div className="App">
    <header>
      <Nav />
    </header>
    <main>
      <Dashboard />
    </main>
  </div>
);
export default App;
