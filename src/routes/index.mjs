import express from 'express'
import { readHolidaysFolder, readHolidayFile } from '../utils/index.mjs'

const router = express.Router()

router.get('/version', (req, res) => {
  res.json({
    version: '0.0.1',
  })
})

router.get('/countries', async (req, res) => {
  const countries = await readHolidaysFolder()
  res.json({
    countries
  })
})

router.get('/holidays/:country/:year', async (req, res) => {
  const countryHoldays = await readHolidayFile(req.params.country, req.params.year)
  res.json({
    holidays: countryHoldays
  })
})

export default router
