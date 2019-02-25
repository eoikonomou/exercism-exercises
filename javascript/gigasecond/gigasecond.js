const gigaMillisecond = 10e11;

export const gigasecond = (date) => {
    try {
        return new Date(date.getTime() + gigaMillisecond);
    } catch (error) {
        console.log("Input is not a valid date.");
        console.log(error);
    }
}
