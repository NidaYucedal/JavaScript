import { countries } from "../data/countries.js";

const loadCountries = () => { 
    let options="";

    for(let country of countries){
        options += `<option>${country.name.common} </option>`
        console.log(country);

    }


    document.querySelector("#ddlCountries").innerHTML=options;

    document.querySelector("#area"). innerHTML = countries.
    reduce ((totalArea , country ) => totalArea + country.area , 0 );
}

loadCountries();