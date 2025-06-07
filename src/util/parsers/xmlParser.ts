import { promises as fs } from "fs"
import { XMLParser, XMLBuilder } from "fast-xml-parser"

/**
 * Reads an XML file and returns its parsed content as a JavaScript object
 * @param filePath - Path to the XML file
 * @returns Promise<T> - Parsed XML data
 */
export async function readXMLFile<T = unknown>(filePath: string): Promise<T> {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8")
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    })
    return parser.parse(fileContent) as T
  } catch (error) {
    throw new Error(`Error reading XML file: ${error}`)
  }
}

/**
 * Writes a JavaScript object to an XML file
 * @param filePath - Path where the XML file should be written
 * @param data - JavaScript object to convert and write
 * @returns Promise<void>
 */
export async function writeXMLFile(filePath: string, data: unknown): Promise<void> {
  try {
    const builder = new XMLBuilder({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    })
    const xmlContent = builder.build(data)
    await fs.writeFile(filePath, xmlContent, "utf-8")
  } catch (error) {
    throw new Error(`Error writing XML file: ${error}`)
  }
}
