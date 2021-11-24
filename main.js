// Quiz Questions
let questions = [
  {
    question: "Australia is wider than the moon",
    answers: true,
    correctAnswer: 1,
    category: "trueOrFalse",
  },
  {
    question: "Coffee is made from berries",
    answers: true,
    correctAnswer: 1,
    category: "trueOrFalse",
  },
  {
    question: "Walt Disney holds the record for the most Oscars",
    answers: true,
    correctAnswer: 1,
    category: "trueOrFalse",
  },
  {
    question: "How many sides does a square have?",
    answers: [3,4,5],
    correctAnswer: 2,
    category: "chooseBetweenThreeAnswers",
  },
  {
    question: "How many sides does a pentagon have?",
    answers: [5,6,7],
    correctAnswer: 1,
    category: "chooseBetweenThreeAnswers",
  },
  {
    question: "How many sides does a hexagon have?",
    answers: [5,6,7],
    correctAnswer: 2,
    category: "chooseBetweenThreeAnswers",
  },
  {
    question: "Which countries border The Netherlands?",
    answers: ["Belgium","Germany","France","Denmark"],
    correctAnswer: [1,2,3],
    category: "checkboxes",
  }
];


// Connecting HTML Elements
let header = document.querySelector("header");
let main = document.querySelector("main");
let score = document.querySelector("#score");
let div = document.querySelector("div");
const checkbox = document.querySelector("#checkbox");

// creating HTML Elements
let h1 = document.createElement("h1");
let countdown = document.createElement("div");
let question = document.createElement("h2");
let buttonContainer = document.createElement("div");
let yesButton = document.createElement("button");
let noButton = document.createElement("button");
let amountQuestionsAnswered = document.createElement("h2");
let i = 0;
let points = 0;

// Setting HTML Attributes
h1.setAttribute("id", "getReady");
countdown.setAttribute("id", "countDown");
question.setAttribute("class", "questions");
buttonContainer.setAttribute("id", "buttonContainer");
yesButton.setAttribute("class", "button yesButton");
yesButton.setAttribute("value", [true]);
noButton.setAttribute("class", "button noButton");
noButton.setAttribute("value", false);

// Adding HTML text content
h1.textContent = "Gör dig redo!";
countdown.textContent = "3";
yesButton.textContent = "Sant";
noButton.textContent = "Falsk";

// Placing HTML Elements
div.append(h1, countdown);

// Counting down before Start
let timeleft = 2;
let Timer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(Timer);
    setTimeout(() => {
      div.remove();
    });
    // printing first Question below
    question.textContent = questions[i].question;
    amountQuestionsAnswered.textContent = `Question ${i+1} / 7 `;
    main.append(question,buttonContainer);
    score.append(amountQuestionsAnswered);
    // question.appendChild(buttonContainer);
    buttonContainer.append(yesButton, noButton);
  } else {
    document.querySelector("#countDown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1500);


// Toggle

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  header.classList.toggle("darkText");
  h1.classList.toggle("darkText");
  question.classList.toggle("darkText");
});

// True Button
yesButton.addEventListener("click", () => {
    if (i<2) {
      i++;
    amountQuestionsAnswered.textContent = `Question ${i+1} / 7 `;
    question.textContent = questions[i].question;
    question.appendChild(buttonContainer);
    buttonContainer.append(yesButton, noButton);
    if(yesButton.value && questions[i-1].answers === true) {
      points++;
    console.log("amount of correct answers: " + points)
    console.log("i: " + i)
        }
      } else if (i>=2, i<4){
        yesButton.remove();
        noButton.remove();
        i++;
        amountQuestionsAnswered.textContent = `Question ${i+1} / 7 `;
        question.textContent = questions[i].question;
        points++;
        console.log("amount of correct answers: " + points)
        console.log("i: " + i)
           //  amountQuestionsAnswered.textContent = `Question 7 / 7 `;
       }
      });

// False Button
noButton.addEventListener("click", () => {
  if (i<2) {
    i++;
   amountQuestionsAnswered.textContent = `Question ${i+1} / 7 `;
   question.textContent = questions[i].question;
   question.appendChild(buttonContainer);
   buttonContainer.append(yesButton, noButton);
   if(noButton.value && questions[i-1].answers === !true) {
     points++;
     console.log("amount of correct answers: " + points)
     console.log("i: " + i)
        }
 } else if (i>=2, i<4){
  yesButton.remove();
  noButton.remove();
  amountQuestionsAnswered.textContent = `Question ${i+1} / 7 `;
  question.textContent = questions[i].question;
  points++;
  console.log("amount of correct answers: " + points)
  console.log("i: " + i)
//  amountQuestionsAnswered.textContent = `Question 7 / 7 `;
 }
});

console.log(questions[0].category);