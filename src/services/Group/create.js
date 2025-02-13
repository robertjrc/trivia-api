const { Group } = require("../../models/Group")
const questions = require("../../config/questions.json")

class GroupCreate {
    constructor(getGroupBySession, groupSaveChanges, alternativesGenerate) {
        this._getGroupBySession = getGroupBySession
        this._groupSaveChanges = groupSaveChanges
        this._alternativesGenerate = alternativesGenerate
    }

    async execute(session, name) {
        const group = await this._getGroupBySession.execute(session)
        if (group.success) return {
            success: false,
            message: "This session already exist."
        }

        let newGroup = new Group(session, name, questions) 
        const chosenQuestion = newGroup.chooseQuestion(questions)

        newGroup.current_question = chosenQuestion.question
        newGroup.current_response = chosenQuestion.alternatives[0]
        newGroup.current_alternatives = this._alternativesGenerate.execute(chosenQuestion.alternatives)
        newGroup.current_question_id = chosenQuestion.id
        newGroup.status = true

        await this._groupSaveChanges.execute(session, newGroup)

        return {
            success: true,
            data: newGroup 
        }
    }
}

module.exports = { GroupCreate } 

