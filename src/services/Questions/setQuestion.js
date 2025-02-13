class QuestionSet {
    constructor(alternativesGenerate) {
        this._alternativesGenerate = alternativesGenerate
    }

    execute(data) {
        const chosenQuestion = data.questions[Math.floor(Math.random() * (data.questions.length + 0) + 0)]

        data.current_question = chosenQuestion.question
        data.current_response = chosenQuestion.alternatives[0]
        data.current_alternatives = this._alternativesGenerate.execute(chosenQuestion.alternatives)
        data.current_question_id = chosenQuestion.id
        data.moves += 1

        return data
    }
}

module.exports = { QuestionSet }
