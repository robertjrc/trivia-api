const QuizGame = require("../../index")
const path = require("node:path")

test("should create a group", async () => {
    const session = "920390203"
    const name = "group name"

    const storage_path = path.join("test", "storage")
    const quizGame = new QuizGame(storage_path) 

    const groupCreateService = await quizGame.group.create(session, name) 
    console.log(groupCreateService)

    expect(groupCreateService.success).toBe(true)
})
