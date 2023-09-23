export class Random {
    integerNumbers = [];

    convertToInteger(floatNumber) {
        const integer = Math.floor(floatNumber);

        return integer;
    }

    getRandomNumber(start = 1, end = 1000) {
        const number = Math.random() * (end - start + 1) + start;

        return number;
    }

    getIntegerRandomNumbers(length) {
        for (let index = 0; index < length; index++) {
            const number = this.convertToInteger(this.getRandomNumber());
            this.integerNumbers.push(number);
        }

        return this.integerNumbers;
    }
}