// Quiz Questions
let questions = [
  {
    question: "Australia is wider than the moon.",
    answers: [true],
    correctAnswer: 1,
  },
  {
    question: "Holland is wider than the moon.",
    answers: [false],
    correctAnswer: 1,
  },
  {
    question: "Sweden has a cross in its flag.",
    answers: [true],
    correctAnswer: 1,
  },
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

// Setting HTML Attributes
h1.setAttribute("id", "getReady");
countdown.setAttribute("id", "countDown");
question.setAttribute("class", "questions");
buttonContainer.setAttribute("id", "buttonContainer");
yesButton.setAttribute("class", "button yesButton");
noButton.setAttribute("class", "button noButton");

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
    amountQuestionsAnswered.textContent = `Question ${i} / 7 `;
    main.append(question);
    score.append(amountQuestionsAnswered);
    question.appendChild(buttonContainer);
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

yesButton.addEventListener("click", () => {
   if (i <= 6) {
    i++;
    amountQuestionsAnswered.textContent = `Question ${i} / 7 `;
    question.textContent = questions[i].question;
    question.appendChild(buttonContainer);
    buttonContainer.append(yesButton, noButton);
  } else {
    amountQuestionsAnswered.textContent = `Question 7 / 7 `;
  }
});

noButton.addEventListener("click", () => {
  if (i <= 6) {
   i++;
   amountQuestionsAnswered.textContent = `Question ${i} / 7 `;
   question.textContent = questions[i].question;
   question.appendChild(buttonContainer);
   buttonContainer.append(yesButton, noButton);
 } else {
   amountQuestionsAnswered.textContent = `Question 7 / 7 `;
 }
});
