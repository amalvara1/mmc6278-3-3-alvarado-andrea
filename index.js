
    var questionsArr = [
        {
            question:'Dogs are a woman/mans best friend',
            answer: true
        },
        {
            question:'Local coffee is superior to Starbucks',
            answer: true
        },
        {
            question: 'George Washington was the 1st President',
            answer: true
        },
        {
            question: '21 is the legal drinking age',
            answer: true
        },
        {
            question: 'Sunscreen can protect you from sun damage',
            answer: true
        },
    ];

function runQuiz() {

    var correct = 0
    for (let i = 0; i < questionsArr.length; i++) {
        var question = questionsArr[i]
        var answer = confirm(question)

        if (answer) {
            correct++
        }
    }

    if(correct >= Math.round(questionsArr.length / 2)) {
        alert("You got a 100%")
    } else {
        alert("You got a 0%")
    }    

}