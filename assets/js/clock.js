
const elHour = document.querySelector("#clock li:nth-child(1)");
const elMinute = document.querySelector("#clock li:nth-child(3)");
const elSecond = document.querySelector("#clock li:nth-child(2)");


const tick = () => { 

    const dateTime = new Date();
    elHour.innerText = dateTime.getHours();
    elMinute.innerText = dateTime.getMinutes();

 }



 setInterval(tick,1000);