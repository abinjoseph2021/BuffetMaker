const accountController = require('../controllers/accountController')
const companyController = require('../controllers/companyController')
const clientController = require('../controllers/clientController')

const router = (app) => {
    app.use('/api/account', accountController)
    app.use('/api/company', companyController)
    app.use('/api/client', clientController)
}

module.exports = router