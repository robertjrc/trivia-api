const { groupController } = require("../../index")

test("should delete a group", async () => {
    const session = "920390203"

    const groupDeleteService = await groupController.delete(session)

    expect(groupDeleteService.success).toBe(true)
})
