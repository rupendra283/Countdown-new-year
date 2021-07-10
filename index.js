// make variable and take id from html

const daysElm = document.getElementById("days")
const hourElm = document.getElementById("hours")
const minElm = document.getElementById("mins")
const secondElm = document.getElementById("seconds")
//checking the value of all variable
console.log(daysElm,hourElm,minElm,secondElm);

// take  a date for  counting new  years 
const newYears= "1 jan 2022";
//make a function  for building logics
function countdown(){
    const newYearDate=  new Date(newYears);
    const curentDate =  new Date();
    const totalSeconds = (newYearDate - curentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = (Math.floor(totalSeconds / 60) % 24) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // show in html page 
    daysElm.innerHTML= days;
    hourElm.innerHTML= hours;
    minElm.innerHTML= minutes;
    secondElm.innerHTML= seconds;


    console.log(days,hours,minutes,seconds  );
}
countdown();
setInterval(countdown,1000);
