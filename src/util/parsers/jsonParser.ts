import { promises as fs } from "fs"

/**
 * Reads a JSON file and returns its parsed content
 * @param filePath - Path to the JSON file
 * @returns Promise<T> - Parsed JSON object
 */
export async function readJSONFile<T = unknown>(filePath: string): Promise<T> {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8")
    return JSON.parse(fileContent) as T
  } catch (error) {
    throw new Error(`Error reading JSON file: ${error}`)
  }
}

/**
 * Writes a JavaScript object to a JSON file
 * @param filePath - Path where the JSON file should be written
 * @param data - JavaScript object or array to write
 * @returns Promise<void>
 */
export async function writeJSONFile(filePath: string, data: unknown): Promise<void> {
  try {
    const jsonString = JSON.stringify(data, null, 2)
    await fs.writeFile(filePath, jsonString, "utf-8")
  } catch (error) {
    throw new Error(`Error writing JSON file: ${error}`)
  }
}
