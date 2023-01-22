
const elHour = document.querySelector("#clock li:nth-child(1)");
const elMinute = document.querySelector("#clock li:nth-child(3)");
const elSecond = document.querySelector("#clock li:nth-child(2)");


const tick = () => { 

    const dateTime = new Date();
    elHour.innerText = dateTime.getHours();
    elMinute.innerText = dateTime.getMinutes();

    elSecond.classList.toggle("hidden");

 /*   elSecond.style.opacity =
    elSecond.style.opacity == 1
     ? (elSecond.style.opacity = 0) 
     : (elSecond.style.opacity = 1);

*/

 };



 setInterval(tick,1000);