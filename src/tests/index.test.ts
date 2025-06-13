import { main } from '../index';
import logger from '../util/logger';
import * as jsonParser from '../util/parsers/jsonParser';

jest.mock('../util/logger', () => ({
  info: jest.fn(),
  error: jest.fn()
}));

jest.mock('../util/parsers/jsonParser', () => ({
  readJSONFile: jest.fn().mockResolvedValue([
    {
      "Book Title": "Mock Book",
      "Author": "Mock Author",
      "Genre": "Fiction",
      "Format": "Hardcover",
      "Language": "English",
      "Publisher": "MockPub",
      "Special Edition": "None",
      "Packaging": "Box",
      "Price": "15",
      "Quantity": "2"
    }
  ])
}));

jest.mock('../util/parsers/xmlParser', () => ({
  readXMLFile: jest.fn().mockResolvedValue({
    data: {
      row: [
        {
          Type: "Toy",
          AgeGroup: "4-7",
          Brand: "FunBrand",
          Material: "Plastic",
          BatteryRequired: "Yes",
          Educational: "No",
          Price: "20",
          Quantity: "3"
        }
      ]
    }
  })
}));

jest.mock('../util/parsers/csvParser', () => ({
  readCSVFile: jest.fn().mockResolvedValue([
    [
      "0", "Cake", "Vanilla", "Jam", "20", "2", "Cream", "Vanilla",
      "Sprinkles", "White", "Congrats", "Round", "None", "None",
      "Standard Box", "30", "1"
    ]
  ])
}));

describe('index.ts main()', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should run successfully and log all parsed items', async () => {
    await expect(main()).resolves.toBeUndefined();

    expect(logger.info).toHaveBeenCalledWith(expect.stringContaining('Parsed Books:'), expect.any(Array));
    expect(logger.info).toHaveBeenCalledWith(expect.stringContaining('Parsed Toys:'), expect.any(Array));
    expect(logger.info).toHaveBeenCalledWith(expect.stringContaining('Parsed Cakes:'), expect.any(Array));
  });

  it('should log an error if any step throws', async () => {
    jest.spyOn(jsonParser, 'readJSONFile').mockRejectedValueOnce(new Error('Mock read error'));

    await main();

    expect(logger.error).toHaveBeenCalledWith(
      'Error parsing files:',
      expect.objectContaining({ message: 'Mock read error' })
    );
  });
});
