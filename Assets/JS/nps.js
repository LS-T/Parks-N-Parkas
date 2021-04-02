var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);




var myAPIKey = "I6NhqnfsMGelsoDKumjcdPKekZCymyBFUdDEPrAC";

function getFullName(park) {
  var npsUrl =
    "https://developer.nps.gov/api/v1/parks?q=" + park + "&api_key=" + myAPIKey;

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
        console.log(dataArray[i].fullName);
        console.log(dataArray[i].parkCode);
        console.log(dataArray[i].states);
        console.log(dataArray[i].name);
        console.log(dataArray[i].addresses[0].postalCode);
        console.log(dataArray[i].addresses[0].city);
        console.log(dataArray[i].images[0].url);
        console.log("==================================");

        var liEl = $("<li>");
        liEl.text(dataArray[i].fullName);
        $("#search-results").append(liEl);
      }
    });
}

// var postalCode = addresses.data;
// for (var i = 0; i < addresses.length; i++)
//   $("#park-name").text(dataArray[i].name);
// $("#park-code").text(dataArray[i].parkCode);

$("#add-to-list").on("submit", function (event) {
  event.preventDefault();
  console.log("You submitted the form");
  var parkToSearch = $("#list-item").val();
  getFullName(parkToSearch);
});

