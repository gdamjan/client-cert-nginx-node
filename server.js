const express = require('express')
const x509 = require('x509')
const app = express()

app.set('trust proxy', 'loopback')
function recreateUrl(req) {
   const forwardedPort = req.get('X-Forwarded-Port')
   const port = forwardedPort ? `:${forwardedPort}` : ''
   return `${req.protocol}://${req.hostname}${port}${req.originalUrl}`;
}

app.get('/*', function (req, res) {
  const dn = req.get('X-SSL-CLIENT-S-DN')
  const client_cert = req.get('X-SSL-CLIENT-CERT').replace(/\t/g,'\n')
  const cert = x509.parseCert(client_cert)
  console.log(cert)
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
