// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  var address = (req.headers['x-forwarded-for']).split(",::");
  var language = (req.headers['accept-language']).split(",");
  var software = (req.headers['user-agent']).match(/\((.*?)\)/);
  var response = {ipaddress:address[0], language:language[0], software:software[1]};
  res.send(response);
})



// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
