const restWorker = require('../_rest')
const { authenticate } = require('../controllers/auth')

const router = new restWorker()

router.post('/user', authenticate)

module.exports = router