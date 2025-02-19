const { AlternativesGenerate } = require("../services/Questions/alternativesGenerate");
const { QuestionRemoveCurrent } = require("../services/Questions/removeCurrentQuestion");
const { QuestionSet } = require("../services/Questions/setQuestion");
const { QuestionIsEmpty } = require("../services/Questions/isEmptyQuestions");

class QuestionContrller {
    alternativesGenerate(question) {
        return new AlternativesGenerate().execute(question)
    }

    async removeCurrentQuestion(data, currentQuestionId) {
        return new QuestionRemoveCurrent().execute(data, currentQuestionId)
    }

    setQuestion(data) {
        const questionAlternativesGenerate = new AlternativesGenerate()
        return new QuestionSet(questionAlternativesGenerate).execute(data)
    }

    isEmptyQuestions(questions) {
        return new QuestionIsEmpty().execute(questions)
    }
}

module.exports = QuestionContrller
