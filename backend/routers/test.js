const restWorker = require('../_rest')
const { getTest } = require('../controllers/test')

const router = new restWorker()

router.get('/', getTest)

module.exports = router