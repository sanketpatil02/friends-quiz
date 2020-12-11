var readLineSync = require('readline-sync')

var highScore = 0;
var highScorerName = "Admin";

while(true) {

var userName = readLineSync.question('What is your name? ')

console.log("\nWelcome " + userName + " , Let's check how much you know about Sanket\n");

var score = 0;

function quiz(question, answer) {
  var cAnswer = readLineSync.question(question);

  if (cAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Oops! Your answer is wrong.");
  }
}

var questionSet = [
  {
    question: "1. What I am studying? \nA: B.A \nB: B.Sc \nC: BCA \nD: B.Tech\n",
    answer: "D"
  },
  {
    question: "2. Where do I live? \nA: Kolhapur \nB: Gadhinglaj \nC: Pune \nD: Nesari\n",
    answer: "D"
  },
  {
    question: "3. In which month my birthday is there? \nA: October\nB: May\nC: September\nD: January\n",
    answer: "A"
  },
  {
    question: "4. What is my favourite food? \nA: Misal\nB: Vadapav\nC: Pavbhaji\nD: Dosa\n",
    answer: "C"
  },
  {
    question: "5. Who is my favourite actor? \nA: Amir Khan\nB: Hritik Roshan\nC: SRK\nD: Akshay Kumar\n",
    answer: "B"
  },
	{
		question: "6. My favourite crickrter? \nA: MS Dhoni\nB: Virat Kohli\nC: RohitSharma\nD: KL Rahul\n",
		answer: "B"
	}
]


	console.log("\nChoose options only\n")
	for (var i = 0; i < questionSet.length; i++) {
		quiz(questionSet[i].question, questionSet[i].answer);
		console.log("Your current score is ", score);
		console.log();
	}

	console.log("Your final score is ", score);

	if(highScore < score) {
		highScore = score;
		console.log("You beat " + highScorerName + "!");
		highScorerName = userName;
		
	}

	console.log(highScorerName + " made high score and Score is " + highScore + "!");

	var check = readLineSync.question('\nIf you want to continue, press 1 ')
	if(check == 1){
		continue;
	} else {
		break;
	}
}
