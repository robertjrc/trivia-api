const QuizGame = require("../../index")

test("should get a group by session", async () => {
    const session = "920390203"
    const quizGame = new QuizGame() 

    const groupGetBySessionService = await quizGame.group.getBySession(session)
    console.log(groupGetBySessionService)

    expect(groupGetBySessionService.success).toBe(true)
})
