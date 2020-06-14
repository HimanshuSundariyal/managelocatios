import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button,Row, Col} from 'react-bootstrap';

const facilityTimePopup = (props) =>{


    return(
        <Modal className="facilitname_popup" show={props.popviaibliity} onHide={props.handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
            <span className="heading">Facility Times</span>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col lg={3}></Col>
                <Col lg={3}>From</Col>
                <Col lg={3}>To</Col>
                <Col lg={3}></Col>
            </Row>

            <Row>
                <Col lg={3}></Col>
                <Col lg={3}>From</Col>
                <Col lg={3}>To</Col>
                <Col lg={3}><Button variant="outline-info" className="applybutton">Apply to all Checked</Button></Col>
            </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    )

}

export default facilityTimePopup;