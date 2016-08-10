var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var multer = require('multer')
var upload = multer({
  dest: path.join(__dirname, './downloads')
})

var app = express()

app.use(bodyParser.raw({
  type: 'raw',
  limit: '100mb'
}))

app.use(bodyParser.json({
  limit: '100mb'
}))

app.use(bodyParser.urlencoded({
  limit: '100mb',
  extended: true
}))

app.post('/', upload.any(), function (req, res) {
  console.log('empty in my case', req.body)
  console.log('must be raw', req.headers['content-type'])
})

app.listen(3002, function () {
  console.log('listening on port 3002')
})
