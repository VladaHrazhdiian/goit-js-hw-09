const dataStart = document.querySelector('button[data-start]');
const dataStop = document.querySelector('button[data-stop]');


let timerId = null;
dataStop.setAttribute('disabled', true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
dataStart.addEventListener('click', () => {
  dataStop.removeAttribute('disabled');
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.background = color;
  }, 1000);
  dataStart.setAttribute('disabled', true);
});

dataStop.addEventListener('click', () => {
  dataStart.removeAttribute('disabled');
  clearInterval(timerId);
  dataStop.setAttribute('disabled', true);
});