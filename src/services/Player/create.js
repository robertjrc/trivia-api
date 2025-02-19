const { Player } = require("../../models/Player")

class PlayerCreate {
    exceute(playerProps) {
        const { serialized, name } = playerProps

        const newPlayer = new Player(serialized, name)

        return {
            success: true,
            message: "player created successfully.",
            data: newPlayer
        }
    }
}

module.exports = { PlayerCreate }
