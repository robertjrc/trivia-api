class PlayerOverallScore {
    execute(players) {
        var text = "```pontuação geral```\n"

        players.sort((x, y) => {
            return x.score - y.score
        }).reverse();

        for (var player of players) {
            text += `\n*${player.name}*\n`
            text += "╰─⊰"
            text += `🔥 *${player.score}* pontos\n`
            text += `         🎯 *${((player.hits/player.moves)*100).toFixed(0)}%* de certo`
            text += "\n"
        }

        return text
    }
}

module.exports = { PlayerOverallScore }

