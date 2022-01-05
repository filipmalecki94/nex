(function () {
    var nextDate = new Date();
    var months = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
    ];
    var currentDay = nextDate.getDay();
    var currentHour = nextDate.getHours();
    var currentDate = nextDate.getDate();
    var element = document.querySelector("#autoDate");
    if (currentHour >= 10 && currentDay == 3) {
        nextDate.setDate(currentDate + 7);
        element.innerHTML =
            nextDate.getDate() +
            "." +
            months[nextDate.getMonth()] +
            "." +
            nextDate.getFullYear();
    }
    if (currentDay == 4) {
        nextDate.setDate(currentDate + 6);
        element.innerHTML =
            nextDate.getDate() +
            "." +
            months[nextDate.getMonth()] +
            "." +
            nextDate.getFullYear();
    }
    if (currentDay == 5) {
        nextDate.setDate(currentDate + 5);
        element.innerHTML =
            nextDate.getDate() +
            "." +
            months[nextDate.getMonth()] +
            "." +
            nextDate.getFullYear();
    }
    if (currentDay == 6) {
        nextDate.setDate(currentDate + 4);
        element.innerHTML =
            nextDate.getDate() +
            "." +
            months[nextDate.getMonth()] +
            "." +
            nextDate.getFullYear();
    }
    if (currentDay == 0) {
        nextDate.setDate(currentDate + 3);
        element.innerHTML =
            nextDate.getDate() +
            "." +
            months[nextDate.getMonth()] +
            "." +
            nextDate.getFullYear();
    }
    if (currentDay == 1) {
        nextDate.setDate(currentDate + 2);
        element.innerHTML =
            nextDate.getDate() +
            "." +
            months[nextDate.getMonth()] +
            "." +
            nextDate.getFullYear();
    }
    if (currentDay == 2) {
        nextDate.setDate(currentDate + 1);
        element.innerHTML =
            nextDate.getDate() +
            "." +
            months[nextDate.getMonth()] +
            "." +
            nextDate.getFullYear();
    }
    if (currentHour < 10 && currentDay == 5) {
        nextDate.setDate(currentDate);
        element.innerHTML =
            nextDate.getDate() +
            "." +
            months[nextDate.getMonth()] +
            "." +
            nextDate.getFullYear();
    }
})();
