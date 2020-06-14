import React from 'react';
import { Row, Col} from 'react-bootstrap';
import {Link} from  "react-router-dom";
const locationData =(props)=>{

return(
    props.locationsdetails.map((data) =>(
        <Row className="table_row" key={data['id']}>
            <Col lg={3}>{data['locationname']}</Col>
            <Col lg={3}>{data['cityname']}</Col>
            <Col lg={5}>{data['phonenumber']}</Col>
            <Col lg={1}><Link to={"/editlocation/" + data['id']}><i className="fa fa-pencil"></i></Link> <i className="fa fa-trash" onClick={() => props.deltelocation(data['id'])}></i></Col>
        </Row>
    ))
)

}

export default locationData;