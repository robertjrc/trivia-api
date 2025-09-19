import { Result } from "../../common/result.js";

export class GroupRemoveQuestionByIdUsecase {
    execute(currentQuestions, currentQuestionId) {
        currentQuestions = currentQuestions.filter((jsonObject) => {
            return jsonObject["id"] !== currentQuestionId;
        });

        return Result.success("Question removed successfully.", currentQuestions);
    }
}
