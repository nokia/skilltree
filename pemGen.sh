rm key.pem
rm pubkey.pem
rm pubkey.pem
rm pubkey.pem
openssl genrsa -out key.pem -passout file:pass.txt 4096
openssl rsa -in key.pem -pubout -out pubkey.pem
openssl req -new -newkey rsa:2048 -nodes -out domain.csr -keyout domain.key
openssl x509 -req -days 365 -in domain.csr -signkey domain.key -out domain.crt
rm domain.csr
chmod 0444 key.pem
chmod 0444 pubkey.pem
chmod 0444 domain.key
chmod 0444 domain.crt