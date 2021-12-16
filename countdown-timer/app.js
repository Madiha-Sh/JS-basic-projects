const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021,11,26,11,30,0); //months starts from 0

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate();

const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}am`;

// future time in ms
const futureTime = futureDate.getTime()

function getRemainingTime(){
  const today = new Date().getTime();
  const timer = futureTime - today;
  // console.log(timer);

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = timer/oneDay;
  days = Math.floor(days);
  let hours = Math.floor((timer % oneDay)/oneHour);
  let mins = Math.floor((timer % oneHour)/oneMinute);
  let secs = Math.floor((timer % oneMinute)/1000);

  // set values array
  const values = [days, hours, mins, secs];

  function format(item){
    if(item < 10){
      return item = `0${item}`;
    }
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if(timer < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired</h4>`;
  }

}
// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
