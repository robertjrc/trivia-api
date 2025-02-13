class PlayerWrongAnswer {
    execute(player) {
        player.errors += 1
        player.score -= 3 
        player.moves += 1

        return player
    }
}

module.exports = { PlayerWrongAnswer }
