let questions = [
  {
    question: "Australia is wider than the moon",
    answers: ["true", "false"],
    correctAnswer: 0,
    category: "trueOrFalse",
  },
  {
    question: "Coffee is made from berries",
    answers: ["true", "false"],
    correctAnswer: 0,
    category: "trueOrFalse",
  },
  {
    question: "Walt Disney holds the record for the most Oscars",
    answers: ["true", "false"],
    correctAnswer: 0,
    category: "trueOrFalse",
  },
  {
    question: "How many sides does a square have?",
    answers: ["3", "4", "5"],
    correctAnswer: 1,
    category: "chooseBetweenThreeAnswers",
  },
  {
    question: "How many sides does a pentagon have?",
    answers: ["5", "6", "7"],
    correctAnswer: 0,
    category: "chooseBetweenThreeAnswers",
  },
  {
    question: "How many sides does a hexagon have?",
    answers: ["5", "6", "7"],
    correctAnswer: 1,
    category: "chooseBetweenThreeAnswers",
  },
  {
    question: "Which countries border The Netherlands?",
    answers: ["Belgium", "Germany", "France", "Denmark"],
    correctAnswer: ["Belgium", "Germany", "France"],
    category: "checkboxes",
  },
];

// Adding HTML text content
let h1 = document.createElement("h1");
h1.setAttribute("id", "getReady");
let countdown = document.createElement("div");
countdown.setAttribute("id", "countDown");
h1.textContent = "Gör dig redo!";
countdown.textContent = "3";
let div = document.querySelector("#main");

// Placing HTML Elements
div.append(h1, countdown);
quiz.style.display="none";

// Counting down before Start
let timeleft = 2;
let Timer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(Timer);
    setTimeout(() => {
      div.remove();
      quiz.style.display="block";
    });
  } else {
    document.querySelector("#countDown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1500);
// Toggle Darkmode

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  header.classList.toggle("darkText");
  h1.classList.toggle("darkText");
  main.classList.toggle("darkText");
});


// console.log(questions[1].question);
let i = 0;
let points = 0;
let QuizQuestion = document.createElement("h1");
let header = document.querySelector("header");
let buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer");
let main = document.querySelector("#quiz");
main.append(QuizQuestion, buttonContainer);

QuizQuestion.textContent = questions[i].question;

let button1 = document.createElement("button");
button1.textContent = questions[i].answers[0];
button1.setAttribute("class", "button");

let buttonms1 = document.createElement("button");
buttonms1.textContent = questions[i + 6].answers[0];
buttonms1.setAttribute("class", "button");

let button2 = document.createElement("button");
button2.textContent = questions[i].answers[1];
button2.setAttribute("class", "button");

let buttonms2 = document.createElement("button");
buttonms2.textContent = questions[i + 6].answers[1];
buttonms2.setAttribute("class", "button");

let button3 = document.createElement("button");
button3.textContent = questions[i].answers[2];
button3.setAttribute("class", "button");

let buttonms3 = document.createElement("button");
buttonms3.textContent = questions[i + 6].answers[2];
buttonms3.setAttribute("class", "button");

let buttonms4 = document.createElement("button");
buttonms4.textContent = questions[i].answers[3];
buttonms4.setAttribute("class", "button");

let result = document.querySelector("#result");
let finished = document.createElement("button");
finished.setAttribute("class", "buttonFinished");
finished.textContent = "Get Results!"
let countries = [];
let score = document.querySelector("#score");
let amountQuestionsAnswered = document.createElement("h2");
score.append(amountQuestionsAnswered);
amountQuestionsAnswered.textContent = `Question ${i + 1} / 7 `;

main.append(button1, button2);
// console.log("i: " + i);
let checkAnswer = () => {
  i++;
  points++;
  QuizQuestion.textContent = questions[i].question;
  button1.textContent = questions[i].answers[0];
  button2.textContent = questions[i].answers[1];
  button3.textContent = questions[i].answers[2];
  buttonms4.textContent = questions[i].answers[3];
  amountQuestionsAnswered.textContent = `Question ${i + 1} / 7 `;
};

let nextQuestion = () => {
  i++;
  QuizQuestion.textContent = questions[i].question;
  button1.textContent = questions[i].answers[0];
  button2.textContent = questions[i].answers[1];
  button3.textContent = questions[i].answers[2];
  buttonms4.textContent = questions[i].answers[3];
  amountQuestionsAnswered.textContent = `Question ${i + 1} / 7 `;
};



button1.addEventListener("click", () => {
  if (
    questions[i].answers[questions[i].correctAnswer] === button1.textContent &&
    i < 6
  ) {
    checkAnswer();
  } else {
    nextQuestion();
  }
  if (i >= 6) {
    main.append(buttonms1, buttonms2, buttonms3, buttonms4);
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
  }
  if (i >= 3) {
    main.append(button3);
  }
});

button2.addEventListener("click", () => {
  if (
    questions[i].answers[questions[i].correctAnswer] === button2.textContent &&
    i < 6
  ) {
    checkAnswer();
    // console.log(button2.textContent);
  } else {
    nextQuestion();
  }
  if (i >= 6) {
    main.append(buttonms1, buttonms2, buttonms3, buttonms4);
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
  }
  if (i >= 3) {
    main.append(button3);
  }
});

button3.addEventListener("click", () => {
  if (
    questions[i].answers[questions[i].correctAnswer] === button3.textContent &&
    i < 6
  ) {
    checkAnswer();
    // console.log(button3.textContent);
  } else {
    nextQuestion();
  }
  if (i >= 6) {
    main.append(buttonms1, buttonms2, buttonms3, buttonms4);
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
  }
  if (i >= 3) {
    main.append(button3);
  }
});

buttonms1.addEventListener("click", () => {
  countries.push(questions[i].answers[0]);
  buttonms1.style.backgroundColor = "#3f74b1";
  buttonms1.disabled = true;
  main.appendChild(result)
  result.appendChild(finished);
});

buttonms2.addEventListener("click", () => {
  countries.push(questions[i].answers[1]);
  buttonms2.style.backgroundColor = "#3f74b1";
  buttonms2.disabled = true;
  main.appendChild(result)
  result.appendChild(finished);
});

buttonms3.addEventListener("click", () => {
  countries.push(questions[i].answers[2]);
  buttonms3.style.backgroundColor = "#3f74b1";
  buttonms3.disabled = true;
  main.appendChild(result)
  result.appendChild(finished);
});

buttonms4.addEventListener("click", () => {
  countries.push(questions[i].answers[3]);
  buttonms4.style.backgroundColor = "#3f74b1";
  buttonms4.disabled = true;
  main.appendChild(result)
  result.appendChild(finished);
});

let countriesToString = JSON.stringify(questions[6].correctAnswer);

let showPoints = () => {
  QuizQuestion.style.display="none";
  buttonms1.style.display = "none";
  buttonms2.style.display = "none";
  buttonms3.style.display = "none";
  buttonms4.style.display = "none";
  finished.style.display = "none";
  let showPoints = document.createElement("h1");
  showPoints.textContent="You ended up with " + points + " out of 7 correct answers!";
  console.log("first: " + points);
  main.append(showPoints);
  if (points <4){
    showPoints.style.color = "red";
  };
  if (points <7){
    showPoints.style.color = "orange";
  };
  if (points >6){
    showPoints.style.color = "green";
  };
console.log("second: " + points);
};

finished.addEventListener("click", () => {
  let pushedCountriesToString = JSON.stringify(countries);
  if (countriesToString == pushedCountriesToString) {
    points++;   
    showPoints();

  } else {
    showPoints();
  }
});
