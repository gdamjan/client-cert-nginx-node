# Quick Start

```
nginx -c $PWD/nginx.conf
npm install express
node server.js

curl -ik https://localhost:8443/ --cert ca/certs/client.crt --key ca/private/client.key
node client.js
```


# Certificates (don't do it for production)

see https://jamielinux.com/docs/openssl-certificate-authority/


# TODO

Handle the `cert` variable that has the whole client certificate in PEM format (it comes from the `x-ssl-client-cert` header).
