var myAPIKey = "I6NhqnfsMGelsoDKumjcdPKekZCymyBFUdDEPrAC";

function getFullName() {
  var npsUrl="https://developer.nps.gov/api/v1/parks?fullName?parkCode?states?=acad&api_key=" + myAPIKey;
  
  console.log(npsUrl);
  fetch(npsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (results) {
  console.log(results);
  
  var dataArray = results.data;
  for (var i = 0; i < dataArray.length; i++) {
    console.log(dataArray[i].fullName);
    console.log(dataArray[i].parkCode);
    console.log(dataArray[i].states);
    console.log(dataArray[i].name);
    console.log(dataArray[i].addresses[0].postalCode);
    console.log(dataArray[i].addresses[0].city);
    console.log(dataArray[i].images[0].url);

  }
    })
  }
  getFullName();
 
