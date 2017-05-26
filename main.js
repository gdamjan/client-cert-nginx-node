const express = require('express')
const app = express()

app.set('trust proxy', 'loopback')
function recreateUrl(req) {
   const port = req.headers['x-forwarded-port']
   return `${req.protocol}://${req.hostname}:${port}${req.originalUrl}`;
}

app.get('/*', function (req, res) {
  console.log(req.headers)

  const dn = req.get('X-SSL-CLIENT-S-DN')
  const cert = req.get('X-SSL-CLIENT-CERT')
  const fullUrl = recreateUrl(req)
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
