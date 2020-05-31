const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
};

function todaysDate(_options = options) {
    const todaysDate = new Date();
    const today = todaysDate.getDay();
    return todaysDate.toLocaleString("en-US", _options) + ", " + days[today];
}

export default todaysDate;
