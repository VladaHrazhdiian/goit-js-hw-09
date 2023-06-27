import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const daysEl = document.querySelector('.value[data-days]');
const hoursEl = document.querySelector('.value[data-hours]');
const minutesEl = document.querySelector('.value[data-minutes]');
const secondsEl = document.querySelector('.value[data-seconds]');
const startBtn = document.querySelector('button[data-start]');
const myInput = document.querySelector('#datetime-picker');
const timerHtml = document.querySelector('.timer');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) { 

        if (selectedDates[0] < new Date()) {
         Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true; 
    } else {
           startBtn.disabled = false;
    }
  },
};

flatpickr(myInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
startBtn.addEventListener('click', () => {

  let timer = setInterval(() => {
  let countdown = new Date(text.value) - new Date();

    startBtn.disabled = true; 
   
    if (countdown >= 0) {
    let timeObject = convertMs(countdown);

      daysEl.textContent = addLeadingZero(timeObject.days);
      hoursEl.textContent = addLeadingZero(timeObject.hours);
      minutesEl.textContent = addLeadingZero(timeObject.minutes);
      secondsEl.textContent = addLeadingZero(timeObject.seconds);

      if (countdown <= 10000) {
        timerHtml.style.color = 'red'; 
      }
    } else {
     
      Notiflix.Notify.success('Countdown finished');
      timerHtml.style.color = 'black'; 
      clearInterval(timer);
    }
  }, 1000);
});