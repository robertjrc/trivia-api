import { Group } from "../../../domain/entities/Group.js";
import { Result } from "../../common/result.js";
import { importJson } from "../../utils/importJson.js";

export class GroupCreateUsecase {
    async execute(request) {
        const { id, name } = request;

        const newGroup = new Group(id, name);

        newGroup.questions = await importJson("../../infrastructure/seeds/questions.json");
        newGroup.setCurrentInfo(newGroup.questions);

        return Result.success("Group created successfully.", newGroup);
    }
}
