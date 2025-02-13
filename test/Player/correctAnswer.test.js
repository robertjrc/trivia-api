const QuizGame = require("../../index")

test("should update playe case win", async () => {
    const player = {
        serialized: '90939493030',
        name: 'Fulano de tal',
        score: 0,
        hits: 0,
        errors: 0,
        moves: 0
    }

    const correctAnswerProps = {
        score: player.score,
        hits: player.hits,
        moves: player.moves
    }

    const quizGame = new QuizGame()

    const playerCorrectAnswerService = quizGame.player.correctAnswer(correctAnswerProps)
    console.log(playerCorrectAnswerService)

    expect(playerCorrectAnswerService.score).toEqual(10)
})
