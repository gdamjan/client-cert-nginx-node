# TLS Client Certificates in node

A nodejs example of client-server https, using client certificates. The node server is behind nginx.

**NOTE** nginx itself requires and verifies the client certificate.

(as a bonus, there's also the `recreateUrl` function for express behind proxies)


# Quick Start

```
nginx -c $PWD/nginx.conf
npm install
node server.js

curl -ik https://localhost:8443/ --cert ca/certs/client.crt --key ca/private/client.key
node client.js
```


# See also:

- [OpenSSL Certificate Authority](https://jamielinux.com/docs/openssl-certificate-authority/) (probably should be used
  for production)
- [HTTPS Authorized Certs with Node.js](https://engineering.circle.com/https-authorized-certs-with-node-js-315e548354a2)
  nice example of server side nodejs tls implementation, no nginx used here
- [https module in nodejs docs](https://nodejs.org/api/https.html)
- [tls module in nodejs docs](https://nodejs.org/api/tls.html#tls_tls_connect_options_callback) for the connect options
  that https.request uses too
- [x509 node package](https://www.npmjs.com/package/x509)
- [nginx ssl_verify_client](http://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_verify_client)
