# Quizzer

[![Go Report Card](http://goreportcard.com/badge/thangchung/quizzer)](http://goreportcard.com/report/thangchung/quizzer)
[![WTFPL License](https://img.shields.io/badge/licence-WTFPL-green.svg)](https://github.com/thangchung/quizzer/blob/master/LICENSE)

> Quizzer is very much a work in progress

The quizzer application that allows an user to composing and doing a testing online.

# Run in local development

* Make sure you have [golang](https://golang.org) and [nodejs](https://nodejs.org) are installed in your box.
* `npm install` for installing quizzer's necessary libs
* `npm run build` for building and watching the client development.
* `npm start` for running the web server and booting up the quizzer.

# Run in Docker environment

* `npm install`
* `npm run build`
* `docker build -t thangchung/quizzer .`
* `docker run -p 6868:6868 -d thangchung/quizzer`

