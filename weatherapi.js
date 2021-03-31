console.log("Hello world!");
apiKey = "1ebd3e88b4147deeadc030e6248c294d";
var requestURL = "https://pro.openweathermap.org/data/2.5/forecast/climate?q=Keystone&appid=" + apiKey;


function getWeatherApi () {
    var requestURL = "https://pro.openweathermap.org/data/2.5/forecast/climate?q=Keystone&appid=" + apiKey;

    fetch(requestURL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })
}
getWeatherApi();