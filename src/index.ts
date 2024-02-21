import express from 'express'
import router from './routes'

const app = express()
const port = 3001

app.use(router);

export default app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
