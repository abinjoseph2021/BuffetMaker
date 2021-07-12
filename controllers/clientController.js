const express = require('express')

const Startup = require('../models/startup')

const router = express.Router()
router.use(express.json({ extended: true }))

// @route POST /api/client/fetchstartups
// @desc Fetch the startups with given work domain
router
    .route('/startups')
    .post(async (req, res) => {
        try {
            const { work } = req.body

            const startups = await Startup.find({
                recentWorks: {
                    $in: [work]
                }
            }).sort({ rating: 'desc' })

            res.status(200).send(startups)

        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    })

module.exports = router