/*
	HGU 20-1 OSS FINAL
	21500463 Kyungmin Lee
	Weather info API for node js web server
*/

var curr_weather;
var curr_city = 'Pohang';
var data = new Array();

const OpenWeatherMapHelper = require("openweathermap-node");
const helper = new OpenWeatherMapHelper(
    {
        APPID: '4dd6632c4657c0f4cc7ef147131214ab',
        units: "metric"
    }
);



// helper.getThreeHourForecastByCityName("Ansan", (err, threeHourForecast) => {
//     if(err){
//         console.log(err);
//     }
//     else{
// 		console.log(threeHourForecast);
// 		console.log(threeHourForecast.list[39].weather);
//     }
// });
 

//1) 모듈 동작 변수 선언 (express, ejs, fs)
var express_port = 10010;
var express = require('express');
var ejs = require('ejs');
var app = express();
//2) 엔진 설정 (view engine - ejs + static path 설정 + express listen)
app.set("view engine", "ejs");
app.set('views', __dirname+'/views');
app.use(express.static(__dirname));
app.listen(express_port, function(){
	console.log('Express Start, Port: ' + express_port);
});
//3) web root page 설정
app.get('/', function(req, res){
	res.render('main', {
		data: data
	});
});
app.get('/clickedmap', function(req, res){
	helper.getCurrentWeatherByCityName(curr_city, (err, curr) => {
		if(err){
			console.log(err);
		}
		else{
			data[0] = curr_city;
			data[1] = curr.main.temp + "℃";
			data[2] = curr.main.feels_like + "℃ (sens)";
			data[3] = curr.main.pressure + "hPa";
			data[4] = curr.main.humidity + "% (humd)";
			data[5] = curr.wind.speed  + "km/h (wind)";
			data[6] = "http://openweathermap.org/img/wn/" + curr.weather[0].icon + "@4x.png";
			console.log(data);
		}
	});
	curr_city = req.query.city;
	console.log(curr_city);
	res.redirect('/');
});