const { Player } = require("../../models/Player")

class PlayerCreate {
    constructor(playerGetBySerialized) {
        this._playerGetBySerialized = playerGetBySerialized
    }

    async exceute(session, playerProps) {
        const { serialized, name  } = playerProps
        const playerExist = await this._playerGetBySerialized.execute(session, serialized)
        if(playerExist.success) return {
            success: false,
            message: playerExist.message
        }

        const newPlayer = new Player(serialized, name)

        return {
            success: true,
            message: "player created successfully.",
            newPlayer
        }
    }
}

module.exports = { PlayerCreate }
