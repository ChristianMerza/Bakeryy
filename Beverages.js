import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {

    className
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  return (
    
      <div class="container1"><img src="/star.jpg"  width="250px" alt=""onClick={toggle} class="modal-hover-opacity"></img>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <h2> Frappuccino</h2>
          <br />
          <Button color="success" onClick={toggleNested}><img src="/co.jpg"  width="200px"  alt="" />Toasted White Chocolate Mocha</Button>
          <Button color="success" onClick={toggleNested}><img src="/cof.jpg"  width="200px" alt="" />Chestnut Praline Frappuccino   </Button>
          <Button color="success" onClick={toggleNested}><img src="/coff.jpg"  width="200px" alt="" />Peppermint White Chocolate</Button>
          <Button color="success" onClick={toggleNested}><img src="/coffe.jpg"  width="200px" alt="" />Mocha Cookie Crumble</Button>
          
          
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            
            
            <ModalFooter>
              <div><h3>300 pesos</h3></div>
              <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
              <Button color="secondary" onClick={toggleAll}>All Done</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

      
       
        
    
    </div>
  );
}

export default ModalExample;