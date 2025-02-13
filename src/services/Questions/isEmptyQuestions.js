const questions = require("../../config/questions.json")

class QuestionIsEmpty {
    execute(_questions) {
        if (_questions.length >= 1) return { isEmpty: false }
        _questions = questions

        return {
            isEmpty: true,
            questions: _questions
        }
    }
}

module.exports = { QuestionIsEmpty }
