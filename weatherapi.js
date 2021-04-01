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

            $("#daytemp7").text(data.daily[4].temp.day) + " F° ";
            $("#nighttemp7").text(data.daily[4].temp.night) + " °F ";
            var img7 = $('<img id="wicon2" alt="weather icon" width="75px">')
            img7.attr("src", iconUrl7);
            $("#icon7").append(img7);




            
            

            
            


         

        })
}
getWeatherApi();