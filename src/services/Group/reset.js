const questions = require("../../config/questions.json")

class GroupReset {
    constructor(alternativesGenerate) {
        this._alternativesGenerate = alternativesGenerate
    }

    execute(data) {
        data.status = false
        data.players = []
        data.questions = questions
        const chosenQuestion = data.questions[Math.floor(Math.random() * (data.questions.length + 0) + 0)]
        data.current_question = chosenQuestion.question
        data.current_response = chosenQuestion.alternatives[0]
        data.current_alternatives = this._alternativesGenerate.execute(chosenQuestion.alternatives)
        data.current_question_id = chosenQuestion.id
        data.message_id = null
        data.moves = 1

        return {
            success: true,
            data
        }
    }
}

module.exports = { GroupReset }
