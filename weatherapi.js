console.log("Hello world!");
apiKey = "1ebd3e88b4147deeadc030e6248c294d";
var city = "Atlanta";
var lat = 33.7;
var lon = -84.3;
var temp = $("#temp");
var humid = $("#humid");

var format = moment().format('MM D YYYY');
console.log(format);


function getWeatherApi () {
    var days = [0,1,2,3,4,5,6,7];
    var requestURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon="+ lon + "&exclude=minutely,hourly&units=imperial&appid=" + apiKey;

    fetch(requestURL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            temp.text(data.current.temp);
            humid.text(data.current.humidity);
            $("#dayTemp").text(data.daily[0].temp.day);
            $("#nightTemp").text(data.daily[0].temp.night);
            
            var iconCode1 = data.daily[1].weather[0].icon;
            var iconCode2 = data.daily[2].weather[0].icon;
            var iconCode3 = data.daily[3].weather[0].icon;
            var iconCode4 = data.daily[4].weather[0].icon;
            var iconCode5 = data.daily[5].weather[0].icon;
            var iconCode6 = data.daily[6].weather[0].icon;
            var iconCode7 = data.daily[7].weather[0].icon;

    
            var iconUrl1 = "http://openweathermap.org/img/wn/"+ iconCode1 + "@2x.png";
            var iconUrl2 = "http://openweathermap.org/img/wn/"+ iconCode2 + "@2x.png";
            var iconUrl3 = "http://openweathermap.org/img/wn/"+ iconCode3 + "@2x.png";
            var iconUrl4 = "http://openweathermap.org/img/wn/"+ iconCode4 + "@2x.png";
            var iconUrl5 = "http://openweathermap.org/img/wn/"+ iconCode5 + "@2x.png";
            var iconUrl6 = "http://openweathermap.org/img/wn/"+ iconCode6 + "@2x.png";
            var iconUrl7 = "http://openweathermap.org/img/wn/"+ iconCode7 + "@2x.png";

            
            $("#daytemp1").text(data.daily[1].temp.day) + " F° ";
            $("#nighttemp1").text(data.daily[1].temp.night) + " °F ";
            var img = $('<img id="wicon" alt="weather icon" width="75px">').attr('src',iconUrl1);
            $('#dayTemp1').append(img);
            $("#icon1").append(img);            
            
            $("#daytemp2").text(data.daily[2].temp.day) + " F° ";
            $("#nighttemp2").text(data.daily[2].temp.night) + " °F ";
            var img2 = $('<img id="wicon1" alt="weather icon" width="75px">')
            img2.attr("src", iconUrl2);
            $("#icon2").append(img2);
            
            $("#daytemp3").text(data.daily[3].temp.day) + " F° ";
            $("#nighttemp3").text(data.daily[3].temp.night) + " °F ";
            var img3 = $('<img id="wicon2" alt="weather icon" width="75px">')
            img3.attr("src", iconUrl3);
            $("#icon3").append(img3);
            
            $("#daytemp4").text(data.daily[4].temp.day) + " F° ";
            $("#nighttemp4").text(data.daily[4].temp.night) + " °F ";
            var img4 = $('<img id="wicon2" alt="weather icon" width="75px">')
            img4.attr("src", iconUrl4);
            $("#icon4").append(img4);
            
            $("#daytemp5").text(data.daily[5].temp.day) + " F° ";
            $("#nighttemp5").text(data.daily[5].temp.night) + " °F ";
            var img5 = $('<img id="wicon2" alt="weather icon" width="75px">')
            img5.attr("src", iconUrl5);
            $("#icon5").append(img5);

            $("#daytemp6").text(data.daily[6].temp.day) + " F° ";
            $("#nighttemp6").text(data.daily[6].temp.night) + " °F ";
            var img6 = $('<img id="wicon2" alt="weather icon" width="75px">')
            img6.attr("src", iconUrl6);
            $("#icon6").append(img6);

            
            $("#daytemp7").text(data.daily[7].temp.day) + " F° ";
            $("#nighttemp7").text(data.daily[7].temp.night) + " °F ";
            var img7 = $('<img id="wicon2" alt="weather icon" width="75px">')
            img7.attr("src", iconUrl7);
            $("#icon7").append(img7);

            
            var day1Condition =data.daily[1].weather[0].main;
            var day2Condition =data.daily[2].weather[0].main;
            var day3Condition =data.daily[3].weather[0].main;
            var day4Condition =data.daily[4].weather[0].main;
            var day5Condition =data.daily[5].weather[0].main;
            var day6Condition =data.daily[6].weather[0].main;
            var day7Condition =data.daily[7].weather[0].main;

        
            console.log(day1Condition);
            if (day1Condition === "Clear" || day1Condition === "Clouds"){
                
                $(".border1").addClass("border-success");
                console.log("success")}
              else if (day1Condition === "Thunderstorm" || day1Condition === "Rain") {
                console.log("red");
                $(".border1").addClass("border-danger")}
               else if (day1Condition === "Drizzle" || day1Condition === "Fog" || day1Condition ==="Snow"){
                console.log("yellow");
                $(".border1").addClass("border-warning");

            }
            if (day2Condition === "Clear" || day2Condition === "Clouds"){
                
                $(".border2").addClass("border-success");
                console.log("success")}
              else if (day2Condition === "Thunderstorm" || day2Condition === "Rain") {
                console.log("red");
                $(".border2").addClass("border-danger")}
               else if (day2Condition === "Drizzle" || day2Condition === "Fog" || day2Condition ==="Snow"){
                console.log("yellow");
                $(".border2").addClass("border-warning");

            }
            if (day3Condition === "Clear" || day3Condition === "Clouds"){
                
                $(".border3").addClass("border-success");
                console.log("success")}
              else if (day3Condition === "Thunderstorm" || day3Condition === "Rain") {
                console.log("red");
                $(".border3").addClass("border-danger")}
               else if (day3Condition === "Drizzle" || day3Condition === "Fog" || day3Condition ==="Snow"){
                console.log("yellow");
                $(".border3").addClass("border-warning");

            }
            if (day4Condition === "Clear" || day4Condition === "Clouds"){
                
                $(".border4").addClass("border-success");
                console.log("success")}
              else if (day4Condition === "Thunderstorm" || day4Condition === "Rain") {
                console.log("red");
                $(".border4").addClass("border-danger")}
               else if (day1Condition === "Drizzle" || day4Condition === "Fog" || day4Condition ==="Snow"){
                console.log("yellow");
                $(".border4").addClass("border-warning");

            }
            if (day5Condition === "Clear" || day5Condition === "Clouds"){
                
                $(".border5").addClass("border-success");
                console.log("success")}
              else if (day5Condition === "Thunderstorm" || day5Condition === "Rain") {
                console.log("red");
                $(".border5").addClass("border-danger")}
               else if (day5Condition === "Drizzle" || day5Condition === "Fog" || day5Condition ==="Snow"){
                console.log("yellow");
                $(".border5").addClass("border-warning");

            }
            if (day6Condition === "Clear" || day6Condition === "Clouds"){
                
                $(".border6").addClass("border-success");
                console.log("success")}
              else if (day6Condition === "Thunderstorm" || day6Condition === "Rain") {
                console.log("red");
                $(".border6").addClass("border-danger")}
               else if (day6Condition === "Drizzle" || day6Condition === "Fog" || day6Condition ==="Snow"){
                console.log("yellow");
                $(".border6").addClass("border-warning");

            }
            if (day7Condition === "Clear" || day7Condition === "Clouds"){
                
                $(".border7").addClass("border-success");
                console.log("success")}
              else if (day7Condition === "Thunderstorm" || day7Condition === "Rain") {
                console.log("red");
                $(".border7").addClass("border-danger")}
               else if (day7Condition === "Drizzle" || day7Condition === "Fog" || day7Condition ==="Snow"){
                console.log("yellow");
                $(".border7").addClass("border-warning");

            }

            

            

            
            

            
            


         

        })
}
getWeatherApi();