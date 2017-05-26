const express = require('express')
const app = express()

app.get('/*', function (req, res) {
  const dn = req.get('X-SSL-CLIENT-S-DN')
  const cert = req.get('X-SSL-CLIENT-CERT')
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.status(200)
  const out = `\
   dn: ${dn}
   ${fullUrl}
   -----------------------
`;
  res.send(out)
})

app.listen(3000, function () {
  console.log('Hello world app!')
})
