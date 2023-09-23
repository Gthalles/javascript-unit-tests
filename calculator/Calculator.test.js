import { Calculator } from "./Calculator";

const calc = new Calculator();

const sums = [
    {
        testName: "Adds 1 and 2 to equal 3",
        inputs: [1, 2],
        result: 3
    },
    {
        testName: "Adds -1 and -4 to equal -5",
        inputs: [-1, -4],
        result: -5
    },
    {
        testName: "Adds 1231232132132123 and 913284392491320483 to be a big number",
        inputs: [1231232132132123, 913284392491320483],
        result: 914515624623452500
    }
];


for (const item of sums) {
    test(item.testName, () => {
        const result = calc.sum(item.inputs[0], item?.inputs[1]);

        expect(result).toBe(item.result);
    });
}

const errors = [
    {
        testName: "Sum with only one param should throw an error.",
        inputs: [1],
        description: "Insuficient params for the sum."
    },
    {
        testName: "Sum without params should throw an error.",
        inputs: [],
        description: "Insuficient params for the sum."
    },
    {
        testName: "Sum with string params should throw an error.",
        inputs: ["um", "dois"],
        description: "Sum params must be numbers."
    },
    {
        testName: "Sum between a number and a string should throw an error.",
        inputs: [1, "dois"],
        description: "Sum params must be numbers."
    }
];

for (const error of errors) {
    test(error.testName, () => {
        const result = () => calc.sum(error.inputs[0], error?.inputs[1]);

        expect(result).toThrowError(error.description);
    });
}