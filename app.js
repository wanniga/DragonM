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
      'Authorization': 'Bearer {"R0T0NJwEn9hvSNLIAH5gVH/LT0MIm34I4jhl5xaeXSX7fyrpbBvKm6NfqaTI82/549CVsa72KQZtE4UFMf4AHjQvIBOIKiocSUjgc8KJKvFWKtkxPs6z3I2qmXEK7xRqVjiH88EMowxt5bT3RHzBzAdB04t89/1O/w1cDnyilFU="}'
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
      'Authorization': 'Bearer {"R0T0NJwEn9hvSNLIAH5gVH/LT0MIm34I4jhl5xaeXSX7fyrpbBvKm6NfqaTI82/549CVsa72KQZtE4UFMf4AHjQvIBOIKiocSUjgc8KJKvFWKtkxPs6z3I2qmXEK7xRqVjiH88EMowxt5bT3RHzBzAdB04t89/1O/w1cDnyilFU="}'
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


