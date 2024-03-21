import { readdir, readFile } from 'fs/promises'

import DATA from '../../public/countries.json' assert { type: 'json' }

const HOLIDAYS_FOLDER_PATH = './public/holidays'

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