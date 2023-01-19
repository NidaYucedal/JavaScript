import { countries } from "../data/countries.js";

const loadCountries = () => { 
    let options="";

    for(let country of countries){
        options += `<option>${country.name.common} </option>`
        console.log(country);

    }


    document.querySelector("#ddlCountries").innerHTML=options;
};


const getCountry=(id)=>{
 const arr= countries.filter((country)=>country.name.common===id);
if( arr.length>0) {
 return arr[0]
 }else{
 return null;
 }
};

loadCountries();