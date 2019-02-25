export const steps = (num) => {
    if (num <= 0) {
        throw new Error("Only positive numbers are allowed");
    }
    if (num === 1) {
        return 0;
    } else if (num % 2 === 0) {
        return 1 + steps(num / 2);
    } else {
        return 1 + steps(num * 3 + 1);
    }
}
