const QuizGame = require("../../index")

test("should to complete the question array when it is empty", () => {
    const questions = []

    const quizGame = new QuizGame() 

    const questionIsEmptyService = quizGame.question.isEmptyQuestions(questions)
    console.log(questionIsEmptyService)
    
    expect(questionIsEmptyService.isEmpty).toBe(true)
})
