import { useState } from 'react';
import MindARViewer from './MindARViewer';
import './App.css'
import CongratsPopup from './CongratsPopup';
import SuccessPopup from './SuccessPopup';
import Switch from "react-switch";

const strings = {
  heading1: 'Scan VI logo',
  heading2: 'Move christmas tree',
  heading3: 'Tap on christmas tree',
}

function App() {
  const [imageDetected, setImageDetected] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  
  const handleSwitch = (check) => {
    setIsChecked(check)
    setImageDetected(false)
  }

  return (
    <div className='appContainer'>
      <div className='headingContainer text-bg-success'>
        <Switch 
          className='switchButton' 
          onChange={handleSwitch} 
          checked={isChecked} 
          uncheckedIcon={false} 
          checkedIcon={false} 
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={25}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
        <h1 className='heading text-white'>{strings[!imageDetected ? 'heading1' : isChecked ? 'heading2' : 'heading3']}</h1>
        <div></div>
      </div>
      <div className='scanerContainer d-flex justify-content-center align-items-center'>
        <MindARViewer setImageDetected={setImageDetected} imageDetected={imageDetected} />
      </div>
      {imageDetected && (isChecked ? <SuccessPopup isOpen={imageDetected} setIsOpen={setImageDetected} isChecked={isChecked}/> : <CongratsPopup isOpen={imageDetected} setIsOpen={setImageDetected} isChecked={isChecked}/>)}
    </div>
  );
}

export default App;
