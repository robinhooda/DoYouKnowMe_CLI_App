var readLineSync = require("readline-sync")
const chalk = require('chalk');

var score = 0;

// data of high score
var highScores = [
  {
    name: "Debo",
    score: 3,
  },
  {
    name: "Neeti",
    score: 3,
  },
  {
    name: "Arun",
    score: 3,
  }
]

function greetingMessage(){
  var currentTime = new Date();
  var currentOffset = currentTime.getTimezoneOffset();

  var ISTOffset = 330;   // IST offset UTC +5:30 
  var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
  // ISTTime now represents the time in IST coordinates

  var hours = ISTTime.getHours()

  if (hours < 12 && hours >4) {
    console.log(chalk.bold("Good morning!"));
  }else if(hours > 12 && hours< 18) {
    console.log(chalk.bold("Good afternoon!"));
  }else{
    console.log(chalk.bold("Good evening!"));
  }
}

function welcomeMessage(){
  console.log("\nWelcome to "+chalk.bold.inverse("DO YOU KNOW Robin") +  " Quizz")
  var userName = readLineSync.question(chalk.bold.bgBlue.inverse("\nWhat's your name? "));
  console.log(chalk.bgCyan("\n Hello " + userName + "! let's check how much you are familiar with Robin"));
  console.log(chalk.cyan("\nNote:- For every right answer, your will be getting +1 points"))
  console.log("\nGood luck!")
}

//Set of questions and answers
var questions = [
  {
    question: 'Where do Robin live?',
    answer: 'delhi'
  },
  {
    question: 'Which is Robin\'s favourite programming language?',
    answer: 'JS'
  },
  {
    question: 'What\'s Robin\'s hobby other than programming?',
    answer: 'gym'
  },
];

function playGame(){
  for(let i=0; i< questions.length; i++){
    var currentQuestion = questions[i];
    console.log(chalk.bold("\nQuestion no. "+ (i+1) + "-"))
    quizz(currentQuestion);
  }
  showfinalResult();
}

function quizz(currentQuestion){
  var answer = readLineSync.question(chalk.yellow(currentQuestion.question))
    if( answer.toUpperCase() === currentQuestion.answer.toUpperCase()){
      score++;
      console.log(chalk.green("You are right!"))
      console.log("Your's current Score:" + score)
    }else{
      console.log(chalk.red("Opps! You are wrong!"))
      console.log("Your's current Score: " + score)
    }
}

function showfinalResult(){
  console.log("\n--------------------------------");
  console.log(chalk.bold.bgBlue.inverse("Total Score: "+ score));
   console.log("--------------------------------");
  console.log(chalk.bgCyan("\nCheck out the high scores, if you should be there ping me on insta @robinh.dev and I'll update it :)\n"));
  highScores.map(score => console.log(chalk.bgMagenta(score.name)+ " : "+ chalk.inverse(score.score)));
}

greetingMessage();
welcomeMessage();
playGame();