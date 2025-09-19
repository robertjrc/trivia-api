import { Group } from "../../../domain/entities/Group.js";
import { Result } from "../../common/result.js";
import { importJson } from "../../utils/importJson.js";

export class GroupResetUsecase {
    async execute(request) {
        const newGroup = new Group(request.id, request.name);

        newGroup.questions = await importJson("../../infrastructure/seeds/questions.json");
        newGroup.setCurrentInfo(newGroup.questions);

        return Result.success("Group reseted successfully.", newGroup);
    }
}
