class QuestionRemoveCurrent {
   async execute(currentQuestions, currentQuestionId) {
        function remove(chave, valor) {
            currentQuestions = currentQuestions.filter(function(jsonObject) {
                return jsonObject[chave] != valor;
            });
            return currentQuestions
        }
        remove("id", currentQuestionId)

        return currentQuestions
    }
}

module.exports = { QuestionRemoveCurrent }

