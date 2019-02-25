function reverseArray(array) {
    return array.reverse();
}

export const reverseString = (str) => {
    return reverseArray(str.split("")).join("");
}
