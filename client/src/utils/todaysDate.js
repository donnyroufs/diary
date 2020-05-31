const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
    timeZoneName: "short",
};

function todaysDate(_options = options) {
    const todaysDate = new Date();
    return todaysDate.toLocaleString("en-US", _options);
}

export default todaysDate;
