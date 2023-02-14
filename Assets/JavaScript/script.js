
var searchHistory = JSON.parse(localStorage.getItem("recent")) || []



function getWeather(cityInput) {
    var city = $("input").val() || cityInput
    saveCity()
    var oneDay = $(".one-day");




    var WeatherAPI = "1453cb68cafdfe7161851616395bc88b";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + WeatherAPI + "&units=" + "imperial";
    fetch(queryURL).then(res => {
        return res.json()
    })
        .then(data => {
            console.log(data)
            var cityName = $("#city-name");
            var icon = $("#emoji");
            var iconSrc = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
            var currentTemp = $("#current-temp");
            var wind = $("#wind");
            var humidity = $("#humidity");
            var baseDay = dayjs().format('D')
            var startDay = Number(baseDay);
            var today = dayjs().format('M/' + startDay + '/YYYY');


            oneDay.removeClass("d-none");

            cityName.text(data.name + " (" + today + ") ")
            icon.text("")
            icon.append('<img src=' + iconSrc + '>')
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

                    var fiveForecast = $(".five-forecast");


                    fiveForecast.removeClass("d-none");

                    var dayOne = $("#date-1");
                    var iconOne = $("#emoji-1");
                    var iconOneSrc = "http://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + ".png"
                    var tempOne = $("#current-temp-1");
                    var windOne = $("#wind-1");
                    var humidityOne = $("#humidity-1");

                    var dayOneBase = startDay + 1
                    dayOne.text(dayjs().format('M/' + dayOneBase + '/YYYY'));
                    iconOne.text("")
                    iconOne.append('<img src=' + iconOneSrc + '>')
                    tempOne.text(data.list[7].main.temp + "°F")
                    windOne.text(data.list[7].wind.speed + " mph")
                    humidityOne.text(data.list[7].main.humidity + "%")

                    var dayTwo = $("#date-2");
                    var iconTwo = $("#emoji-2");
                    var iconTwoSrc = "http://openweathermap.org/img/wn/" + data.list[15].weather[0].icon + ".png"
                    var tempTwo = $("#current-temp-2");
                    var windTwo = $("#wind-2");
                    var humidityTwo = $("#humidity-2");

                    var dayTwoBase = dayOneBase + 1
                    dayTwo.text(dayjs().format('M/' + dayTwoBase + '/YYYY'));
                    iconTwo.text("")
                    iconTwo.append('<img src=' + iconTwoSrc + '>')
                    tempTwo.text(data.list[15].main.temp + "°F")
                    windTwo.text(data.list[15].wind.speed + " mph")
                    humidityTwo.text(data.list[15].main.humidity + "%")

                    var dayThree = $("#date-3");
                    var iconThree = $("#emoji-3");
                    var iconThreeSrc = "http://openweathermap.org/img/wn/" + data.list[23].weather[0].icon + ".png"
                    var tempThree = $("#current-temp-3");
                    var windThree = $("#wind-3");
                    var humidityThree = $("#humidity-3");

                    var dayThreeBase = dayTwoBase + 1
                    dayThree.text(dayjs().format('M/' + dayThreeBase + '/YYYY'));
                    iconThree.text("")
                    iconThree.append('<img src=' + iconThreeSrc + '>')
                    tempThree.text(data.list[23].main.temp + "°F")
                    windThree.text(data.list[23].wind.speed + " mph")
                    humidityThree.text(data.list[23].main.humidity + "%")

                    var dayFour = $("#date-4");
                    var iconFour = $("#emoji-4");
                    var iconFourSrc = "http://openweathermap.org/img/wn/" + data.list[31].weather[0].icon + ".png"
                    var tempFour = $("#current-temp-4");
                    var windFour = $("#wind-4");
                    var humidityFour = $("#humidity-4");

                    var dayFourBase = dayThreeBase + 1
                    dayFour.text(dayjs().format('M/' + dayFourBase + '/YYYY'));
                    iconFour.text("")
                    iconFour.append('<img src=' + iconFourSrc + '>')
                    tempFour.text(data.list[31].main.temp + "°F")
                    windFour.text(data.list[31].wind.speed + " mph")
                    humidityFour.text(data.list[31].main.humidity + "%")

                    var dayFive = $("#date-5");
                    var iconFive = $("#emoji-5");
                    var iconFiveSrc = "http://openweathermap.org/img/wn/" + data.list[39].weather[0].icon + ".png"
                    var tempFive = $("#current-temp-5");
                    var windFive = $("#wind-5");
                    var humidityFive = $("#humidity-5");

                    var dayFiveBase = dayFourBase + 1
                    dayFive.text(dayjs().format('M/' + dayFiveBase + '/YYYY'));
                    iconFive.text("")
                    iconFive.append('<img src=' + iconFiveSrc + '>')
                    tempFive.text(data.list[39].main.temp + "°F")
                    windFive.text(data.list[39].wind.speed + " mph")
                    humidityFive.text(data.list[39].main.humidity + "%")


                    renderHistory()
                    


                })

        })
        .catch(error => console.log('ERROR'))
}


$(".search-btn").on("click", function() {
    getWeather()
    $("input").val("")
})



function saveCity() {
    // var searchHistory = JSON.parse(localStorage.getItem("recent")) || []
    console.log(searchHistory)
    searchHistory.push($("input").val())
    localStorage.setItem("recent", JSON.stringify(searchHistory))
    // renderHistory()
}

function historySearch() {
    console.log(this.dataset.city)
    
    getWeather(this.dataset.city)

}

function renderHistory() {

    var memory = $(".memory");
    var modifiedHistory = [...new Set(searchHistory)]
    // var history = JSON.parse(localStorage.getItem("recent")) || []
    memory.text("")
    for (i = 0; i < searchHistory.length; i++) {
        var recentSearch = document.createElement('button');
        
        recentSearch.classList.add('btn', 'border', 'border-2', 'ps-6', 'pe-6', 'pt-2', 'pb-2', 'mt-1', 'recent-search')
        recentSearch.setAttribute('data-city', modifiedHistory[i])
        recentSearch.addEventListener("click", historySearch)

        
        
        
        if(recentSearch.textContent = modifiedHistory[i]) {
           memory.append(recentSearch);
        }
       

        
    }
}

renderHistory();