const crypto = require('crypto')

const createPassword = (password) => {
    // Create unique salt for every user
    const salt = crypto.randomBytes(16).toString('hex')

    // Hashing user's salt and password with 1000 iterations
    const key = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    const hash = key.toString('hex')

    const cryptDetails = {
        salt: salt,
        hash: hash
    }

    return cryptDetails
}

const checkPassword = (password, salt, hash) => {
    // Create key(hash) using given password
    const key = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

    // Verify if the original hash and new hash(key) are same
    if (key == hash) {
        return true
    } else {
        return false
    }
}

module.exports = { createPassword, checkPassword }