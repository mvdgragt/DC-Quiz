// Quiz Questions
let questions = [
  {
    question: "Australia is wider than the moon",
    answers: true,
    correctAnswer: true,
    category: "trueOrFalse",
  },
  {
    question: "Coffee is made from berries",
    answers: true,
    correctAnswer: true,
    category: "trueOrFalse",
  },
  {
    question: "Walt Disney holds the record for the most Oscars",
    answers: true,
    correctAnswer: true,
    category: "trueOrFalse",
  },
  {
    question: "How many sides does a square have?",
    answers: ["3", "4", "5"],
    correctAnswer: 2,
    category: "chooseBetweenThreeAnswers",
  },
  {
    question: "How many sides does a pentagon have?",
    answers: ["5", "6", "7"],
    correctAnswer: 1,
    category: "chooseBetweenThreeAnswers",
  },
  {
    question: "How many sides does a hexagon have?",
    answers: ["5", "6", "7"],
    correctAnswer: 2,
    category: "chooseBetweenThreeAnswers",
  },
  {
    question: "Which countries border The Netherlands?",
    answers: ["Belgium", "Germany", "France", "Denmark"],
    correctAnswer: [1, 2, 3],
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
let button1 = document.createElement("button");
let button2 = document.createElement("button");
let button3 = document.createElement("button");
let button4 = document.createElement("button");
let button5 = document.createElement("button");
let amountQuestionsAnswered = document.createElement("h2");
let i = 0;
let points = 0;

// Setting HTML Attributes
h1.setAttribute("id", "getReady");
countdown.setAttribute("id", "countDown");
question.setAttribute("class", "questions");
buttonContainer.setAttribute("id", "buttonContainer");
button1.setAttribute("class", "button button1");
button1.setAttribute("value", [true]);
button2.setAttribute("class", "button button2");
button2.setAttribute("value", false);
button3.setAttribute("class", "button button3");
button4.setAttribute("class", "button button4");
button5.setAttribute("class", "button button5");


// Adding HTML text content
h1.textContent = "Gör dig redo!";
countdown.textContent = "3";
button1.textContent = "Sant";
button2.textContent = "Falsk";

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
    amountQuestionsAnswered.textContent = `Question ${i + 1} / 7 `;
    main.append(question, buttonContainer);
    score.append(amountQuestionsAnswered);
    buttonContainer.append(button1, button2,button3,button4,button5);
    button3.style.display="none";
    button4.style.display="none";
    button5.style.display="none";

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
  question.classList.toggle("darkText");
});

// True Button
button1.addEventListener("click", () => {
  if (i < 2) {
    i++;
    amountQuestionsAnswered.textContent = `Question ${i + 1} / 7 `;
    question.textContent = questions[i].question;
    question.appendChild(buttonContainer);
    buttonContainer.append(button1, button2,button3,button4,button5);
    if (button1.value && questions[i - 1].answers === true) {

      points++;
      console.log("amount of correct answers: " + points);
      console.log("i: " + i);
    }
  } else if ((i >= 3, i < 6)) {
    i++;
    console.log("amount of correct answers: " + points);
    console.log("i: " + i);
    button3.style.display="";
   
    amountQuestionsAnswered.textContent = `Question ${i + 1} / 7 `;
    question.textContent = questions[i].question;
    question.appendChild(buttonContainer);
    button1.textContent = questions[i].answers[0];
    button2.textContent = questions[i].answers[1];
    button3.textContent = questions[i].answers[2];
    if (
      questions[i].answers[questions[i].correctAnswer] === button2.textContent
    ) {
    points++;
    console.log("amount of correct answers: " + points);
    console.log("i: " + i);
    //  amountQuestionsAnswered.textContent = `Question 7 / 7 `;
  }}
});

// False Button
button2.addEventListener("click", () => {
  if (i < 2) {
    i++;
    amountQuestionsAnswered.textContent = `Question ${i + 1} / 7 `;
    question.textContent = questions[i].question;
    question.appendChild(buttonContainer);
    buttonContainer.append(button1, button2);
    if (button2.value && questions[i - 1].answers === !true) {
      points++;
      console.log("amount of correct answers: " + points);
      console.log("i: " + i);
    }
  } else if ((i >= 2, i < 4)) {
    button1.remove();
    button2.remove();
    i++;
    amountQuestionsAnswered.textContent = `Question ${i + 1} / 7 `;
    question.textContent = questions[i].question;
    question.appendChild(buttonContainer);
    buttonContainer.append(button3,button4,button5);
    button3.textContent = questions[i].answers[0];
    button4.textContent = questions[i].answers[1];
    button5.textContent = questions[i].answers[2];
    points++;
    console.log("amount of correct answers: " + points);
    console.log("i: " + i);
    //  amountQuestionsAnswered.textContent = `Question 7 / 7 `;
    //  amountQuestionsAnswered.textContent = `Question 7 / 7 `;
  }
});

//If One Answer is correct

let checkAnswer = () => {
  if (
    questions[i].answers[questions[i].correctAnswer] === button4.textContent
  ) {
    points++;
  }
};



// button3 Button
button3.addEventListener("click", () => {
  question.textContent = questions[i].question;
  amountQuestionsAnswered.textContent = `Question ${i + 1} / 7 `;
 
  if ((i >= 2, i < 4)) {
    checkAnswer() 
    
      console.log("amount of correct answers: " + points);
      console.log("i: " + i);
    }
  // } else if ((i >= 2, i < 4)) {
  //   button1.remove();
  //   button2.remove();
  //   i++;
  //   amountQuestionsAnswered.textContent = `Question ${i + 1} / 7 `;
  //   question.textContent = questions[i].question;
  //   question.appendChild(buttonContainer);
  //   buttonContainer.append(button3,button4,button5);
  //   button3.textContent = questions[i].answers[0];
  //   button4.textContent = questions[i].answers[1];
  //   button5.textContent = questions[i].answers[2];
  //   points++;
  //   console.log("amount of correct answers: " + points);
  //   console.log("i: " + i);
    //  amountQuestionsAnswered.textContent = `Question 7 / 7 `;
  // }
});

