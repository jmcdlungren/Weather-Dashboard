// var WeatherAPI = "1453cb68cafdfe7161851616395bc88b";

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + WeatherAPI;

var city = $("input").val();


$(".btn").on("click", function (event) {
    event.preventDefault();
    var city = $("input").val();
    var oneDay = $(".one-day");




    var WeatherAPI = "1453cb68cafdfe7161851616395bc88b";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + WeatherAPI + "&units=" + "imperial";
    fetch(queryURL).then(res => {
        return res.json()
    })
        .then(data => {
            console.log(data)
            var cityName = $("#city-name");
            var currentTemp = $("#current-temp");
            var wind = $("#wind");
            var humidity = $("#humidity");
            var today = dayjs().format('M/D/YYYY');

            oneDay.removeClass("d-none");

            cityName.text(data.name + " (" + today + ")") 
            currentTemp.text(data.main.temp + "°F")
            wind.text(data.wind.speed + " mph")
            humidity.text(data.main.humidity + "%")

            var lat = (data.coord.lat);
            var lon = (data.coord.lon);
            var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?" + "lat=" + lat + "&lon=" + lon + "&appid=" + WeatherAPI + "&units=" + "imperial";

            return fetch(fiveDay).then(res => {
                return res.json()
            })
                .then(data => {
                    console.log(data);
                })

        })
        .catch(error => console.log('ERROR'))
    
        


  
    

    var memory = $(".memory");
    var recentSearch = document.createElement('button');
    memory.append(recentSearch);

    localStorage.setItem("recent", city);
    var recent = localStorage.getItem("recent")
    recentSearch.textContent = recent;



});


