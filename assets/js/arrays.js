const cities=["ankara","izmir","istanbul","sinop"];

const loadlist = () => { 

    let html= "" ;
    for(let i = 0; i < cities.length; i++){

        html += `<li>${cities[i]}</li>`;
    }
    document.querySelector("#cityList").innerHTML=html;
 };

 loadlist();