import { Group } from "../../../domain/entities/Group.js";
import { Result } from "../../common/result.js";
import { importJson } from "../../utils/importJson.js";

const questions = await importJson("src/infrastructure/seeds/questions.json");

export class GroupResetUsecase {
    execute(request) {
        const newGroup = new Group(request.id, request.name);

        newGroup.questions = questions;
        newGroup.setCurrentInfo(newGroup.questions);

        return Result.success("Group reseted successfully.", newGroup);
    }
}
