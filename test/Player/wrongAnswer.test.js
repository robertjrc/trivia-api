const QuizGame = require("../../index")

test("should update player case wrong", async () => {
    const player = {
        serialized: '90939493030',
        name: 'Fulano de tal',
        score: 0,
        hits: 0,
        errors: 0,
        moves: 0
    }

    const wrongAnswerProps = {
        score: player.score,
        errors: player.errors,
        moves: player.moves
    }


    const quizGame = new QuizGame() 

    const playerWrongAnswerService = quizGame.player.wrongAnswer(wrongAnswerProps)

    console.log(playerWrongAnswerService)

    expect(playerWrongAnswerService.score).toEqual(-3)
})
