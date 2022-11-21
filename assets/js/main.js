/**
* Main JavaScript for the site
*/
console.log("JavaScript Connected!");

const radioQuestions = [
    {
        question: "Question 1?",
        answers: {
        a: "radio option a",
        b: "radio option b",
        c: "radio option c",
        },
        specialConditionAnswer: "a"
    },
    {
        question: "Question 2?",
        answers: {
            a: "radio option a",
            b: "radio option b",
            c: "radio option c",
        },
        specialConditionAnswer: "b"
    },
    {
        question: "Question 3?",
        answers: {
            a: "radio option a",
            b: "radio option b",
            c: "radio option c",
        },
        specialConditionAnswer: "c"
    },
];

let questionsContainer = document.getElementById('questions');
let answersContainer = document.getElementById('answers');
let submitButton = document.getElementById('submit');

function buildQuestions(){
    const questions = [];
    for (let i in radioQuestions) {
        // use of hasOwnProperty check for defensive coding!
        if (radioQuestions.hasOwnProperty(i)) {
            // console.log(radioQuestions[i]);
            // console.log(radioQuestions[i]['question']);
            // console.log(radioQuestions[i]['answers']);
            // console.log(radioQuestions[i]['specialConditionAnswer'])
            let question = radioQuestions[i]['question']
            let answers = fetchAnswers(radioQuestions[i]['answers'], i).join('');
            questions.push(
                `<p>${question}</p>
                ${answers}
                `
            )
        }
    }
    // console.log(questions);
    questionsContainer.innerHTML = questions.join('');
    console.log("Questions Built");
}

function fetchAnswers(answersArray, questionNumber){
    console.log(answersArray);
    let htmlAnswers = []
    for (let i in answersArray) {
        if (answersArray.hasOwnProperty(i)) {
            // console.log(i);
            // console.log(answersArray[i]);
            htmlAnswers.push(
            `<input type="radio" name="question${questionNumber}" value="${i}">
            <label for="answer${i}">${answersArray[i]}</label><br>
            `
            )
        }
    }
    // console.log(htmlAnswers);
    return htmlAnswers;

}

function showAnswers(){
    const message = document.getElementById("answers");
    console.log("Answers Displayed");
    try {
        if (document.querySelector('input[name="question1"]:checked').value != null) {
            let testor = document.querySelector('input[name="question1"]:checked').value;
            console.log(testor);
            } else {
            console.log(testor);
        }
        
    }
    catch(err) {
        if (err.name  == 'TypeError') {
            message.innerHTML = "OOPS Did you miss a question?";
        } else {
            console.log(err);
        }
        
    }
    
}

// display quiz right away
buildQuestions();

// on submit, show results
submitButton.addEventListener('click', showAnswers);