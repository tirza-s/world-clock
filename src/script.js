function updateClocks() {

    // Brussels Date & timezone
    let brusselsDateElement = document.querySelector("#brussels-data .date");
    brusselsDateElement.innerHTML = moment().format("dddd, MMM Do YYYY");

    let brusselsTimeElement = document.querySelector("#brussels-data .time");

    // Add Brussels timezone
    let brusselsTimeZone = moment().tz("Europe/Brussels");

    brusselsTimeElement.innerHTML = brusselsTimeZone.format("h:mm:ss [<small>]A[</small>]");

    //Jakarta Date & timezone
    let jakartaDateElement = document.querySelector("#jakarta-data .date");
    jakartaDateElement.innerHTML = moment().format("dddd, MMM Do YYYY");

    let jakartaTimeElement = document.querySelector("#jakarta-data .time");

    // Add Jakarta timezone
    let jakartaTimeZone = moment().tz("Asia/Jakarta");

    jakartaTimeElement.innerHTML = jakartaTimeZone.format("h:mm:ss [<small>]A[</small>]");

};
updateClocks();
setInterval(updateClocks, 1000);





