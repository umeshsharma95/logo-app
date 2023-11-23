import React, { useState } from 'react'
import Lottie from "react-lottie";
// import christmasBox from './assets/christmas_box.json'
import christmasTree from './assets/christmas_tree.json'
import santa from './assets/santa.json'
import Draggable from 'react-draggable';
import './successPopup.css'

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: christmasTree,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const defaultOptions2 = {
  loop: true,
  autoplay: true, 
  animationData: santa,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function SuccessPopup({setIsOpen}) {
  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => {
    setIsOpen(false)
    setIsVisible(false)
  }
  const handleStop = () => {
    setIsVisible(true)
  }

  return (
    <>
      {isVisible && <div className="congratsBox1" onClick={toggle}>
        <Lottie 
          options={defaultOptions2} 
          height={240}
          width={240}
          speed={1}
        />
      </div>}
      <Draggable
        onStart={() => !isVisible}
        onStop={handleStop}
        style={{width: '100%', height: '100%'}}
        >
        <div className='congratsLottie1'>
          <Lottie 
            options={defaultOptions} 
            height={240}
            width={240}
            speed={1}
          />
        </div>
      </Draggable>
    </>
  )
}

export default SuccessPopup