const { groupController } = require("../../index")

test("should reset group", async () => {
    const session = "920390203"

    const groupGetBySessionService = await groupController.getBySession(session)
    if(!groupGetBySessionService.success) console.error(groupGetBySessionService.message)

    const groupResetSerivce = await groupController.reset(session, groupGetBySessionService.data)
    console.log(groupResetSerivce)

    expect(groupResetSerivce.success).toBe(true)
})
