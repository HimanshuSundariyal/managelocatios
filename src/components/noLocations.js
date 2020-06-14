import React from 'react';
import locationimg from '../nolocation.png'; 

const Nolocations = () =>{
    const style={
        position: 'absolute', left: '50%', top: '50%',
        textAlign: 'center',
        transform: 'translate(-50%, -50%)'
    }
    return(
        <div style={style}>
            <img src={locationimg} alt={"logo"}/> 
            <p>
            <strong>Kindely add a location first</strong><br/>
            There is no location added right now
            </p>
        </div>
    );
};

export default Nolocations;