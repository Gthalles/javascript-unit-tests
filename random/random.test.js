import { Random } from "./random";

const values = [
    {
        testName: "Get random number from the input params.",
        input: [100, 200],
    },
    {
        testName: "Get random number from the input params.",
        input: [-100, 0],
    },
];

const defaultValues = [
    {
        testName: "Get random number from the default input params.",
        input: [],
    },
];

const randomCollection = [
    {
        testName: "Verify if collection length equal to input param",
        inputs: 2
    }
];

const random = new Random();

for (const value of values) {
    let result = random.getRandomNumber(value.input[0], value.input[1]);

    test(value.testName, () => {
        expect(result).toBeGreaterThanOrEqual(value.input[0]);
        expect(result).toBeLessThanOrEqual(value.input[1]);
    });
}

for (const value of defaultValues) {
    let result = random.getRandomNumber(value.input[0], value.input[1]);

    test("Random numbers must be integers", () => {
        expect(typeof (random.convertToInteger(result))).toBe("number");
    })
}

for (const value of randomCollection) {
    const result = random.getIntegerRandomNumbers(value.inputs);

    console.log(result);

    test(value.testName, () => {
        expect(result.length).toBe(value.inputs);
    });
}