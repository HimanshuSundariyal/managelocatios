import { useState } from "react";
import db from '../../database';
const useForm = (validate) =>{
    const[formvalues, setFormvalues] =  useState([]);
    const[errors, setErrors] =  useState({});
    const[tags, setTgs] =  useState([]);
    const [success, setSuccess] = useState(false);
    
    /******Save form values in state here***** */
    const  saveValues = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        formvalues[name] = value;
        setFormvalues(formvalues);
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
          formvalues.tags = tags;
          db.locations.add(formvalues).then((id) => {
            setSuccess(true);
          }).catch(function (e) { 
            console.error(e);
          });
        } 
          
      }

      return{
        saveValues,
        formatenumber,
        handelSubmit,
        formvalues,
        errors,
        tags,
        saveTags,
        success
      }
}
export default useForm;