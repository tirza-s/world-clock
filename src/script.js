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

// Stores the timezone of the currently selected city. this lets the app know which city to display and update.
let selectedCityTimeZone = null;

function renderSelectedCity() {

    if (!selectedCityTimeZone) return;

    const cityNameMap = {
        "America/Argentina/Buenos_Aires": "Buenos Aires, Argentina 🇦🇷",
        "America/New_York": "New York 🇺🇸",
        "Australia/Melbourne": "Melbourne, Australia 🇦🇺",
        "Europe/Zurich": "Zurich, Switzerland 🇨🇭",
        "Asia/Tokyo": "Tokyo, Japan 🇯🇵",
    };

    let cityTime = moment().tz(selectedCityTimeZone);
    let cityName = cityNameMap[selectedCityTimeZone] ||
        selectedCityTimeZone.replace(/_/g, " ").split("/")[1];

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

function updateCity(event) {
    // Get the selected city's value from the dropdown
    let cityTimeZone = event.target.value;

    // guess the user's timezone if "current city" is selected
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }

    // Store the selected city timezone in the global variable
    selectedCityTimeZone = cityTimeZone;

    // Render the selected city time immediately
    renderSelectedCity();
}

//Update clocks for Brussels and Jakarta every second
updateClocks();
setInterval(updateClocks, 1000);

// Update the selected city timezone every second
setInterval(() => {
    if (selectedCityTimeZone) {
        renderSelectedCity();
    }
}, 1000);

// Add event listener for dropdown change
let selectCitiesElement = document.querySelector("#cities-list");
selectCitiesElement.addEventListener("change", updateCity)
