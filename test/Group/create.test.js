const { groupController } = require("../../index")

test("should create a group", async () => {
    const session = "920390203"
    const name = "group name"

    const groupCreateService = await groupController.create(session, name) 
    console.log(groupCreateService)

    expect(groupCreateService.success).toBe(true)
})
