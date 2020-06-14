import { useState, useEffect } from "react";
import db from '../../database';
const useFormEdit = (validate, locationid) =>{
    const[formvalues, setFormvalues] =  useState({});
    const[errors, setErrors] =  useState({});
    const[tags, setTgs] =  useState([]);
    const [success, setSuccess] = useState(false);
    useEffect(() =>{
        db.table('locations').get({id: parseInt(locationid)}).then((location) => {
            setFormvalues(location);
            setTgs(location.tags);
        });
       },[]);
    
    /******Save form values in state here***** */
    const  updateValues = (e) => {
      let elname = e.target.name;
      let value = e.target.value;
      let newdata = { ...formvalues }; 
      newdata[elname] = e.target.value; 
      console.log(newdata);
      setFormvalues(newdata);  
    }

    /***********Formate phone number**************** */  
      const formatenumber = (e) =>{ 
        var phonenum = e.target.value;
        if(phonenum.length > 9)
        {
          var x = e.target.value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);
          e.target.value = '(' + x[1] + ') ' + x[2] + '-' + x[3]; 
          formvalues.phonenumber = e.target.value;
        }
        else
        { 
          errors.phonenumber = "Phone Number is required and valid Us Format"
          setErrors(errors);
        }
    } 
    
    /************Save tags*********** */
    const saveTags = (tags) =>{
      setTgs(tags);
    }

    /******Submit form here******* */

      const handelSubmit = (e) =>{
        e.preventDefault();
        let errors = validate(formvalues);
        setErrors(errors); 
        if(Object.keys(errors).length===0)
        {  
            var updated_data = {
                id:parseInt(locationid),
                locationname:formvalues.locationname,
                addressline1:formvalues.addressline1,
                suiteno:formvalues.suiteno,
                addressline2:formvalues.addressline2,
                cityname:formvalues.cityname,
                state:formvalues.state,
                zipcode:formvalues.zipcode,
                phonenumber:formvalues.phonenumber,
                timezone:formvalues.timezone,
                tags:formvalues.tags
              }
            db.table('locations').update(parseInt(locationid),updated_data).then((todo)=>{
                setSuccess(true);
            }).catch((error)=>{
                console.log(error);
              })

        } 
          
      }

      return{ 
        updateValues,
        formatenumber,
        handelSubmit,
        formvalues,
        errors,
        tags,
        saveTags,
        success
      }
}
export default useFormEdit;