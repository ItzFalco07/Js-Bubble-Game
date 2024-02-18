var bubble = "";
var timer = 60;
score = 0;
var randomnum;

function getnum() {
document.querySelector("#pbtm")
.addEventListener("click", function(dets) {
    var clickednum = (Number(dets.target.textContent));
    console.log(clickednum);
    if (clickednum === randomnum) {
        increasenum();
        bubblenum();
        getNewHit();
    }
})
};

function increasenum() {
    score += 10;
    document.querySelector("#Score").textContent = score 
};

function getNewHit() {
    randomnum = Math.floor(Math.random() *10);
    document.querySelector("#hit").textContent = randomnum;

};

function bubblenum() {
    bubble = "";
  for (var i = 1; i <= 180; i++) {
    var rn = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = bubble;
};

function settimer() {
  var timernum = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timernum").textContent = timer;
    } else {
      clearInterval(timernum);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1><br><button id="playbtn" onclick="again()">Play Again</button>`; 
    }
  }, 1000);
};

function again() {
    location.reload();
}

getNewHit();
bubblenum();
settimer();
getnum();
