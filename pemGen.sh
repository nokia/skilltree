rm key.pem
rm pubkey.pem
openssl genrsa -out key.pem -passout file:pass.txt 4096
openssl rsa -in key.pem -pubout -out pubkey.pem
chmod 0444 key.pem
chmod 0444 pubkey.pem