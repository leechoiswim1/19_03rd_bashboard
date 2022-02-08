import React, { useEffect, useState } from 'react';
import { Sample, ToggleBtn } from 'components/atoms';
import { Nav } from 'components/organisms';
import { getRequest } from './api/request';

const App = () => {
  const [toggled, setToggled] = useState(false);
  useEffect(() => {
    console.log(getRequest().then(data => console.log(data)));
  }, []);

  return (
    <>
      {/* <div className="App"> */}
      <Nav />
      <Sample sampleId={1} title="Sample">
        123
      </Sample>
      <ToggleBtn title="상담 중인 요청만 보기" clicked={toggled} setToggled={setToggled} />
      {/* </div> */}
    </>
  );
};
export default App;
