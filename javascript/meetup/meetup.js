const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const meetupDay = (year, month, day, descriptor) => {
    let numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();
    let indexOfNeededDay = days.indexOf(day);
    let possibleDates = [];
    for (let i = 0; i < numberOfDaysInMonth; i++) {
        let date = new Date(year, month, i + 1);
        if (date.getDay() === indexOfNeededDay) {
            possibleDates.push(date);
        }
    }

    let result;

    if (descriptor === 'teenth') {
        result = possibleDates.find(d => d.getDate() >= 13 && d.getDate() <= 19);
    } else if (descriptor === 'last') {
        result = possibleDates.pop();
    } else {
        const ordinal = parseInt(descriptor, 10) - 1;
        result = possibleDates.slice(ordinal, ordinal + 1).pop();
    }

    if (!result) { throw new Error('Day not found!'); }

    return result;
}
