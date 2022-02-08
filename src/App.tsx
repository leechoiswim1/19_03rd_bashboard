import React from 'react';
import { Sample, Button } from 'components/atoms';
import { Nav } from 'components/organisms';
import { Dashboard } from 'components/pages';

const App = () => (
  <div className="App">
    <header>
      <Nav />
    </header>
    <main>
      <Dashboard>
        <Sample sampleId={1} title="Sample" primary>
          123
        </Sample>
      </Dashboard>
      <Button>가나다</Button>
    </main>
  </div>
);

export default App;
