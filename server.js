const express = require('express');
const app = express();

app.get('/', function(request, response) {
  response.send('OK');
});

app.get('/auth/authexploit', function(request, response) {
  var wlst = require("./wlst.json");
  var r = false
  console.log(request.query.hid);
  for (var i in wlst)
  {
   if (wlst[i] == request.query.hid)
   {
     r = true;
     break;
   }
  }
  if (!r)
  {
   response.send("0"); 
  } else
  {
   response.send("1"); 
  }
});
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
