// Pull from local storage and set to variable for use in functions below 
var lat =JSON.parse(localStorage.getItem("lat"));
var long =JSON.parse(localStorage.getItem("long"));
var parkCode = JSON.parse(localStorage.getItem("parkCode"));
console.log(parkCode);
apiKey = "1ebd3e88b4147deeadc030e6248c294d";
apiKey1 = "tUYx242tVWHR8g0DjM5M1TcEs3h2FPccJc8wAfmJ";

function getWeatherApi() {
  var requestURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    long +
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

      var dayCondition = {
        condition: [
          data.daily[0].weather[0].main,
          data.daily[1].weather[0].main,
          data.daily[2].weather[0].main,
          data.daily[3].weather[0].main,
          data.daily[4].weather[0].main,
          data.daily[5].weather[0].main,
          data.daily[6].weather[0].main,
          data.daily[7].weather[0].main,
        ],
      };

      for (var i = 0; i < dayCondition.condition.length; i++) {
        if (
          dayCondition.condition[i] === "Clear" ||
          dayCondition.condition[i] === "Clouds"
        ) {
          console.log("yes");
          $(`.border${i}`).addClass("border-success");
        } else if (
          dayCondition.condition[i] === "Thunderstorm" ||
          dayCondition.condition[i] === "Rain"
        ) {
          console.log("else if");
          $(`.border${i}`).addClass("border-danger");
        } else if (
          dayCondition.condition[i] === "Drizzle" ||
          dayCondition.condition[i] === "Fog" ||
          dayCondition.condition[i] === "Snow"
        ) {
          console.log("warning");
          $(`.border${i}`).addClass("border-warning");
        }
      }
    });
}
function npsData() {
  var requestURL2 =
    "https://developer.nps.gov/api/v1/campgrounds?" +"parkCode=" + parkCode + "&limit=3&start=0&api_key=" + apiKey1;
  fetch(requestURL2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $("#parkCardHeader").text(data.data[0].name);
      $("#parkCardTitle").text(data.data[0].title);
      $("#parkCardInfo").text(data.data[0].description);



      var tourCard = `
      <section class="container" id="tourInfo">
      <div class="card">
          <h5 class="card-header text-center">${data.data[0].name}</h5>
          <div class="card-body text-center">
            <h5 class="card-title"></h5>
            <div>
                  <p class="card-text col-6 float-left mt-5">${data.data[0].description}</p>
                  <table class="table table-dark col-6 float-right">
                      <thead>
                        <tr>
                          <th scope="col">Availability</th>
                          <th scope="col">Firewood</th>
                          <th scope="col">Camp store</th>
                          <th scope="col">Ice</th>
                          <th scope="col">Fees</th>
                          <th scope="col">Sites</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Available</th>
                          <td>${data.data[0].amenities.firewoodForSale}</td>
                          <td>${data.data[0].amenities.campStore}</td>
                          <td>${data.data[0].amenities.iceAvailableForSale}</td>
                          <td>${data.data[0].fees[0].cost}</td>
                          <td>${data.data[0].campsites.totalSites}</td>

                        </tr>
                      </tbody>
                    </table>
                    
            </div>
            <a href="${data.data[0].directionsUrl}" class="btn btn-primary mb-2">Learn More</a>
            <div class="col-6 align-items-center">
              </div>
          
         </div>
        </div>
  </section>
      
      `;
      document.querySelector("#weatherCards").innerHTML += tourCard
    });
}

$(".card").on("click", function () {
  console.log($(this).attr("condition"));
  

  if (
    $(this).attr("condition") === "Clouds" ||
    $(this).attr("condition") === "Clear"
  ) {
    $("#weatherCards").empty();
    npsData();
    
    
   
  }
});
getWeatherApi();
