import { Result } from "../../common/result.js";
import { importJson } from "../../utils/importJson.js";

export class GroupQuestionsEmptyVerify {
    async execute(currentQuestions) {
        if (currentQuestions.length >= 1) return Result.failure("It's not empty.", null);

        const questions = await importJson("../../infrastructure/seeds/questions.json")

        return Result.success("It's empty.", questions);
    }
}
