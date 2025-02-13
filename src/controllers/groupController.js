const { GroupCreate } = require("../services/Group/create")
const { GroupGetBySession } = require("../services/Group/getBySession")
const { GroupSaveChanges } = require("../services/Group/saveChanges")
const { GroupReset } = require("../services/Group/reset")
const { GroupDelete } = require("../services/Group/delete")
const { AlternativesGenerate } = require("../services/Questions/alternativesGenerate")
const { existsSync, mkdirSync } = require("node:fs")
const path = require("node:path")

class GroupController {
    constructor(storagePath) {
        this.storage = path.join(process.cwd(), `${storagePath}/quiz_storage`) 
        this._storageExist()
    }

    async create(session, name) {
        const groupGetBySessionService = new GroupGetBySession(this.storage)
        const groupSaveChangesService = new GroupSaveChanges(this.storage)
        const alternativesGenerate = new AlternativesGenerate()

        const service = new GroupCreate(groupGetBySessionService, groupSaveChangesService, alternativesGenerate)
        return await service.execute(session, name)
    }

    async getBySession(session) {
        const service = new GroupGetBySession(this.storage)
        return await service.execute(session)
    }

    async saveChanges(session, request) {
        const service = new GroupSaveChanges(this.storage)
        return await service.execute(session, request)
    }

    async reset(session, data) {
        const groupGetBySessionService = new GroupGetBySession(this.storage)
        const groupSaveChangesService = new GroupSaveChanges(this.storage)
        const alternativesGenerate = new AlternativesGenerate()

        const service = new GroupReset(groupGetBySessionService, groupSaveChangesService, alternativesGenerate)
        return await service.execute(session, data)
    }

    async delete(session) {
        const groupGetBySessionService = new GroupGetBySession(this.storage)

        const service = new GroupDelete(this.storage, groupGetBySessionService)
        return await service.execute(session)
    }

    _storageExist() { 
        if(!existsSync(this.storage)) { mkdirSync(this.storage) } 
    }
}

module.exports = GroupController
