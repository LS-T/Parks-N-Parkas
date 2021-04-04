
// // get form, searched park and list
// var addToList = document.querySelector('#add-to-list');
// var listItem = document.querySelector('#list-item');
// var parkList = document.querySelector('#savedPark');

// let savedParks = [];

// addToList.addEventListener('submit', function (event) {

//     // don't submit form
//     event.preventDefault();

//     // ignore if list item is empty
//     if (listItem.value.length < 1)
//     return;

//     savedParks.push(listItem.value); // add park to list of saved parks

//     buildParkList(); 

//     // clear input
//     listItem.value = '';

//     // save list to local storage
//     localStorage.setItem('savedParks', savedParks); // save the parks array to local storage

// }, false);

// // check for saved list items

// function getParksFromStorage(){
//     var searched = localStorage.getItem('savedParks');

//     if (searched) {
//         buildParksList();
//     }
// }

// function buildParkList(){

//     parkList.innerHTML = ''; // clear list of parks on the page

//     if(savedParks != undefined) // check if there are parks saved in the array
//     {
//         let parks = savedParks;
//         for(let x = 0; x < parks.length; x++){ // for each park in array create a list item and add to list on page
//             let item = document.createElement('ul');
//             item.innerHTML = parks[x];
//             parkList.appendChild(item);
//         }
//     }   
// }





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
function getFullName(latLong) {
  var npsUrl =
    "https://developer.nps.gov/api/v1/parks?q=" + latLong + "&api_key=" + myAPIKey;
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
        var liEl = $("<ul>");
        liEl.text(dataArray[i].name);
        $("#search-results").append(liEl);
   
      }
    });
}

$("#bfCaptchaEntry").on("click", function(){ myFunction(); });
$("#add-to-list").on("submit", function (event) {
  event.preventDefault();
  console.log("You submitted the form");
  var parkToSearch = $("#list-item").val();
  getFullName(parkToSearch);
});