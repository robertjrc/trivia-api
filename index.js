const GroupController = require("./src/controllers/groupController")
const PlayerController = require("./src/controllers/playerController")
const QuestionController = require("./src/controllers/questionController")

class QuizGame {
    constructor(storagePath) {
        this.storage = storagePath
        this.group = new GroupController(this.storage)
        this.player = new PlayerController(this.storage) 
        this.question = new QuestionController() 
    }
}

module.exports = QuizGame
