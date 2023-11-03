import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
import Lottie from "react-lottie";
import congratsFile from './assets/congrats.json'

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: congratsFile,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function CongratsPopup({ isOpen, setIsOpen }) {
  const [speed, setSpeed] = useState(1)
  const toggle = () => {
    setIsOpen(false)
  }
  const closeBtn = (<button type="button" class="btn-close" onClick={toggle} data-bs-dismiss="modal" aria-label="Close"></button>)

  useEffect(() => {
    setSpeed(isOpen ? 0.5 : 1)
  }, [isOpen])

  return (
    <Modal size='md' centered isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
        <ModalBody className='d-flex flex-column align-items-center w-100'>
          <Lottie 
            options={defaultOptions} 
            height={200}
            width={200}
            speed={speed}
          />
          <h2 className='my-4 text-center'>Congratulations! you have won 2GB data.</h2>
          <Button onClick={toggle} size='lg' color="danger" className='align-item-center'>Retry</Button>
        </ModalBody>
    </Modal>
  )
}

export default CongratsPopup