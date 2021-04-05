
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
      let liEl = $("<ul>");
      liEl.css("list-style", "none");
      for (var i = 0; i < dataArray.length; i++) {
        var listDiv = $("<div class='card mb-2' id='cardList'></div>");
        liEl.append(listDiv);
        var liButton = `<li id="parkId${i}"><a class="name"  href="./landingpage3.html">${dataArray[i].fullName}</a></li>`;
        listDiv.append(liButton);
        // Set attributes to each parkId generated for use in local storage
        $(`#parkId${i}`).attr("condition", dataArray[i].parkCode);
        $(`#parkId${i}`).attr("lat", dataArray[i].latitude);
        $(`#parkId${i}`).attr("long", dataArray[i].longitude);
        $("#search-results").append(liEl);
        
      };
      console.log(dataArray[0].parkCode);

      var value = $(".name2").text();
      console.log(value);


      // On click of search options store parkCode, lat, long
      $(".name").on("click", function (){
        console.log("yes");
        console.log($(this).parent().attr("condition"));
        console.log($(this).text());
        localStorage.setItem("parkCode",JSON.stringify($(this).parent().attr("condition")));
        localStorage.setItem("lat",JSON.stringify($(this).parent().attr("lat")));
        localStorage.setItem("long",JSON.stringify($(this).parent().attr("long")));
        

      })
        

       
      
    });
}



$("#parkId").on("click",function(){
  console.log("yes")
})


$("#bfCaptchaEntry").on("click", function(){ myFunction(); });
$("#add-to-list").on("submit", function (event) {
  event.preventDefault();
  console.log("You submitted the form");
  var parkToSearch = $("#list-item").val();
  console.log(parkToSearch);
  getFullName(parkToSearch);
});

