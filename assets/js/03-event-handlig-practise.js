const btnAverage=document.querySelector("#btnAverage");
btnAverage.addEventListener("click", ()=> {
const point1=document.querySelector("txtPoint1").value;
const point2=document.querySelector("txtPoint2").value;

const average=getAverage(point1,point2);
console.log(average);

const letter= convertNumberToLetter(average);
alert(letter);
});

const getAverage = (point1,point2) =>{
    //dısaridan 2 deger aliyor
    //kontrolunu yaptiik
    if(isNaN(parseFloat(point1))|| isNaN(parseFloat(point2))) return;

    const average=(parseFloat(point1) + parseFloat(point2))/2;

    return average;


}

const convertNumberToLetter = (num) => {
    //islemler

    return "C";
}