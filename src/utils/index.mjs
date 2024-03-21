import { readdir, readFile } from 'fs/promises'
import axios from 'axios'
import simpleOauth2 from 'simple-oauth2'

import DATA from '../../public/countries.json' assert { type: 'json' }

const HOLIDAYS_FOLDER_PATH = './public/holidays'

export async function getToken() {
  const config = {
    client: {
      id: process.env.CONSUMER_KEY,
      secret: process.env.CONSUMER_SECRET,
    },
    auth: {
      tokenHost: process.env.TOKEN_URL,
      tokenPath: '/oauth2/token',
    },
  }
  const oauth2Client = new simpleOauth2.ClientCredentials(config)
  const getToken = await oauth2Client.getToken()
  const accessToken = getToken.token.access_token
  return accessToken
}

export async function readHolidaysFolder() {
  try {
    const directoryNames = await readdir(HOLIDAYS_FOLDER_PATH, { withFileTypes: true })
    return directoryNames.filter(dirent => dirent.isDirectory())
      .map(dirent => {
        return DATA.countries.find((country) => country.code === dirent.name)
      })
  } catch (error) {
    console.error(`[readHolidaysFolder] Error: ${error.message}`)
  }
}


export async function readHolidayFile(country, year) { 
  try { 
    const data = await readFile(HOLIDAYS_FOLDER_PATH + `/${country}/${year}.json`)
    return JSON.parse(data.toString())
  } catch (error) { 
    console.error(`[readHolidayFile] Error: ${error.message}`)
  } 
}