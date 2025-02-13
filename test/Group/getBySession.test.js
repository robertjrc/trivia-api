const { groupController } = require("../../index")

test("should get a group by session", async () => {
    const session = "920390203"

    const groupGetBySessionService = await groupController.getBySession(session)
    console.log(groupGetBySessionService)

    expect(groupGetBySessionService.success).toBe(true)
})
