import { useState } from 'react';
import MindARViewer from './MindARViewer';
import './App.css'
import CongratsPopup from './CongratsPopup';
import SuccessPopup from './SuccessPopup';
import Switch from "react-switch";

function App() {
  const [imageDetected, setImageDetected] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  
  const handleSwitch = (check) => {
    setIsChecked(check)
    setImageDetected(false)
  }

  return (
    <div className='appContainer'>
      <div className='switchContainer'>
        <Switch onChange={handleSwitch} checked={isChecked} uncheckedIcon={false} checkedIcon={false} />
      </div>
      <div className='scanerContainer d-flex justify-content-center align-items-center'>
        <MindARViewer setImageDetected={setImageDetected} imageDetected={imageDetected} />
      </div>
      {imageDetected && (isChecked ? <SuccessPopup isOpen={imageDetected} setIsOpen={setImageDetected} /> : <CongratsPopup isOpen={imageDetected} setIsOpen={setImageDetected} />)}
    </div>
  );
}

export default App;
