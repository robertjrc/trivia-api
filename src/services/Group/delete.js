const { unlinkSync } = require("node:fs")

class GroupDelete {
    constructor(storage, getGroupBySession) {
        this._storage = storage
        this._getGroupBySession = getGroupBySession
    }

    async execute(session) {
        const response = await this._getGroupBySession.execute(session)
        if (!response.success) return {
            success: false,
            message: response.message
        }

        const _storage = `${this._storage}/${session}.json`
        unlinkSync(_storage)

        return {
            success: true,
            message: "session deleted successfully."
        }
    }
}

module.exports = { GroupDelete } 
