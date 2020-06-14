import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validations';
import {Row, Col, Button, FormGroup, FormControl} from 'react-bootstrap';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import FacilityTimePopUp from './facilityTimePopup';
import SuccessPopup from './successPopup';

const AddLocation = () =>{
   const{saveValues, formatenumber, handelSubmit,formvalues, errors, tags,saveTags, success} = useForm(validate);
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true); 
    return(
        <div className="addlocation_form">
                <form name="addocationForm" onSubmit={handelSubmit}>
                    <strong>Add Location</strong>
                    <Row>
                        <Col>
                        <FormGroup controlId="locationame">
                            <label>Location Name</label>
                            <FormControl name="locationname" onChange={saveValues}/>
                            {errors.locationname && <span className="error">{errors.locationname }</span> }
                        </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                    <Col>
                        <FormGroup controlId="address1">
                            <label>Address Line 1</label>
                            <FormControl name="addressline1" onChange={saveValues}/>
                        </FormGroup>
                        </Col>

                        <Col>
                        <FormGroup controlId="suite">
                            <label>Suite No</label>
                            <FormControl name="suiteno" onChange={saveValues}/>
                        </FormGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <FormGroup controlId="address2">
                                <label>Address Line 2</label>
                                <FormControl name="addressline2" onChange={saveValues}/>
                            </FormGroup>                        
                        </Col>

                        <Col>
                            <FormGroup controlId="cityname">
                                <label>City Name</label>
                                <FormControl name="cityname"  onChange={saveValues}/>
                                {errors.cityname && <span className="error">{errors.cityname }</span> }
                            </FormGroup>                        
                        </Col>

                        <Col>
                            <FormGroup controlId="state">
                                <label>State</label>
                                <FormControl  as="select" name="state" onChange={saveValues}>
                                    <option value="California">California</option>
                                    <option value="Texas">Texas</option>
                                    <option value="Florida">Florida</option>
                                    <option value="New Jersey">New Jersey</option>
                                    <option value="Georgia">Georgia</option>
                                </FormControl>
                            </FormGroup>                        
                        </Col>                        

                    </Row>

                    <Row>
                        <Col>
                            <FormGroup controlId="zipcode">
                                <label>Zip Code</label>
                                <FormControl name="zipcode" onChange={saveValues}/>
                                {errors.zipcode && <span className="error">{errors.zipcode }</span> }
                            </FormGroup>
                        </Col>

                        <Col>   
                            <FormGroup controlId="phonenumber">
                                <label>Phone Number</label>
                                <FormControl name="phonenumber" onChange={saveValues} placeholder="(555) 555-5555" onBlur={formatenumber}/>
                                {errors.phonenumber && <span className="error">{errors.phonenumber }</span> }
                            </FormGroup>
                        </Col> 

                        <Col>   
                            <FormGroup controlId="timezone">
                                <label>Time Zone</label>
                                <FormControl  as="select" name="timezone" onChange={saveValues}>
                                    <option value="(GMT-12:00) International Date Line West">(GMT-12:00) International Date Line West</option>
                                    <option value="(GMT-11:00) Midway Island, Samoa">(GMT-11:00) Midway Island, Samoa</option>
                                    <option value="(GMT-10:00) Hawaii">(GMT-10:00) Hawaii</option>
                                    <option value="(GMT-09:00) Alaska">(GMT-09:00) Alaska</option>
                                    <option value="(GMT-08:00) Pacific Time (US & Canada)">(GMT-08:00) Pacific Time (US & Canada)</option>
                                </FormControl>
                            </FormGroup>
                        </Col> 
                    </Row>

                    <Row>
                         <Col>
                            <FormGroup controlId="tags">
                                <label>Facility Times </label>
                                <FormControl  name="facilitytimes" onClick={handleShow}/>
                            </FormGroup>    
                        </Col>
                        <Col>
                            <FormGroup controlId="tags">
                                <label>AppointmentPool </label>
                                <TagsInput name="tags" value={tags}  onChange={saveTags}/>
                            </FormGroup>    
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button type="submit" className="float-right"> Save </Button>
                            <Button href="/" className="float-right"> Cancle </Button>
                         </Col>
                    </Row>    
                </form> 
                <SuccessPopup popviaibliity={success} message="Location Added Successfully"/>
                <FacilityTimePopUp popviaibliity={show} handleClose={handleClose}/>
                                 
        </div>
        
    );
};

export default AddLocation;