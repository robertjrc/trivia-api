const questions = require("../../config/questions.json")

class GroupReset {
    constructor(groupGetBySession, groupSaveChanges, alternativesGenerate) {
        this._groupGetBySession = groupGetBySession
        this._groupSaveChanges = groupSaveChanges
        this._alternativesGenerate = alternativesGenerate
    }

    async execute(session, data) {
        const group = await this._groupGetBySession.execute(session)
        if (!group.success) return {
            success: false,
            message: group.message
        }

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

        await this._groupSaveChanges.execute(session, data)

        return {
            success: true,
            data
        }
    }
}

module.exports = { GroupReset }
