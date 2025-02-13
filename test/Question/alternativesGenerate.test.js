const { questionController } = require("../../index")

test("should to generate alternative", () => {
    const question = {
        "id": 1,
        "question": "1+1=?",
        "alternatives": [
            "2",
            "3",
            "5",
            "4"
        ]
    }

    const alternativesGenerateService = questionController.alternativesGenerate(question)
    console.log(alternativesGenerateService)

    expect(alternativesGenerateService[0]).toBe("2")
})
