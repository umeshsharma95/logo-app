import React, { useEffect, useState } from 'react'
import Lottie from "react-lottie";
import christmasBox from './assets/christmas_box.json'
import christmasTree from './assets/christmas_tree.json'
import santa from './assets/santa.json'

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

function CongratsPopup({setIsOpen, isOpen, isChecked}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    (!isOpen || isChecked) && setIsVisible(false)
  }, [isOpen, isChecked])

  return (
    <>
      <div className='congratsLottie'>
      {isVisible && <div className="congratsLottie">
        <Lottie 
          options={defaultOptions2} 
          height={240}
          width={240}
          speed={1}
        />
      </div>}
        <div onClick={() => setIsVisible(true)}>
          <Lottie 
            options={defaultOptions} 
            height={350}
            width={350}
            speed={1}
          />
        </div>
      </div>
    </>
  )
}

export default CongratsPopup