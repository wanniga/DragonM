var request = require('request')
const thtime = require("./thtime")

var sender = process.env.GROUPID

var deley = 10000

setInterval(()=>timechk (), deley);


function timechk (){
    var h = thtime().h
    var m = thtime().m
    var s = thtime().s

  console.log(h+' : '+m+' : '+s)
  alert1()
  alert2()
}

function alert1() {
  var h = thtime().h
  var m = thtime().m
  var s = thtime().s

  if (m == 30 && s <= 10 ){
    sendText ()
    } 
  if (m == 0 && s <= 10 ){
    sendText ()
    }
}


function alert2(){
  var h = thtime().h
  var m = thtime().m
  var s = thtime().s
    
  if (m == 15 && s <= 10 ){
    sendText15 ()
    }
  if (m == 45 && s <= 10 ){
    sendText15 ()
    }

}



function sendText () {
  let data = {
    to: sender,
    messages: [
      {
        type: 'text',
        text: 'บอสโลกเกิดแล้ววววววววว'
      }
    ]
  }
  request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {"Cs3mFnfFgDh1wtOlEwt9aIvEah7xfZ8UQteBVVe4G1b="}'
    },
    url: 'https://notify-api.line.me/api/notify',
    method: 'POST',
    body: data,
    json: true
  }, function (err, res, body) {
    if (err) console.log('error')
    if (res) console.log('success')
    if (body) console.log(body)
  })
}


function sendText15 () {
  let data = {
    to: sender,
    messages: [
      {
        type: 'text',
        text: 'อีก 15 นาที บอสโลกเกิด'
      }
    ]
  }
  request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {"Cs3mFnfFgDh1wtOlEwt9aIvEah7xfZ8UQteBVVe4G1b="}'
    },
    url: 'https://notify-api.line.me/api/notify',
    method: 'POST',
    body: data,
    json: true
  }, function (err, res, body) {
    if (err) console.log('error')
    if (res) console.log('success')
    if (body) console.log(body)
  })
}


