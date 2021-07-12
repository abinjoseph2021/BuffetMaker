const express = require('express')

const { createPassword, checkPassword } = require('../utils/crypt')
const Account = require('../models/account')

const router = express.Router()
router.use(express.json({ extended: true }))

// @route POST /api/account/signup
// @desc Create a new account(client/startup)
router
    .route('/signup')
    .post(async (req, res) => {
        try {
            const { accountType, username, email, password } = req.body

            // Check if username or email is taken
            let doc = await Account.findOne({ $or: [{ username }, { email }] })
            if (doc != null) {
                doc.username == username ? res.status(400).send('username exist') : res.status(400).send('email exist')
                return
            }

            // Create unique salt and hash for password
            const setPassword = createPassword(password)
            const salt = setPassword.salt
            const hash = setPassword.hash

            const newAccount = Account({
                accountType,
                username,
                email,
                salt,
                hash
            })

            await newAccount.save()
            res.status(201).send('account created')

        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    })

// @route POST /api/account/login
// @desc Login the user
router
    .route('/login')
    .post(async (req, res) => {
        try {
            const { username, password } = req.body

            const account = await Account.findOne({ username })

            if (account == null) {
                res.status(400).send('No account with the given username')
                return
            }

            const validPassword = checkPassword(password, account.salt, account.hash)
            validPassword ? res.status(200).send({
                "message": "Login success",
                "username": account.username,
                "email": account.email,
                "accountType": account.accountType                
            }) : res.status(401).send('Incorrect password')
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    })

module.exports = router