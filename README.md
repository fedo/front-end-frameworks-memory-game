# Front-End Frameworks Memory Game

The same Memory Game implemented using different front-end frameworks and a common (ClojureScript) core.

## Requirements

* [Leiningen](http://leiningen.org/)
* [npm](https://www.npmjs.com/)
* Yeoman, Gulp and Bower (`npm install -g yo gulp bower`)

## Usage

### Install/Compile fefwmega-core

`cd fefwmega-core`

Install the CLJS jar (required for fefwmega-om):

`lein pom; lein jar; lein install`

Compile to JS (required for fefwmega-angularjs-1):

`lein cljsbuild once min`

### Run the Om implementation

`cd fefwmega-om`

`lein figwheel`

Go to `http://localhost:3449` in your browser.

### Run the AngularJS implementation

`cd fefwmega-angularjs-1`

`gulp serve`

Go to `http://localhost:3000/` in your browser.
