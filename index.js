function runQuiz() {
   
    var questionsArr = [
        {
            'Dogs are a woman/mans best friend',
            true
        },
        {
            question:'Local coffee is superior to Starbucks',
            answer: true
        },
        {
            question: 'George Washington was the 10th President',
            answer: false
        },
        {
            question: '18 is the legal drinking age',
            answer: false
        },
        {
            question: 'Sunscreen can protect you from sun damage',
            answer: true
        },
    ];
    for (let i = 0; i < questionsArr.length; i++) {
        var question = questionsArr[i]
        //console.log(question)
        var answer = confirm(question)
    }
    

}