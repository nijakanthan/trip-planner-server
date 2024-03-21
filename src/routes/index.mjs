import express from 'express'
import {
  readHolidaysFolder,
  readHolidayFile,
  getToken
} from '../utils/index.mjs'

const router = express.Router()

router.get('/version', (req, res) => {
  res.json({
    version: '0.0.1',
  })
})

router.get('/countries', async (req, res) => {
  const token = await getToken()
  const response = await axios.get(process.env.SERVICE_URL/{RESOURCE_PATH}, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  const countries = await readHolidaysFolder()
  res.json({
    countries,
    response
  })
})

router.get('/holidays/:country/:year', async (req, res) => {
  const countryHoldays = await readHolidayFile(req.params.country, req.params.year)
  res.json({
    holidays: countryHoldays
  })
})

export default router
