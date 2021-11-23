// let questions = [
//   {
//     question: "Australia is wider than the moon.",
//     answers: [true]
//     correctAnswer: 1
//   },
//   {
//     question: "Holland is wider than the moon.",
//     answers: [false]
//     correctAnswer: 1
//   },
//   {
//     question: "Sweden has a cross in its flag.",
//     answers: [true]
//     correctAnswer: 1
//   },

// ]

let header = document.querySelector('header');
let main = document.querySelector('main');
let div = document.querySelector('div');
let h1 = document.createElement('h1');
let countdown = document.createElement('div');
let question = document.createElement('h2');
let buttonContainer = document.createElement('div');
let yesButton = document.createElement('button')
let noButton = document.createElement('button')
h1.setAttribute('id','getReady');
countdown.setAttribute('id','countDown');
question.setAttribute('class','questions');
buttonContainer.setAttribute('id','buttonContainer');
yesButton.setAttribute('class', 'btn btn-success btn3d');
yesButton.setAttribute('type', 'submit');
noButton.setAttribute('class', 'btn btn-danger btn3d');
noButton.setAttribute('type', 'submit');
h1.textContent="Gör dig redo!";
countdown.textContent="3";
question.textContent="Australia is wider than the moon";
yesButton.textContent="Sant";
noButton.textContent="Falsk";

div.append(h1,countdown);

// 

var timeleft = 2;
var Timer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(Timer);
    setTimeout(() => {div.remove()});
    main.append(question);
    question.appendChild(buttonContainer); 
    buttonContainer.append(yesButton,noButton); 
  } else {
    document.querySelector("#countDown").innerHTML = timeleft;
    
  }
  timeleft -= 1;
}, 1500);

// Toggle
const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark')
  header.classList.toggle('darkText')
  h1.classList.toggle('darkText')
  question.classList.toggle('darkText')
})