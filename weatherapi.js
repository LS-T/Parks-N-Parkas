console.log("Hello world!");
apiKey = "1ebd3e88b4147deeadc030e6248c294d";
var city = "Atlanta";
var lat = 33.7;
var lon = -84.3;
var temp = $("#temp");
var humid = $("#humid");
var numba = 10;
var numbaString = numba.valueOf
console.log(numbaString);

function getWeatherApi () {
    var days = [0,1,2,3,4,5,6,7];
    var requestURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon="+ lon + "&exclude=minutely,hourly&units=imperial&appid=" + apiKey;

    fetch(requestURL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            temp.text(data.current.temp);
            humid.text(data.current.humidity);
            $("#dayTemp").text(data.daily[0].temp.day);
            $("#nightTemp").text(data.daily[0].temp.night);
            var iconCode = data.daily[0].weather[0].icon;
            console.log(iconCode);
            var iconUrl = "https://openweathermap.org/img/wn/"+ iconCode + "@2x.png"
            $('#wicon').attr('src',iconUrl);
         

        })
}
getWeatherApi();