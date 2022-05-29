
    var questionsArr = [
        {
            question:'Dogs are a mans best friend',
            answer: true
        },
        {
            question:'Christmas is on December 25th.',
            answer: true
        },
        {
            question: 'George Washington was the 1st President.',
            answer: true
        },
        {
            question: '21 is the legal drinking age.',
            answer: true
        },
        {
            question: 'Z is the last letter of the alphabet',
            answer: true
        },
    ]

function runQuiz() {

    var correct = 0
    for (let i = 0; i < questionsArr.length; i++) {
        var question = questionsArr[i]
        var answer = confirm(question)

        if (answer) {
            correct++
        }
    }
   
    /*score = (correct >= Math.round(correct / questionsArr * 100));
    if(correct >= 5)) {
        alert("you got a 100%")
    }  else {
        alert("you got a 0%")
    }
    */  

    if(correct >= Math.round(questionsArr.length)) {
        alert("You got a 100%")
    } else {
        alert("You got a 0%")
    }    
    
}