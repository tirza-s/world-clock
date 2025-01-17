function updateClocks() {

    // Brussels Date & timezone
    let brusselsDateElement = document.querySelector("#brussels-data .date");
    if (brusselsDateElement) {
        brusselsDateElement.innerHTML = moment().format("dddd, MMM Do YYYY");

        let brusselsTimeElement = document.querySelector("#brussels-data .time");

        // Add Brussels timezone
        let brusselsTimeZone = moment().tz("Europe/Brussels");

        brusselsTimeElement.innerHTML = brusselsTimeZone.format("h:mm:ss [<small>]A[</small>]");
    }
    //Jakarta Date & timezone
    let jakartaDateElement = document.querySelector("#jakarta-data .date");
    if (jakartaDateElement) {
        jakartaDateElement.innerHTML = moment().format("dddd, MMM Do YYYY");

        let jakartaTimeElement = document.querySelector("#jakarta-data .time");

        // Add Jakarta timezone
        let jakartaTimeZone = moment().tz("Asia/Jakarta");

        jakartaTimeElement.innerHTML = jakartaTimeZone.format("h:mm:ss [<small>]A[</small>]");
    }
};

function updateCity(event) {
    let cityTimeZone = event.target.value;

    // Exit if no city is selected
    if (!cityTimeZone) {
        return;
    }

    const cityNameMap = {
        "America/Argentina/Buenos_Aires": "Buenos Aires, Argentina 🇦🇷",
        "America/New_York": "New York 🇺🇸",
        "Australia/Melbourne": "Melbourne, Australia 🇦🇺",
        "Europe/Zurich": "Zurich, Switzerland 🇨🇭",
        "Asia/Tokyo": "Tokyo, Japan 🇯🇵",
    }

    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityNameMap[cityTimeZone] || cityTimeZone.replace(/_/g, " ").split("/")[1];

    let cityElement = document.querySelector("#cities");

    cityElement.innerHTML = `
    
    <div class="city">
                    <div class="city-details">
                        <h2>${cityName}</h2>
                        <div class="date">${cityTime.format("dddd, MMM Do YYYY")}</div>
                    </div>
                    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
                    </div >
                </div >
        `;
}

updateClocks();
setInterval(updateClocks, 1000);

let selectCitiesElement = document.querySelector("#cities-list");
selectCitiesElement.addEventListener("change", updateCity)
