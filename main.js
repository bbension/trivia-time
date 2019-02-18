// GLOBAL VARIABLES
// =================================================================
var myQuestions = [{
        question: "Which record label featured artists such as Dr. Dre, Tupac, and Snoop Dogg?",
        answers: {
            a: "Jr Mafia",
            b: "Roc A Fella Records",
            c: "Death Row Records"
        },
        correctAnswer: "b"
    },
    {
        question: "How old was the Notorious B.I.G. at the time of his death?",
        answers: {
            a: '26',
            b: "24",
            c: "19"
        },
        correctAnswer: "c"
    },
    {
        question: "Phife Dawg, Q-Tip, and Ali Shaheed Muhammad were the members of what rap group?",
        answers: {
            a: 'Arrested Development',
            b: "A Tribe Called Quest",
            c: "Digital Underground"
        },
        correctAnswer: "b"
    },
    {
        question: "Which Nas song did Jay-Z sample for his song, Dead Presidents?",
        answers: {
            a: "The World is Yours",
            b: "If I Ruled the World",
            c: "One Mic"
        },

        correctAnswer: "b"
    },
    {
        question: "What does O.P.P mean?",
        answers: {
            a: "Other People's Property",
            b: "Other People's Problems",
            c: "No one really knows for sure"
        },
        correctAnswer: "a"
    },
    {
        question: "Which Group's song 'Fight the Power' was featured in Spike Lee's, 'Do The Right Thing'?",
        answers: {
            a: "NWA",
            b: "Enemigo del Publico",
            c: "Wu-Tang"
        },
        correctAnswer: "b"
    },
    {
        question: "Which was NOT a member of Wu-Tang Clan?",
        answers: {
            a: "Method",
            b: "ODB",
            c: "Royce da 5'9''"
        },
        correctAnswer: "c"
    },
    {
        question: "Who was Fresh Prince's DJ?",
        answers: {
            a: "DJ Kid Capri",
            b: "DJ Jazzy Jeff",
            c: "Funk Master Flex"
        },
        correctAnswer: "b"
    },
    {
        question: "Name the Singer that was married to Biggie?",
        answers: {
            a: "Mary J Blidge",
            b: "Queen Latifa",
            c: "Faith Evans"
        },
        correctAnswer: "c"
    },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // Store output and answers
        var output = [];
        var answers;

        // for each question
        for (var i = 0; i < questions.length; i++) {
            // reset list of answers
            answers = [];
            for (letter in questions[i].answers) {
                //add html select button ??? why is t
                answers.push(
                    '<label>' +
                    '<input type="radio", name="question", + i + '
                    "value=" []
                    ' + letter + '
                    ">' +
                    letter + ': ' +
                    questions[i].answers[letter] +
                    '</label>'
                );
            }

            //concatenate answers w/ questions for the output
            output.push(
                '<div class="question">' + questions[i].question + '<div>' +
                '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        //combine output list on one string of html 
        quizContainer.innerhtml = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {

        //answer containers from questions
        var answerContainers = quizContainer.querySelectorAll('.answers');

        //players answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question
        for (var i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input(name=question' + i + ']:checked') || {}).value;

            //correct answer & # of correct ones
            if (userAnswer === question[i].correctAnswer) {
                numCorrect++;

                answerContainer[i].style.color = 'white';
            }
            //wrong answer
            else {
                answerContaiers[i].style.color = 'red';
            }
        }

        //show # correct answers
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    //display questions asap
    showQuestions(questions, quizContainer);

    // press button and game result
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}