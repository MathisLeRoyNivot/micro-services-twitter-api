<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" height="50px">
<img src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/300px-Twitter_Bird.svg.png" height="50px">
</p>
<h1 align="center">Micro Services - Twitter</h1>

## Project Structure :open_file_folder:
- **Go Service** : [Go Service Documentation](https://github.com/MathisLeRoyNivot/micro-services-twitter-go "Go to the Go Service Documentation")
- **Front** : [Front Documentation](https://github.com/MathisLeRoyNivot/micro-services-twitter-front "Go to the Front Documentation")

## Setup :gear:
Create a `.env` file in the root path of the project and put these different environment variables to be able to connect the MongoDB cluster : 
```env
TWITTER_CONSUMER_API_KEY=<key>
TWITTER_CONSUMER_API_SECRET_KEY=<key>
TWITTER_ACCESS_TOKEN=<key>
TWITTER_ACCESS_TOKEN_SECRET=<key>
```

## Running API :arrow_forward:
In order to launch the app, you only have to run the following command on your CLI (on default port 3000) :
```bash
node twitter/index.js
```
To specify a particular port if the port ::3000 is already used, you can launch the app with the port of your choice :
```bash
node twitter/index.js --port=<port_number>
```

## Routes :twisted_rightwards_arrows:

| Route        | Method           | Description  |
| ------------- |:-------------:| -----:|
| /api/twitter/timeline | **GET** | Get Twitter timeline |
| /api/twitter/user-infos/:screenName | **GET** | Get Twitter user from screen name (*screen_name*)|
| /api/twitter/user-infos-id/:id | **GET** | Get Twitter user infos from id (*id_str*)|
| /api/twitter/status | **POST** | Post new tweet|

## Contributors :computer:
- [Geoffrey Clermont](https://github.com/Geoffrey-max "Go to @Geoffrey-max's Github")
- [Antonin Joulie](https://github.com/AntoninJoulie "Go to @AntoninJoulie's Github")
- [Mathis Le Roy-Nivot](https://github.com/MathisLeRoyNivot "Go to @MathisLeRoyNivot's Github")
- [Léo Rigaudeau](https://github.com/leorigaudeau "Go to @leorigaudeau's Github")

## License :white_check_mark:
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/MathisLeRoyNivot/micro-services-twitter-api/blob/master/LICENSE) 2020 ©
