import { useState } from 'react';
import MindARViewer from './MindARViewer';
import { Container } from 'reactstrap';
import './App.css'
import CongratsPopup from './CongratsPopup';

function App() {
  const [imageDetected, setImageDetected] = useState(false);

  return (
    <div className='appContainer'>
      {!imageDetected && <div className='scanerContainer d-flex justify-content-center align-items-center'>
        <MindARViewer setImageDetected={setImageDetected} />
      </div>}
      <div>
        <CongratsPopup isOpen={imageDetected} setIsOpen={setImageDetected} />
      </div>
    </div>
  );
}

export default App;
