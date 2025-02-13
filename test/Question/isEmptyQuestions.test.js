const { questionController } = require("../../index")

test("should to complete the question array when it is empty", () => {
    const questions = []

    const questionIsEmptyService = questionController.isEmptyQuestions(questions)
    console.log(questionIsEmptyService)
    
    expect(questionIsEmptyService.isEmpty).toBe(true)
})
