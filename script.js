const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const today = new Date();
const weekDays = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];

date.innerHTML = (today.getDate() < 10 ? "0"  : "" ) + today.getDate();
day.innerHTML = weekDays[today.getDay()]
month.innerHTML = today.toLocaleString('default', {month : 'long' })
year.innerHTML = today.getFullYear();