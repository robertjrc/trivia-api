import { Result } from "../../common/result.js";
import { importJson } from "../../utils/importJson.js";

const questions = await importJson("src/infrastructure/seeds/questions.json");

export class GroupQuestionsEmptyVerify {
    execute(currentQuestions) {
        if (currentQuestions.length >= 1) return Result.failure("It's not empty.", null);
        return Result.success("It's empty.", questions);
    }
}
