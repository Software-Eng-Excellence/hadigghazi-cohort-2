import path from 'path'
import { readJSONFile } from './util/parsers/jsonParser'
import { readXMLFile } from './util/parsers/xmlParser'
import { readCSVFile } from './util/parsers/csvParser'
import logger from './util/logger'

async function main() {
  try {
    const dataDir = path.resolve(__dirname, '../data')

    // JSON
    const jsonPath = path.join(dataDir, 'book.json')
    const bookData = await readJSONFile(jsonPath)
    logger.info('📚 JSON (book.json):', bookData)

    // XML
    const xmlPath = path.join(dataDir, 'toy.xml')
    const toyData = await readXMLFile(xmlPath)
    logger.info('🤖 XML (toy.xml):', toyData)

    // CSV
    const csvPath = path.join(dataDir, 'cake.csv')
    const cakeData = await readCSVFile(csvPath, true)
    logger.info('🍰 CSV (cake.csv):', cakeData)
  } catch (error) {
    logger.error('Error reading files:', error)
  }
}

main()
