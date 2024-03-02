import express from 'express'
import router from './routes/index.mjs'

const app = express()
const port = 8080

app.use('/api', router)

export default app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
