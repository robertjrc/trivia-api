const { questionController } = require("../../index")

test("should set a new question", () => {
    const data = {
        questions: [
            {
                id: 1,
                question: "Qual o satélite natural da Terra?",
                alternatives: [
                    "Lua",
                    "Sol",
                    "Ganimedes",
                    "SCD-1"
                ]
            },
            {
                id: 2,
                question: "O que é um tsunami?",
                alternatives: [
                    "Um maremoto",
                    "Um terremoto",
                    "Um tornado",
                    "Um ciclone"
                ]
            },
            {
                id: 3,
                question: "Qual destas substâncias faz parte da composição do vidro?",
                alternatives: [
                    "Fibra",
                    "Celulose",
                    "Petróleo",
                    "Areia"
                ]
            },
            {
                id: 4,
                question: "Qual a nacionalidade do sociólogo e filósofo Durkheim?",
                alternatives: [
                    "Francesa",
                    "Alemã",
                    "Italiana",
                    "Inglesa"
                ]
            }
        ],
        current_alternatives: [
            "Fibra",
            "Celulose",
            "Petróleo",
            "Areia"
        ],
        current_response: "Areia",
        current_question_id: 3,
        moves: 0
    }

    const setQuestionService = questionController.setQuestion(data)
    console.log(setQuestionService)

    expect(setQuestionService.current_question_id).toBe(3)
})
