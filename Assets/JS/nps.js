var myAPIKey = "I6NhqnfsMGelsoDKumjcdPKekZCymyBFUdDEPrAC";

var npsUrl="https://developer.nps.gov/api/v1/parks?parkCode?acad&api_key=" + myAPIKey;

fetch(npsUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
// console.log(data.data[0].addresses[0].postalCode);
// console.log(data.data[0].addresses[0].city);
// console.log(data.data[0].fullName);
// console.log(data.data[0].name);
// console.log(data.data[0].states);
// console.log(data.data[0].parkCode);})

var parkInfo = (data.data);
for(var i = 0; i < parkInfo.length; i++) {
   console.log(parkInfo[i]);}})// window.addEventListener('load', function () {
//     // Grab the existing history from local storage IF it exists
//     var existingHistory;
//     if (!JSON.parse(localStorage.getItem('history'))) {
//       existingHistory = [];
//     } else {
//       existingHistory = JSON.parse(localStorage.getItem('history'));
//     }
  
//     var historyItems = [];

// var myAPIKey = "I6NhqnfsMGelsoDKumjcdPKekZCymyBFUdDEPrAC";

// var npsUrl="https://developer.nps.gov/api/v1/parks?parkCode?per_page=10=acad&api_key=" + myAPIKey;

// var parkContainer = document.getElementById('park-result');
// var fetchButton = document.getElementById('fetch-button');
// function getAPI(){

// fetch(npsUrl)
// .then(function (response) {
//   return response.json();
// })
// .then(function (data) {
//   console.log('NPS Park Results \n----------');
//       console.log(data);
//       for (var i = 0; i < data.length; i++) {
//         var parkCode = document.createElement('h3');
//         var postalCode = document.createElement('h4');
//         var city = document.createElement('p');
//         var stateCode =  document.createElement('p');
//         parkCode.textContent = data[i].parkCode;
//         postalCode.textContent = data[i].postalCode;
//         city.textContent = data[i].city;
//         stateCode.textContent = data[i].stateCode
//         issueContainer.append(userName);
//         issueContainer.append(issueTitle);
//         issueContainer.append(issueBody);
//         issueContainer.append(issueBody);
//       }
//     });
// }
// fetchButton.addEventListener('click', getAPI);

