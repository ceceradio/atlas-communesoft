#!/bin/bash

mkdir certs

openssl genrsa -out certs/key.pem

openssl req \
    -new \
    -newkey rsa:4096 \
    -days 365 \
    -nodes \
    -x509 \
    -subj "/C=US/ST=oned/L=ocal/O=commune.local/CN=commune.local" \
    -keyout certs/commune.local.key \
    -out certs/commune.local.cert

