// var WeatherAPI = "1453cb68cafdfe7161851616395bc88b";

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + WeatherAPI;


// fetch(queryURL)

$(".btn").on("click", function (event) {
    event.preventDefault();
    var city = $("input").val();
    var oneDay = $(".one-day");
    var memory = $(".memory");

    

    var WeatherAPI = "1453cb68cafdfe7161851616395bc88b";
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + WeatherAPI + "&units=" + "imperial";
    fetch(queryURL).then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            
            var cityName = $("#city-name");
            var currentTemp = $("#current-temp");
            var wind = $("#wind");
            var humidity = $("#humidity");
            
            $(oneDay).removeClass("d-none");

            cityName.text(data.name)
            currentTemp.text(data.main.temp + "°F")
            wind.text(data.wind.speed + " mph")
            humidity.text(data.main.humidity + "%")
        })
        .catch(error => console.log('ERROR'))

    localStorage.setItem("recent", city);
    var recent = localStorage.getItem("recent")
    memory.textContent = recent;



});




// $(".btn").on("click", function getCity() {
//     var description = $(this).siblings(".description").val();
//     var hour = $(this).parent().attr("id");
//     console.log(description);
//     localStorage.setItem(hour, description);
//   });

//   // Sets function for whenever the page is refreshed. The local storage will then be retrieved and applied to the text box it was saved in above.
//   for (i = 9; i <= 17; i++) {
//     var data = localStorage.getItem("hour-" + i)
//     $("#hour-" + i).children(".description").val(data)
//   };