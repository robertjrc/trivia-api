const { PlayerCreate } = require("../services/Player/create")
const { PlayerGetBySerialized } = require("../services/Player/getBySerialized")
const { GroupGetBySession } = require("../services/Group/getBySession")
const { PlayerCorrectAnswer } = require("../services/Player/correctAnswer")
const { PlayerWrongAnswer } = require("../services/Player/wrongAnswer")
const { PlayerOverallScore } = require("../services/Player/overallScore")
const path = require("node:path")

class PlayerController {
    constructor(storagePath) {
        this.storage = path.join(process.cwd(), `${storagePath}/quiz_storage`)
    }

    create(playerProps) {
        return new PlayerCreate().execute(playerProps)
    }

    async getBySerialized(session, serialized) {
        const groupGetBySessionService = new GroupGetBySession(this.storage)

        const service = new PlayerGetBySerialized(groupGetBySessionService)
        return await service.execute(session, serialized)
    }

    correctAnswer(player) {
        return new PlayerCorrectAnswer().execute(player)
    }

    wrongAnswer(player) {
        return new PlayerWrongAnswer().execute(player)
    }

    overallScore(players) {
        return new PlayerOverallScore().execute(players)
    }
}

module.exports = PlayerController
