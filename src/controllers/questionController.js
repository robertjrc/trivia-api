const { AlternativesGenerate } = require("../services/Questions/alternativesGenerate");
const { QuestionRemoveCurrent } = require("../services/Questions/removeCurrentQuestion");
const { QuestionSet } = require("../services/Questions/setQuestion");
const { QuestionIsEmpty } = require("../services/Questions/isEmptyQuestions");

class QuestionContrller {
    alternativesGenerate(question) {
        const service = new AlternativesGenerate()
        return service.execute(question)
    }

   async removeCurrentQuestion(data, currentQuestionId) {
        const service = new QuestionRemoveCurrent()
        return service.execute(data, currentQuestionId)
    }

    setQuestion(data) {
        const questionAlternativesGenerate = new AlternativesGenerate()

        const service = new QuestionSet(questionAlternativesGenerate)
        return service.execute(data)
    }

    isEmptyQuestions(questions) {
        const service = new QuestionIsEmpty()
        return service.execute(questions)
    }
}

module.exports = QuestionContrller
