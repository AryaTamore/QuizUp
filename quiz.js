const quizData = [
    {
      question: "What does HTML stands for?",
      options: ["Hypertext Markup Language", "Hypertext Multiple Language", "Hypertext Micro Language", "Hyper Markup Language"],
      answer: "Hypertext Markup Language",
      points: 1
    },
    {
      question: "Number of bits used in IPv6 address",
      options: ["16 bit", "32 bit", "64 bit", "128 bit"],
      answer: "128 bit",
      points: 1
    },
    {
      question: "Which one is the first web browser invented in 1990?",
      options: ["Internet Explorer", "Nexus", "Mosiac", "Mozilla"],
      answer: "Nexus",
      points: 1
    },
    {
      question: "Which of the following programming language is used to create programs like applets?",
      options: ["COBOL", "C language", "Java", "BASIC"],
      answer: "Java",
      points: 1
    },
    {
      question: "First ever computer virus is known as?",
      options: ["Rabbit", "EIK virus", "SCA virus", "Creeper virus"],
      answer: "Creeper virus",
      points: 1
    },
    {
      question: "Which programming language is exclusively used for artificial intelligence?",
      options: ["JAVA", "J2EE", "Prolog", "C language"],
      answer: "Prolog",
      points: 1
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const resultElement = document.getElementById("result");
  
  function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
  
    optionsElement.innerHTML = "";
    for (let i = 0; i < question.options.length; i++) {
      const option = document.createElement("button");
      option.textContent = question.options[i];
      option.addEventListener("click", selectOption);
      optionsElement.appendChild(option);
    }
  }
  
  function selectOption(event) {
    const selectedOption = event.target.textContent;
    const question = quizData[currentQuestion];
  
    if (selectedOption === question.answer) {
      score += question.points;
      event.target.style.backgroundColor = "#4caf50";
    } else {
      event.target.style.backgroundColor = "#ff0000";
      const correctOption = Array.from(optionsElement.children).find(
        (option) => option.textContent === question.answer
      );
      correctOption.style.backgroundColor = "#4caf50";
    }
  
    disableOptions();
    submitButton.disabled = true;
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      setTimeout(loadQuestion, 1000);
    } else {
      setTimeout(showResult, 1000);
    }
  }
  
  function disableOptions() {
    const options = Array.from(optionsElement.children);
    options.forEach((option) => {
      option.disabled = true;
    });
  }
  
  function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    submitButton.style.display = "none";
  
    resultElement.textContent = `You scored ${score} out of ${quizData.length}!`;
    const pointsThreshold = 3;
  
    if (score >= pointsThreshold) {
      resultElement.textContent += " Congratulations! You are a winner!";
      resultElement.style.color = "#00308F";
    } else {
      resultElement.textContent += " Sorry! You didn't reach the required points. You lost!";
      resultElement.style.color = "#00308F";
  }
  }
  loadQuestion();