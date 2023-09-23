export class Calculator {
    sum(a, b) {
        if (!a || !b) throw new Error("Insuficient params for the sum.");

        if (typeof (a) !== "number" || typeof (b) !== "number") {
            throw new Error("Sum params must be numbers.");
        }

        return a + b;
    }
}