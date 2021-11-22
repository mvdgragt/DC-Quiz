let main = document.querySelector('main');
let div = document.querySelector('div');
let h1 = document.createElement('h1');
let countdown = document.createElement('div');
let h2 = document.createElement('h2');
h1.setAttribute('id','getReady');
countdown.setAttribute('id','countDown');
h2.setAttribute('class','questions');
h1.textContent="Get Ready!";
countdown.textContent="3";
h2.textContent="Australia is wider than the moon";

div.append(h1,countdown);

// 

var timeleft = 2;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    // document.querySelector("#countDown").innerHTML = "Finished";
    // setTimeout(() => {div.style.opacity = '0'},750);
    setTimeout(() => {div.remove()});
    main.append(h2);        
  } else {
    document.querySelector("#countDown").innerHTML = timeleft;
    
  }
  timeleft -= 1;
}, 1500);


// 

//StartButton
// let startButton = document.querySelector('#startButton');
// startButton.addEventListener('click', () => {
//   setTimeout(() => {startButton.style.opacity = '0'},750);
// });

// Toggle
const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})