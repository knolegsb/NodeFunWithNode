console.log('Hello world');

var x = 10;
var y = 25;
console.log(x * y);

var msgs = require("./msgs.js");
//console.log(msgs());
//console.log(msgs.first);
//console.log(msgs.third);
//console.log(msgs.third.name);

var msg = new msgs();
console.log(msg.first);

var logger = require("./logger");
logger.log("this from the logger");