const QuizGame = require("../../index")

test("should create a player", async () => {
    const session = "920390203"
    const playerProps = {
        serialized: "90939493030",
        name: "Fulano de tal"
    }

    const quizGame = new QuizGame() 

    const playerCreateService = await quizGame.player.create(session, playerProps)
    console.log(playerCreateService)

    expect(playerCreateService.success).toBe(true)
})
