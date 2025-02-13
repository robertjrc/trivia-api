const QuizGame = require("../../index")

test("should delete a group", async () => {
    const session = "920390203"
    const quizGame = new QuizGame() 

    const groupDeleteService = await quizGame.group.delete(session)

    expect(groupDeleteService.success).toBe(true)
})
