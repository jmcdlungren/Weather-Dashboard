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
            // var iconSrc = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
            var currentTemp = $("#current-temp");
            var wind = $("#wind");
            var humidity = $("#humidity");
            var baseDay = dayjs().format('D')
            var today = dayjs().format('M/' + baseDay + '/YYYY');
            

            // oneDay.removeClass("d-none");

            cityName.text(data.name + " (" + today + ") ")
            currentTemp.text(data.main.temp + "°F")
            wind.text(data.wind.speed + " mph")
            humidity.text(data.main.humidity + "%")

            var lat = (data.coord.lat);
            var lon = (data.coord.lon);
            var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?" + "lat=" + lat + "&lon=" + lon + "&appid=" + WeatherAPI + "&cnt=6" + "&units=" + "imperial";

            return fetch(fiveDay).then(res => {
                return res.json()
            })
                .then(data => {
                    console.log(data);

                    var fiveForcast = $(".five-forcast");

                    
                    // fiveForcast.removeClass("d-none");

                    var dayOne = $("#date-1");
                    var iconOne = $("#emoji-1");
                    var iconOneSrc = "http://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png"
                    var tempOne = $("#current-temp-21");
                    var windOne = $("#wind-21");
                    var humidityOne = $("#humidity-1");


                    var dayOneBase = baseDay++
                    dayOne.text(dayjs().format('M/' + dayOneBase + '/YYYY'));
                    iconOne.append('<img src=' + iconOneSrc + '>')
                    tempOne.text(data.list[1].main.temp + "°F")
                    windOne.text(data.list[1].wind.speed + " mph")
                    humidityOne.text(data.list[1].main.humidity + "%")

                    var dayTwo = $("#date-2");
                    var iconTwo = $("#emoji-2");
                    var iconTwoSrc = "http://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + ".png"
                    var tempTwo = $("#current-temp-2");
                    var windTwo = $("#wind-2");
                    var humidityTwo = $("#humidity-2");

                    var dayTwoBase = baseDay++
                    dayTwo.text(dayjs().format('M/' + dayTwoBase + '/YYYY'));
                    iconTwo.append('<img src=' + iconTwoSrc + '>')
                    tempTwo.text(data.list[2].main.temp + "°F")
                    windTwo.text(data.list[2].wind.speed + " mph")
                    humidityTwo.text(data.list[2].main.humidity + "%")

                    var dayThree = $("#date-3");
                    var iconThree = $("#emoji-3");
                    var iconThreeSrc = "http://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png"
                    var tempThree = $("#current-temp-3");
                    var windThree = $("#wind-3");
                    var humidityThree = $("#humidity-3");

                    var dayThreeBase = baseDay++
                    dayThree.text(dayjs().format('M/' + dayThreeBase + '/YYYY'));
                    iconThree.append('<img src=' + iconThreeSrc + '>')
                    tempThree.text(data.list[3].main.temp + "°F")
                    windThree.text(data.list[3].wind.speed + " mph")
                    humidityThree.text(data.list[3].main.humidity + "%")

                    var dayFour = $("#date-4");
                    var iconFour = $("#emoji-4");
                    var iconFourSrc = "http://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + ".png"
                    var tempFour = $("#current-temp-4");
                    var windFour = $("#wind-4");
                    var humidityFour = $("#humidity-4");

                    var dayFourBase = baseDay++
                    dayFour.text(dayjs().format('M/' + dayFourBase + '/YYYY'));
                    iconFour.append('<img src=' + iconFourSrc + '>')
                    tempFour.text(data.list[4].main.temp + "°F")
                    windFour.text(data.list[4].wind.speed + " mph")
                    humidityFour.text(data.list[4].main.humidity + "%")

                    var dayFive = $("#date-5");
                    var iconFive = $("#emoji-5");
                    var iconFiveSrc = "http://openweathermap.org/img/wn/" + data.list[5].weather[0].icon + ".png"
                    var tempFive = $("#current-temp-5");
                    var windFive = $("#wind-5");
                    var humidityFive = $("#humidity-5");

                    var dayFiveBase = baseDay++
                    dayFive.text(dayjs().format('M/' + dayFiveBase + '/YYYY'));
                    iconFive.append('<img src=' + iconFiveSrc + '>')
                    tempFive.text(data.list[5].main.temp + "°F")
                    windFive.text(data.list[5].wind.speed + " mph")
                    humidityFive.text(data.list[5].main.humidity + "%")

                    console.log(baseDay++)



                })

        })
        .catch(error => console.log('ERROR'))
    
        


  
    

    var memory = $(".memory");
    var recentSearch = document.createElement('button');
    recentSearch.classList.add('ps-5', 'pe-5', 'pt-2', 'pb-2', 'm-2')
    memory.append(recentSearch);

    localStorage.setItem("recent", city);
    var recent = localStorage.getItem("recent")
    recentSearch.textContent = recent;



});


