const restWorker = require('../_rest')
const {
  getWaitListEntry,
  getWaitListEntries,
  createWaitListEntry,
  updateWaitListEntry,
  deleteWaitListEntry
} = require('../controllers/waitlist')

const router = new restWorker()

router.get('/:entryId', getWaitListEntry)
router.get('/', getWaitListEntries)
router.post('/', createWaitListEntry)
router.put('/:entryId', updateWaitListEntry)
router.delete('/:entryId', deleteWaitListEntry)

module.exports = router