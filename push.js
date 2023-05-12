var push = require('web-push')

let vapIDKeys = {
    publicKey: 'BOjFQmtc76xSKNjKEY1ifP1BKz5YqxyeSi7OTW9cV2_dgXeashBVUNQYoWsmnwMx11n4UtqGSlnw1D7oihlqJkI',
    privateKey: 'dZCD-MpZYbprG5EqaO1AStizYwAEHK3yO2gL5pjqFq4'
  }
push.setVapidDetails('mailto:dlamininoziphononhlanhla@gmail.com', vapIDKeys.publicKey , vapIDKeys.privateKey)

let sub ={"endpoint":"https://fcm.googleapis.com/fcm/send/cWOdPYtIk14:APA91bHwrVDQxBwXXf-Q3Agkrkrb_fSHFUpsjZ7G-D5WJwqwD5EmDIRjSe_I6e71BGSufZFzySQK34LVpYyX1cpd-s1vSM0Z7sCukF5axes5HUS_Mq-0zugTIPM9nS7YOC4X3IhK4D4l","expirationTime":null,"keys":{"p256dh":"BD47p4hQFFgYtxn4YksRe7YnXkMu7gufnVy_3e335Vjzj-y9qRH-7YsUbCMaG1CRIYZ841NWxio_dGRyzva80dg","auth":"N57a4Y1ROVWEm1P9zgGJWg"}}

push.sendNotification(sub, 'test message')