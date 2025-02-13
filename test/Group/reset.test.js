const QuizGame = require("../../index")

test("should reset group", async () => {
    const session = "920390203"
    const quizGame = new QuizGame() 

    const groupGetBySessionService = await quizGame.group.getBySession(session)
    if(!groupGetBySessionService.success) console.error(groupGetBySessionService.message)

    const groupResetSerivce = await quizGame.group.reset(session, groupGetBySessionService.data)
    console.log(groupResetSerivce)

    expect(groupResetSerivce.success).toBe(true)
})
