import React from 'react';
import { Sample } from 'components/atoms';
import { Nav } from 'components/organisms';
import { Dashboard } from 'components/pages';

const App = () => (
  <div className="App">
    <header>
      <Nav />
    </header>
    <main>
      <Dashboard>
        <Sample sampleId={1} title="Sample">
          123
        </Sample>
      </Dashboard>
    </main>
  </div>
);

export default App;
