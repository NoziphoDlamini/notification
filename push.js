var push = require('web-push')

let vapIDKeys = {
    publicKey: 'BOjFQmtc76xSKNjKEY1ifP1BKz5YqxyeSi7OTW9cV2_dgXeashBVUNQYoWsmnwMx11n4UtqGSlnw1D7oihlqJkI',
    privateKey: 'dZCD-MpZYbprG5EqaO1AStizYwAEHK3yO2gL5pjqFq4'
  }
push.setVapidDetails('mailto:dlamininoziphononhlanhla@gmail.com', vapIDKeys.publicKey , vapIDKeys.privateKey)

let sub ={}

push.sendNotification(sub, 'test message')