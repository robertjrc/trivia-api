const { writeFileSync } = require("node:fs")

class GroupSaveChanges {
    constructor(storage) {
        this._storage = storage
    }

    async execute(session, request) {
        const _storage = `${this._storage}/${session}.json`
        writeFileSync(_storage, JSON.stringify(request, null, 2))

        return {
            success: true,
            message: "session saved"
        }
    }
}

module.exports = { GroupSaveChanges }

