Date.prototype.addDays = function (days = 0) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days + 1);
    date.setHours(0, 0, 0, 0);
    return date;
};
