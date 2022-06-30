const restWorker = require('./_rest')
const authRouter = require('./routers/auth')
const waitlistRouter = require('./routers/waitlist')
const testRouter = require('./routers/test')
const { authMiddleware } = require('./middlewares/auth')

const app = new restWorker()

// middlewares
app.use(authMiddleware)

// routes
app.use("/v1/auth", authRouter)
app.use("/v1/waitlist", waitlistRouter)
app.use("/test", testRouter)


addEventListener('fetch', event => {
  event.respondWith(app.handleRequest(event.request))
})