const QuizGame = require("../../index")

test("should get player by serialized", async () => {
    const session = "920390203"
    const serialized = "90939493030"

    const quizGame = new QuizGame() 

    const getBySerializedService = await quizGame.player.getBySerialized(session, serialized)
    console.log(getBySerializedService)

    expect(getBySerializedService.success).toBe(true)
})
