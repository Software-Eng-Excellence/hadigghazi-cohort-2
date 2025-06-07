import { promises as fs } from "fs";
import { parse as csvParse } from "csv-parse";
import { stringify as csvStringify } from "csv-stringify";

/**
 * Reads a CSV file and returns its contents as a 2D array of strings
 * @param filePath - Path to the CSV file
 * @param includeHeader
 * @returns Promise<string[][]> - 2D array of strings
 */
export async function readCSVFile(
  filePath: string,
  includeHeader: boolean = false
): Promise<string[][]> {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");

    return new Promise((resolve, reject) => {
      csvParse(
        fileContent,
        {
          trim: true,
          skip_empty_lines: true,
          relax_column_count: true,
        },
        (err, records?: string[][]) => {
          if (err) return reject(err);

          if (!records || records.length === 0) return resolve([]);

          const columnCount = records[0].length;

          const validRecords = records.filter(
            (row) =>
              row.length === columnCount &&
              row.every((cell) => cell.trim() !== "")
          );

          if (!includeHeader && validRecords.length > 0) {
            validRecords.shift();
          }
          resolve(validRecords);
        }
      );
    });
  } catch (error) {
    throw new Error(`Error reading CSV file: ${error}`);
  }
}

/**
 * Writes a 2D array of strings to a CSV file
 * @param filePath - Path where the CSV file should be written
 * @param data - 2D array of strings to write to the CSV file
 * @returns Promise<void>
 */
export async function writeCSVFile(
  filePath: string,
  data: string[][]
): Promise<void> {
  try {
    const csvContent = await new Promise<string>((resolve, reject) => {
      csvStringify(data, (err, output) => {
        if (err) reject(err);
        resolve(output);
      });
    });
    await fs.writeFile(filePath, csvContent, "utf-8");
  } catch (error) {
    throw new Error(`Error writing CSV file: ${error}`);
  }
}