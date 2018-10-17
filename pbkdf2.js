var crypto = require('crypto');

function hashPassword (password) {
    const hashLength = 32; // in bytes
    const saltLength = 16; // in bytes
    const iterations = 248573;

    var hashData = 1;

    crypto.randomBytes(saltLength, function(err, salt) { // generates salt (only this line)
        if (err) {
            return err;
        }

        crypto.pbkdf2(password, salt, iterations, hashLength,
            function(err, hash) {

                if (err) {
                    //return err;
                }

                hashData = new Buffer(hash.length + salt.length + 8);

                // include the size of the salt so that we can, during verification,
                // figure out how much of the hash is salt
                hashData.writeUInt32BE(salt.length, 0, true);
                // similarly, include the iteration count
                hashData.writeUInt32BE(iterations, 4, true);

                salt.copy(hashData, 8);
                hash.copy(hashData, salt.length + 8);

                //return hashData;
            });
    });

    return hashData;
}

function verifyPassword(password, hashData) {
    // extract the salt and hash from the combined buffer
    var saltLength = hashData.readUInt32BE(0);
    var hashLength = hashData.length - saltLength - 8;
    var iterations = hashData.readUInt32BE(4);
    var salt = hashData.slice(8, saltLength + 8);
    var hash = hashData.toString('binary', saltLength + 8);

    // verify the salt and hash against the password
    crypto.pbkdf2(password, salt, iterations, hashLength, function(err, verify) { // verify is the newly generated hash
        if (err) {
            //return err;
        }

        return verify.toString('binary') === hash;
    });
}

exports.hashPassword = hashPassword;
exports.verifyPassword = verifyPassword;
