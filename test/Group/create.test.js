const QuizGame = require("../../index")

test("should create a group", async () => {
    const session = "920390203"
    const name = "group name"

    const quizGame = new QuizGame() 

    const groupCreateService = await quizGame.group.create(session, name) 
    console.log(groupCreateService)

    expect(groupCreateService.success).toBe(true)
})
