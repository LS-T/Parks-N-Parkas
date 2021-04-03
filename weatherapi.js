console.log("Hello world!");
apiKey = "1ebd3e88b4147deeadc030e6248c294d";
var city = "Atlanta";
var lat = 33.7;
var lon = -84.3;
var temp = $("#temp");
var humid = $("#humid");

function getWeatherApi() {
  var days = [0, 1, 2, 3, 4, 5, 6, 7];
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

        $(`#daytemp${i}`).text(data.daily[i].temp.day) + " F° ";
        $(`#nighttemp${i}`).text(data.daily[i].temp.night) + " °F ";
        var img = $(`<img id="wicon${i}" alt="weather icon" width="75px">`);
        img.attr("src", iconUrl);
        $(`#icon${i}`).append(img);
        $(`#card${i}`).attr("condition", data.daily[i].weather[0].main);
        console.log(moment.unix(data.daily[i].dt).format("MM D YYYY"));
        $(`#date${i}`).text(moment.unix(data.daily[i].dt).format("MM D YYYY"));
      }

      var day1Condition = data.daily[1].weather[0].main;
      var day2Condition = data.daily[2].weather[0].main;
      var day3Condition = data.daily[3].weather[0].main;
      var day4Condition = data.daily[4].weather[0].main;
      var day5Condition = data.daily[5].weather[0].main;
      var day6Condition = data.daily[6].weather[0].main;
      var day7Condition = data.daily[7].weather[0].main;

      console.log(day1Condition);
      if (day1Condition === "Clear" || day1Condition === "Clouds") {
        $(".border1").addClass("border-success");
        console.log("success");
      } else if (day1Condition === "Thunderstorm" || day1Condition === "Rain") {
        console.log("red");
        $(".border1").addClass("border-danger");
      } else if (
        day1Condition === "Drizzle" ||
        day1Condition === "Fog" ||
        day1Condition === "Snow"
      ) {
        console.log("yellow");
        $(".border1").addClass("border-warning");
      }
      if (day2Condition === "Clear" || day2Condition === "Clouds") {
        $(".border2").addClass("border-success");
        console.log("success");
      } else if (day2Condition === "Thunderstorm" || day2Condition === "Rain") {
        console.log("red");
        $(".border2").addClass("border-danger");
      } else if (
        day2Condition === "Drizzle" ||
        day2Condition === "Fog" ||
        day2Condition === "Snow"
      ) {
        console.log("yellow");
        $(".border2").addClass("border-warning");
      }
      if (day3Condition === "Clear" || day3Condition === "Clouds") {
        $(".border3").addClass("border-success");
        console.log("success");
      } else if (day3Condition === "Thunderstorm" || day3Condition === "Rain") {
        console.log("red");
        $(".border3").addClass("border-danger");
      } else if (
        day3Condition === "Drizzle" ||
        day3Condition === "Fog" ||
        day3Condition === "Snow"
      ) {
        console.log("yellow");
        $(".border3").addClass("border-warning");
      }
      if (day4Condition === "Clear" || day4Condition === "Clouds") {
        $(".border4").addClass("border-success");
        console.log("success");
      } else if (day4Condition === "Thunderstorm" || day4Condition === "Rain") {
        console.log("red");
        $(".border4").addClass("border-danger");
      } else if (
        day1Condition === "Drizzle" ||
        day4Condition === "Fog" ||
        day4Condition === "Snow"
      ) {
        console.log("yellow");
        $(".border4").addClass("border-warning");
      }
      if (day5Condition === "Clear" || day5Condition === "Clouds") {
        $(".border5").addClass("border-success");
        console.log("success");
      } else if (day5Condition === "Thunderstorm" || day5Condition === "Rain") {
        console.log("red");
        $(".border5").addClass("border-danger");
      } else if (
        day5Condition === "Drizzle" ||
        day5Condition === "Fog" ||
        day5Condition === "Snow"
      ) {
        console.log("yellow");
        $(".border5").addClass("border-warning");
      }
      if (day6Condition === "Clear" || day6Condition === "Clouds") {
        $(".border6").addClass("border-success");
        console.log("success");
      } else if (day6Condition === "Thunderstorm" || day6Condition === "Rain") {
        console.log("red");
        $(".border6").addClass("border-danger");
      } else if (
        day6Condition === "Drizzle" ||
        day6Condition === "Fog" ||
        day6Condition === "Snow"
      ) {
        console.log("yellow");
        $(".border6").addClass("border-warning");
      }
      if (day7Condition === "Clear" || day7Condition === "Clouds") {
        $(".border7").addClass("border-success");
        console.log("success");
      } else if (day7Condition === "Thunderstorm" || day7Condition === "Rain") {
        console.log("red");
        $(".border7").addClass("border-danger");
      } else if (
        day7Condition === "Drizzle" ||
        day7Condition === "Fog" ||
        day7Condition === "Snow"
      ) {
        console.log("yellow");
        $(".border7").addClass("border-warning");
      }
    });
}

$(".card").on("click", function () {
  console.log($(this).attr("condition"));
});

getWeatherApi();
