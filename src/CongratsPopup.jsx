import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
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

function CongratsPopup({setIsOpen}) {
  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => {
    setIsOpen(false)
    setIsVisible(false)
  }

  return (
    <>
      <div className='congratsLottie'>
      {isVisible && <div className="congratsLottie" onClick={toggle}>
        <Lottie 
          options={defaultOptions2} 
          height={140}
          width={140}
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

        {/* <div className='d-flex justify-content-center'>
          <Button onClick={toggle} size='md' color="danger" className='align-item-center mt-4'>Retry</Button>
        </div> */}
        {/* <h2 className='my-4 text-center'>Congratulations! you have won 2GB data.</h2> */}
      </div>
    </>
  )
}

export default CongratsPopup