<h1 align="center">Welcome to HGU 20-1 OSS FINAL  👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>


## URL for presentation video (youtube)
> https://www.youtube.com/watch?v=uCxfpS9ugtI
<br>

## What I did by myself
1. Write server code 'server.js' (using nodejs) importing 'openweathermaphelper' node module.
2. Write/design web page 'main.ejs' using given data.
3. Make server structure that return weather data(json type) everytime server call it. 
4. Import node modules and use it where server needs.
<br>


## What I referenced 
Did not use the open source project itself.
However, some open nodejs package or weather data API is used.
1) Use 'openweathermap' package that I want to use at npm (nodejs opensource library environment),
2) Use open(free) weather information data that 'openweathermap' API offer every time server call.
Below is the reference site associated with it.
>- OPEN API that offer real-time Weather data (need key)
> https://openweathermap.org/
>- Package using 'openweathermap' at nodejs (openweathermap-node)
> https://www.npmjs.com/package/openweathermap-node
<br>


## Prerequisites
```sh
 node.js >= 10.21.0 
<br>
```




## Description

- Web server displays weather information
- Use node.js framework and Weather OPEN API data  
<br>




## Details

- Getting real-time weather data
> openAPI 'openweather' offer data of current weather for each place. The web server administrator can subscribe to that API and retrieve weather data on demand through the key values provided.

- Web server platform used
> Node js is used for this project. Node-js is a platform suitable for web servers with synchronous operations that receive information in real time. Therefore, it is proper for the corresponding web server function to receive weather information in real time.  

<br>



## What can users do

- User can get real-time weather data for each place.
- The weather can be easily checked by providing a simple interface.  

<br>



## Get started

1. Install nodejs at Rpi
```sh
$ sudo apt-get install nodejs
```
2. Cloning this repository
3. Run the Web server according to the 'Usage' below.  

<br>



## Usage
```sh
$ nodejs server
```
or
```sh
$ node server
```
Then, connect to the url below in your browser. (IP address+ port number)
```sh
http://{IP of Raspberry Pi}:10010
```  
<br>




## Author
👤 **Kyungmin Lee** (contact at 21500463@handong.edu)

