import test from "node:test";
import assert from "node:assert/strict";
import { Group, Player } from "../index.js";

test("should test API.", async () => {
    const groupId = "28391923929";
    const groupName = "group";

    const playerId = "293930229@c.us";
    const playerName = "Maria Silva";

    let group;
    let player;

    const groupResponse = await Group.getById(groupId);

    if (!groupResponse.success) {
        const groupForm = {
            id: groupId,
            name: groupName
        }

        group = (await Group.create(groupForm)).data;
    }

    const playerResponse = group.players.find(x => x.id === playerId);

    if (!playerResponse) {
        const playerForm = {
            id: playerId,
            name: playerName
        }
        player = Player.create(playerForm).data;

        group.players.push(player);
    }

    player = Player.correctAnswer(player).data;

    const isSaved = await Group.save(group.id, group);

    assert.equal(isSaved.success, true);
});
