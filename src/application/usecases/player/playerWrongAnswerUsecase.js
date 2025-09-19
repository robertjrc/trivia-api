import { Result } from "../../common/result.js";

export class PlayerWrongAnswerUsecase {
    execute(player) {
        player.errors += 1;
        player.score -= 3;
        player.moves += 1;

        return Result.success("Player status updated successfully.", player);
    }
}
