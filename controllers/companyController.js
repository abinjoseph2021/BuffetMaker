const express = require('express')


const startup = require('../models/startup')

const router = express.Router()
router.use(express.json({ extended: true }))

// @route GET /api/company/
// @desc fetch details of the company
router
    .route('/:cname')
    .get(async (req, res) => {
        try {
            const name = req.params.cname
            let company = await startup.findOne({ name })
            if (company != null) {
                res.status(200).send(company)
                return
            }
            res.status(400).send("Bad Request")
        } catch (error) {
            res.status(500).send(error)
        }
    })

    // @route POST /api/company/
    // @desc create company
router    
    .route('/register')
    .post(async (req, res) => {
        try {
            const { name, rating, recentWorks } = req.body
            const company = startup({
                name,
                rating,
                recentWorks
            })

            await company.save()
            res.status(201).send(company)
        } catch (error) {
            res.status(500).send(error)
        }
    })


// @route GET /api/company/:cname/position
// @desc fetch competitors
router
    .route('/:cname/position')
    .get(async (req, res) => {
        try {
            let name = req.params.cname
            let company = await startup.findOne({ name })
            let companies = await startup.find({ name: { $ne: name } }).limit(2)
            if (companies != [] && company != null) {
                companies[2] = companies[1]
                companies[1] = company
                res.status(200).send(companies)
                return
            }
            res.status(400).send("Bad Request")
        } catch (error) {
            res.status(500).send(error)
        }
    })

module.exports = router


