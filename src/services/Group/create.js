const { Group } = require("../../models/Group")
const questions = require("../../config/questions.json")

class GroupCreate {
    constructor(alternativesGenerate) {
        this._alternativesGenerate = alternativesGenerate
    }

    execute(session, name) {
        let newGroup = new Group(session, name, questions) 
        const chosenQuestion = newGroup.chooseQuestion(questions)

        newGroup.current_question = chosenQuestion.question
        newGroup.current_response = chosenQuestion.alternatives[0]
        newGroup.current_alternatives = this._alternativesGenerate.execute(chosenQuestion.alternatives)
        newGroup.current_question_id = chosenQuestion.id
        newGroup.status = true

        return {
            success: true,
            data: newGroup 
        }
    }
}

module.exports = { GroupCreate } 

