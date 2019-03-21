(d => {


function displayTime() {
   let date = new Date();
   let time = date.toLocaleTimeString();
   d.getElementById('time').textContent = time;
}

displayTime();
const createClock = setInterval(displayTime, 1000);


})(document);

//Source https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-clock.html


