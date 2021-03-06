var searchFormEl = document.querySelector("#search-form");
function handleSearchFormSubmit(event) {
  event.preventDefault();
  var searchInputVal = document.querySelector("#search-input").value;
  var formatInputVal = document.querySelector("#format-input").value;
  if (!searchInputVal) {
    console.error("You need a search input value!");
    return;
  }
  var queryString =
    "./search-results.html?q=" + searchInputVal + "&format=" + formatInputVal;
  location.assign(queryString);
}
searchFormEl.addEventListener("submit", handleSearchFormSubmit);
var myAPIKey = "I6NhqnfsMGelsoDKumjcdPKekZCymyBFUdDEPrAC";
function getFullName(latLong) {
  var npsUrl =
    "https://developer.nps.gov/api/v1/parks?q=" +
    latLong +
    "&api_key=" +
    myAPIKey;
  console.log(npsUrl);
  fetch(npsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (results) {
      console.log(results);
      $("#search-results").empty();
      var dataArray = results.data;
      for (var i = 0; i < dataArray.length; i++) {
        var liEl = $(
          '<div><li class="listItem"><button id="select"></button></li></div>'
        );
        $("#savedPark").append(liEl);
        liEl.addClass("testing");
        liEl.text(dataArray[i].name);
      }
    });
}
g