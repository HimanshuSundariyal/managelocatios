import React, { useState, useEffect } from 'react';
import db from '../database';
import Nolocation from './noLocations';
import LocationData from './locationdata';
import {Container, Row, Col} from 'react-bootstrap';
const AllLocations = () =>{
    const[locations, setLocations] = useState([]);
    const[numberLocation, setNumberLocation] = useState(5);
  
   /******Get the list of location at mounting phase *****/
   useEffect(() =>{
    db.table('locations').limit(numberLocation).toArray().then((locations) => {
        setLocations(locations); 
    });
   },[numberLocation]);
   /******End of Mounthing Phase *****/
   
   /**** Delete Location Code *** */ 
   const hendelDelteLocation = (id) =>{
    db.table('locations').delete(id).then(()=>{
        db.table('locations').toArray().then((locations) => {
            setLocations(locations); 
        }); 
    });  
   }
   /***** Delete Location code end here***/
   
   /*********Handel pagenation dropdown**************/
   const handelPagenationDropdown = (e) =>{ 
    let numberoflocation = e.target.value;
    db.table('locations').limit(numberoflocation).toArray().then((locations) => {
        setNumberLocation(numberoflocation); 
    });
   } 
   /*********Handel pagenation dropdown end here************* */

   return(
    <React.Fragment>
           {
            locations.length == 0 ? <Nolocation/> : 
           (
        <div>        
            <Container>
                <Row className="table_row top">
                <Col lg={3}>location Name</Col>
                <Col lg={3}>Address</Col>
                <Col lg={6}>Phone No</Col>
                </Row>
                <LocationData locationsdetails={locations} deltelocation={hendelDelteLocation}/>   
            </Container>
            
            <Container className="pagenation">
                    <Row>
                        <p>
                        items per page <select onChange={handelPagenationDropdown}>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                        </select>
                        </p>                
                    </Row>
            </Container>
        </div>     
        )
    }


         </React.Fragment>   
        );
};

export default AllLocations;