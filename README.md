# InfiniteScrolling

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## To get the Reddit API access token
I used this tutorial found on https://rymur.github.io/setup
Got my auth username and password from https://www.reddit.com/prefs/apps
```js
var request = require("request");

var options = {
    url: "https://www.reddit.com/api/v1/access_token",
    method: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    headers: {
      'User-Agent': 'YOUR_USER_AGENT'
    },
    auth: {
      'username': 'YOUR_AUTH_USERNAME',
      'password': 'YOUR_AUTH_PASSWORD'
    },
    body: 'grant_type=password&username=YOUR_REDDIT_USERNAME&password=YOUR_REDDIT_PASSWORD',
  };

request(options, function(err, res, body) {
    var json = JSON.parse(body);
    var token = json['access_token'];
    console.log(token) // YOUR_ACCESS_TOKEN
});
```
