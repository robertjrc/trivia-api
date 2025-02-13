class Group {
    constructor(session, name, questions) {
        this.session = session
        this.name = name
        this.players = []
        this.questions = questions
        this.current_question = null
        this.current_alternatives = []
        this.current_response = null
        this.current_question_id = null
        this.message_id = null
        this.moves = 1
        this.status = false
    }

    chooseQuestion(questions) {
        const result = Math.floor(Math.random() * (questions.length - 0) + 0)
        return questions[result]
    }
}

module.exports = { Group }
