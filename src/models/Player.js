class Player {
    constructor(serialized, name) {
        this.serialized = serialized
        this.name = name
        this.score = 0
        this.hits = 0
        this.errors = 0
        this.moves = 0
    } 
}

module.exports = { Player }
