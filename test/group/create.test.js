import test from "node:test";
import assert from "node:assert/strict";
import { GroupCreateUsecase } from "../../src/application/usecases/group/groupCreateUsecase.js";

test("should create group", () => {
    const groupForm  = {
        id: "920390203",
        name: "group name"
    }

    const groupCreateUsecase = new GroupCreateUsecase();
    const response = groupCreateUsecase.execute(groupForm);

    console.log(response.data);

    assert.equal(response.success, true);
})
