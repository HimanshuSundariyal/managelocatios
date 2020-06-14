export default function vlidate(values)
{
    let errors ={}
    //Location name 
    if(!values.locationname)
    {
        errors.locationname = "Location Name is required";
    }
    //City name
    if(!values.cityname)
    {
        errors.cityname = "City Name is required";
    }
    //Zip Code
    if(!values.zipcode)
    {
        errors.zipcode = "ZipCode is required";
    }
    else if(values.zipcode.length<5)
    {
        errors.zipcode = "ZipCode is AlphaNumaric with 5 Char";
        var isValidZip = /^[a-zA-Z0-9\-_]{0,5}$/.test(values.zipcode);
        if(!isValidZip)
        {
            errors.zipcode = "ZipCode is AlphaNumaric with min 5 Char"; 
        }
    }
    //Phonenumber Required
    if(!values.phonenumber)
    {
        errors.phonenumber = "Phone Number is required";
    }
    else if(values.phonenumber.length<10)
    {
        errors.phonenumber = "Phone Number shoulld be valid";
    }

    return errors;
}

function checkZipcodevlidation(value) {
    if (/[^0-9a-zA-Z]/.test(value)) {
        console.log(JSON.stringify(value), "=> invalid");
    } 
}

