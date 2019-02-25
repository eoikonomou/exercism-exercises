export const at = (hour, minute) => {
    const MINUTESPERDAY = 60 * 24;
    const HOURSPERDAY = 24;

    const Clock = {
        hour,
        minute: minute || 0,
    };

    function formatNum(num) {
        const numString = num.toString();
        return numString.length === 1 ? `0${numString}` : numString;
    }

    function adjustTime(delta) {
        const newDelta = Math.abs(delta) >= MINUTESPERDAY
            ? delta % MINUTESPERDAY
            : delta;

        const currentMinutes = Clock.hour * 60 + Clock.minute;
        let newMinutes = (currentMinutes + newDelta) % MINUTESPERDAY;

        newMinutes = newMinutes < 0 ? newMinutes += MINUTESPERDAY : newMinutes;

        Clock.hour = Math.floor(newMinutes / 60) % HOURSPERDAY;
        Clock.minute = newMinutes - Clock.hour * 60;
    }

    adjustTime(0);

    return {
        Clock,
        toString: () => `${formatNum(Clock.hour)}:${formatNum(Clock.minute)}`,
        plus(minutes) { adjustTime(minutes); return this; },
        minus(minutes) { adjustTime(-minutes); return this; },
        equals: otherClock => (
            Clock.hour === otherClock.Clock.hour
            && Clock.minute === otherClock.Clock.minute
        ),
    };
};
