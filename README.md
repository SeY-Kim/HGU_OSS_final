<h1 align="center">Welcome to HGU 20-1 OSS FINAL  👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>




## Prerequisites

- nodejs >= 10.21.0  




## Description

- Web server displays weather information
- Use node.js framework and Weather OPEN API data  




## Details

- Getting real-time weather data
> openAPI 'openweather' offer data of current weather for each place. The web server administrator can subscribe to that API and retrieve weather data on demand through the key values provided.

- Web server platform used
> Node js is used for this project. Node-js is a platform suitable for web servers with synchronous operations that receive information in real time. Therefore, it is proper for the corresponding web server function to receive weather information in real time.  




## What can users do

- User can get real-time weather data for each place.
- The weather can be easily checked by providing a simple interface.  




## Get started

1. Install nodejs at Rpi
```sh
sudo apt-get install nodejs
```
2. Cloning this repository
3. Run the Web server according to the 'Usage' below.  




## Usage
```sh
nodejs server
```
or
```sh
node server
```
Then, connect to the url below in your browser.
```sh
<IP of raspberry pi>:10010
```  




## Reference 
- OPEN API that offer real-time Weather data (need key)
> https://openweathermap.org/
- package using 'openweathermap' at nodejs (openweathermap-node)
> https://www.npmjs.com/package/openweathermap-node
- Guide to install nodejs at Rpi
> https://itstory.tk/entry/Ubuntu-1604-nodejs-%EC%99%80-npm-%EC%84%A4%EC%B9%98  




## Author
👤 **Kyungmin Lee**

