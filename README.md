# Bitplate

This is a boilerplate for unit testing backbone applications in a continuous integration environment such as TeamCity.

## Requirements

You will need [Node.js](http://nodejs.org/) and [Mocha](http://visionmedia.github.io/mocha/) installed on your continuous integration environment.

## Installation

Once you have Node and Mocha installed, clone Bitplate:

```
git clone git@github.com:flashbackzoo/bitplate.git
```

Install the dependencies:
```
npm install
```

Set up the Backbone app:
```
bower install && grunt
```

## Running tests

Run tests from the bitplate/test directory with:
```
make test
```

## Misc

[Mocha TeamCity Reporter](https://github.com/travisjeffery/mocha-teamcity-reporter)