// push messages
const thtime = require("./thtime")

var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()
var h = thtime().h
var m = thtime().m
console.log(h+' : '+m)
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', function(request, response) {
    response.send('<h1>Webhook for linebot fujosy</h1>')
  });

app.post('/webhook', (req, res) => {
  var text = req.body.events[0].message.text
  var sender = '8ff352df1b00176b2c20c219214cfa33'
    
  if (text === 'บอส') {
    sendText(sender, text)
  }
   
  if (h == 8 && m == 18){
    sendText(sender, text)
  }
      
  res.sendStatus(200)
    
})


function sendText (sender, text) {
  let data = {
    to: sender,
    messages: [
      {
        type: 'text',
        text: 'บอสโลกเกิดแล้วจ้าาาาา'
      }
    ]
  }
  request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {"//Vuv0pyl3B7ZbU2JyfkgcI8LCFKxOTueYe0GFdf1fcAenLHWtvBogZ6cnyFzfIcKHJmm/Tzyyv4wF0Pp1B9PqoFp4dB1m3/C5reF9Ob6N7vnemVFdWufCl4oJM265DIalYeDgNje19LW1T/OhJgtS0AdB04t89/1O/w1cDnyilFU="}'
    },
    url: 'https://api.line.me/v2/bot/message/push',
    method: 'POST',
    body: data,
    json: true
  }, function (err, res, body) {
    if (err) console.log('error')
    if (res) console.log('success')
    if (body) console.log(body)
  })
}

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})
