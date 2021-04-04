console.log("Hello world!");
apiKey = "1ebd3e88b4147deeadc030e6248c294d";
var city = "Atlanta";
var lat = 33.7;
var lon = -84.3;
var temp = $("#temp");
var humid = $("#humid");

function getWeatherApi() {
  var requestURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&exclude=minutely,hourly&units=imperial&appid=" +
    apiKey;

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < data.daily.length; i++) {
        console.log(data.daily[i]);
        var iconUrl = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`;
        $(`#daytemp${i}`).text("Day: " + data.daily[i].temp.day + " °F ");
        $(`#nighttemp${i}`).text("Night: " + data.daily[i].temp.night + " °F ");
        var img = $(`<img id="wicon${i}" alt="weather icon" width="75px">`);
        img.attr("src", iconUrl);
        $(`#icon${i}`).append(img);
        $(`#card${i}`).attr("condition", data.daily[i].weather[0].main);
        console.log(moment.unix(data.daily[i].dt).format("MM D YYYY"));
        $(`#date${i}`).text(
          moment.unix(data.daily[i].dt).format("MM" + "/" + "D" + "/" + "YYYY")
        );
      }
    });
}

getWeatherApi();
