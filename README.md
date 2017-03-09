# SMS Nexmo Messenger

[![N|Solid](https://github.com/KryptoCode/sms-node-nexmo-project/blob/master/public/images/smsproject.png?raw=true)](https://nodesource.com/products/nsolid)

SMS Nexmo Messenger is a NodeJS app using the Nexmo API to send SMS messages to any phone (paid) You can test the api using one white listed phone number. Followed tutorial @ https://scotch.io/tutorials/send-sms-from-the-browser-with-web-apis-node-and-nexmo

  
### Tech

Dillinger uses a number of open source projects to work properly:

* [Node.JS] - evented I/O for the backend
* [Nexmo](https://www.nexmo.com) - Programmable Building Blocks for Next Generation Communication Applications.
* [Express] - fast node.js network app framework [@tjholowaychuk]

### Installation

1. Install dependencies
```sh
$ npm install
```
2. Set up a config.js with Your Credentials

* [Sign up at Nexmo](https://dashboard.nexmo.com/sign-up) to get your own API keys and a virtual number.

* Create config.js in /server. The file should include the credentials.
```sh
module.exports = {
  api_key: 'f321a...',
  api_secret: '18e9aad...',
  number: '14155551234'
};
```
3. Run the Node App
```sh
$ node server/index.js
```
4. Launch it on Browser

* Go to http://localhost:4000 and send text messages.
