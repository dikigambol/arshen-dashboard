$.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function (location) {
        let loc = location.city ?? "Malang"
        weather(loc);
    }
});

function weather(city) {
    let url = `https://api.weatherapi.com/v1/current.json?key=9ccd114b88bf4fe584d22306220802&q=${city}&aqi=no`
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            let location = document.getElementById("weather-location")
            let time = document.getElementById("weather-time")
            let temperature = document.getElementById("weather-temp")
            let text = document.getElementById("weather-text")
            let kmph = document.getElementById("weather-kmph")
            let cloud = document.getElementById("weather-cloud")
            let sun = document.getElementById("weather-sun")

            var myDate = new Date(result.location.localtime);
            var minutes = myDate.getMinutes();
            var hours = myDate.getHours();

            location.innerHTML = result.location.name ?? "Malang"
            time.innerHTML = hours + ":" + minutes
            temperature.innerHTML = result.current.temp_c + "° C"
            text.innerHTML = result.current.condition.text
            kmph.innerHTML = result.current.wind_kph + " km/h"
            cloud.innerHTML = result.current.cloud
            sun.innerHTML = result.current.uv + "h"
            $("#weather-icon").attr("src", "https:" + result.current.condition.icon);
        })
}