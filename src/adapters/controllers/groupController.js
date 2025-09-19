import { GroupCreateUsecase } from "../../application/usecases/group/groupCreateUsecase.js";
import { GroupDeleteByIdUsecase } from "../../application/usecases/group/groupDeleteByIdUsecase.js";
import { GroupGetByIdUsecase } from "../../application/usecases/group/groupGetByIdUsecase.js";
import { GroupQuestionsEmptyVerify } from "../../application/usecases/group/groupQuestionsEmptyVerifyUsecase.js";
import { GroupRemoveQuestionByIdUsecase } from "../../application/usecases/group/groupRemoveQuestionByIdUsecase.js";
import { GroupResetUsecase } from "../../application/usecases/group/groupResetUsecase.js";
import { GroupSaveUsecase } from "../../application/usecases/group/groupSaveUsecase.js";
import { GroupSetQuestionUsecase } from "../../application/usecases/group/groupSetQuestionsUsecase.js";
import { GroupInMemoryRepository } from "../../infrastructure/repositories/groupInMemoryRepository.js"

class GroupController {
    #repository = new GroupInMemoryRepository();

    async create(request) {
        const usecase = new GroupCreateUsecase();
        return await usecase.execute(request);
    }

    async getById(id) {
        const usecase = new GroupGetByIdUsecase(this.#repository);
        return await usecase.execute(id);
    }

    async save(id, data) {
        const usecase = new GroupSaveUsecase(this.#repository);
        return await usecase.execute(id, data);
    }

    async reset() {
        const usecase = new GroupResetUsecase()
        return await usecase.execute();
    }

    async isEmpty(questions) {
        const usecase = new GroupQuestionsEmptyVerify();
        return await usecase.execute(questions);
    }

    removeQuestionById(questions, questionId) {
        return new GroupRemoveQuestionByIdUsecase().execute(questions, questionId);
    }

    setQuestion(group) {
        return new GroupSetQuestionUsecase().execute(group);
    }

    async delete(id) {
        const usecase = new GroupDeleteByIdUsecase(this.#repository);
        return await usecase.execute(id);
    }
}

export default new GroupController();
