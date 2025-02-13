const { PlayerCreate } = require("../services/Player/create")
const { PlayerGetBySerialized } = require("../services/Player/getBySerialized")
const { GroupGetBySession } = require("../services/Group/getBySession")
const { PlayerCorrectAnswer } = require("../services/Player/correctAnswer")
const { PlayerWrongAnswer } = require("../services/Player/wrongAnswer")
const { PlayerOverallScore } = require("../services/Player/overallScore")
const path = require("node:path")

class PlayerController {
    storage = path.join(__dirname, "..", "config", "session")

    async create(session, playerProps) {
        const groupGetBySessionService = new GroupGetBySession(this.storage)
        const playerGetBySerialized = new PlayerGetBySerialized(groupGetBySessionService)

        const service = new PlayerCreate(playerGetBySerialized)
        return await service.exceute(session, playerProps)
    }

    async getBySerialized(session, serialized) {
        const groupGetBySessionService = new GroupGetBySession(this.storage)

        const service = new PlayerGetBySerialized(groupGetBySessionService)
        return await service.execute(session, serialized)
    }

    correctAnswer(player) {
        const service = new PlayerCorrectAnswer()
        return service.execute(player)
    }

    wrongAnswer(player) {
        const service = new PlayerWrongAnswer()
        return service.execute(player)
    }

    async overallScore(players) {
        const service = new PlayerOverallScore()
        return await service.execute(players)
    }
}

module.exports = new PlayerController
