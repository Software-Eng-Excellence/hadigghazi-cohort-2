import path from 'path';
import { readJSONFile } from './util/parsers/jsonParser';
import { readXMLFile } from './util/parsers/xmlParser';
import { readCSVFile } from './util/parsers/csvParser';
import logger from './util/logger';
import { BookMapper } from './mappers/Book.mapper';
import { CakeMapper } from './mappers/Cake.mapper';
import { ToyMapper } from './mappers/Toy.mapper';

export async function main() {
  try {
    const dataDir = path.resolve(__dirname, '../data');

    // JSON Books
    const bookJsonPath = path.join(dataDir, 'book.json');
    const bookRawList = await readJSONFile(bookJsonPath) as { [key: string]: string }[];
    const books = bookRawList.map(row => new BookMapper().mapFromJSON(row));
    logger.info('Parsed Books:', books);

    // XML Toys
    const toyXmlPath = path.join(dataDir, 'toy.xml');
    const toyRawParsed = await readXMLFile(toyXmlPath) as { data: { row: { [key: string]: string }[] } };
    const toys = toyRawParsed.data.row.map(row => new ToyMapper().mapFromXML(row));
    logger.info('Parsed Toys:', toys);

    // CSV Cakes
    const cakeCsvPath = path.join(dataDir, 'cake.csv');
    const cakeRows = await readCSVFile(cakeCsvPath);
    const cakes = cakeRows.map(row => new CakeMapper().mapFromCSV(row));
    logger.info('Parsed Cakes:', cakes);

  } catch (error) {
    logger.error('Error parsing files:', error);
  }
}

main();