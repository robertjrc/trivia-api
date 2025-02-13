class AlternativesGenerate {
    execute(alternatives) {
        let _alternatives = alternatives 

        function shuffleArray(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

        return shuffleArray(_alternatives) 
    }
}

module.exports = { AlternativesGenerate }
