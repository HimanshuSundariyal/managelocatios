import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button,Row, Col} from 'react-bootstrap';

const successFullPopup = (props) =>{


    return(
        <Modal className="success" show={props.popviaibliity}  backdrop="static" keyboard={false}>
        <Modal.Header>
            <span className="heading">Success</span>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <p>{props.message}</p>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" href="/">
            View Locations
          </Button>
        </Modal.Footer>
      </Modal>
    )

}

export default successFullPopup;