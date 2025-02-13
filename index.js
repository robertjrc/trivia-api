const groupController = require("./src/controllers/groupController")
const playerController = require("./src/controllers/playerController")
const questionController = require("./src/controllers/questionController")

class QuizGame {
    constructor() {
        this.group = groupController
        this.player = playerController 
        this.question = questionController 
    }
}

module.exports = QuizGame
