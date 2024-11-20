var container=document.getElementById("container");
var startbtn=document.getElementById("startbtn");

var micsec = 0;
var seconds = 0;
var mintues = 0;
var hours = 0;
var setinterval;

function startbtnFnx() {
  console.log("start");
  startbtn.setAttribute("disabled", "false");
  setinterval = setInterval(() => {
    misec()
  }, 10);
}
function misec(){
  micsec++;
  second()
  UI()
}
function second() {
  if (micsec == 100) {
    micsec = 0;
    seconds++;
    mint();
    UI()
  }
}
function mint() {
  if (seconds == 60) {
    seconds = 0;
    mintues++;
    hourss();
    UI()
  }
}
function hourss() {
  if (mintues == 60) {
    mintues == 0;
    hours++;
    UI()
    if (hours == 24) {
      hours = 0;
    }
  }
}

function stopbtn() {
  startbtn.removeAttribute("disabled");
  console.log("stop");
  clearInterval(setinterval);
  UI();
}

function resetbtn() {
  startbtn.removeAttribute("disabled");
  console.log("reset");
  clearInterval(setinterval);
  micsec = "00";
  seconds = "00";
  mintues = "00";
  hours = "00";
  UI();
}

function UI(){
  var ui=`<div class="hour">
        <h2 id="hour">${hours.toString().padStart(2, "0")}:h </h2>
      </div>
      <div class="min">
        <h2 id="min">${mintues.toString().padStart(2, "0")}:m </h2>
      </div>
      <div class="sec">
        <h2 id="sec">${seconds.toString().padStart(2, "0")}:s </h2>
      </div>
      <div class="msec">
        <h2 id="msec">${micsec.toString().padStart(2, "0")}ms</h2>
      </div>`
      container.innerHTML=ui;  
}
UI();