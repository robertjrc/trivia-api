import { RNG } from "../../application/utils/RNG.js";

export class Group {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.players = [];
        this.questions = null;
        this.current_info = {
            question: null,
            alternatives: [],
            response: null,
            question_id: null,
            message_id: null
        };
        this.moves = 1;
        this.status = true;
    }

    setCurrentInfo(questions) {
        const questionRand = questions[RNG(0, questions.length)];

        this.current_info.question = questionRand.question;
        this.current_info.response = questionRand.alternatives[0];
        this.current_info.alternatives = this.#shuffleAlternatives(questionRand.alternatives);
        this.current_info.question_id = questionRand.id;
    }

    #shuffleAlternatives(alternatives) {
        for (let i = alternatives.length - 1; i > 0; i--) {
            const j = RNG(0, i + 1);
            [alternatives[i], alternatives[j]] = [alternatives[j], alternatives[i]];
        };

        return alternatives;
    }
}
