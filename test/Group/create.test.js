const QuizGame = require("../../index")

test("should create a group", async () => {
    const session = "920390203"
    const name = "group name"

    const storage_path = ("test/config")
    const quizGame = new QuizGame(storage_path)

    const groupGetBySessionService = await quizGame.group.getBySession(session)
    if (groupGetBySessionService.success) return

    const groupCreateService = quizGame.group.create(name)
    expect(groupCreateService.success).toBe(true)

    const groupSaveChnagesService = await quizGame.group.saveChanges(session, groupCreateService.data)
    expect(groupSaveChnagesService.success).toBe(true)
})
