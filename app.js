function populate() {
    if (quiz.isEnded()) {
        showScores();
        // TODO: show answers
    }
    else {
        //show questions
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}


function showScores() {
    var gameOverHtml = "<h1>Result<h1>";
        gameOverHtml += "<h2 id='score'>Your Scores: " + quiz.score + "</h2>";
    var element = document.getElementById('quiz');
    element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("With a runner on First Base, there is a force out at...", ["Second Base", "Home", "First and Second Base", "Third Base"], "First and Second Base"),
    new Question("You are on First Base with 2 outs. What do you do?", ["Run as soon as the ball is PITCHED", "Stay on the base", "Wait to see if the ball is caught", "Run as soon as the ball is KICKED"], "Run as soon as the ball is KICKED"),
    new Question("The ball is kicked to you and you are not sure if you can get anyone out.", ["Throw the ball to the pitcher", "Throw the ball to the outfield", "Hold on to the ball even if someone tries to take it from you", "Roll the ball to the closest base"], "Throw the ball to the pitcher"),
    new Question("You are in the outfield and the ball is hit over your head. Throw it to...", ["Third Base", "Second Base", "The Cutoff-man", "First Base"], "The Cutoff-man"),
    new Question("How do we throw? HARD! How do we run? HARD! How is our kick? HARD! Are we going to win?", ["Yes", "No", "HARD!", "I Don't Know!"], "I Don't Know!")
];

var quiz = new Quiz(questions);

populate();