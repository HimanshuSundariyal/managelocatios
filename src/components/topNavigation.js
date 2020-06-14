import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
const TopNavigation = () =>{
    return(
        <Row>
            <Col>Locations</Col>
            <Col>
                <Button href="/addlocation" className="float-right">Add Location</Button>
            </Col>
        </Row>
    )
}
export default TopNavigation;
