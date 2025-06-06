import { readXMLFile, writeXMLFile } from "../../util/parsers/xmlParser"
import * as fs from "fs"
import * as path from "path"

describe("XML Parser", () => {
  const dummyFile = path.resolve(__dirname, "../data/dummy.xml")
  const emptyFile = path.resolve(__dirname, "../data/empty.xml")
  const invalidFilePath = path.resolve(__dirname, "../data-does-not-exist/invalid.xml")

  const sampleObject = {
    users: {
      user: [
        { name: "Hadi", age: 30 },
        { name: "Sami", age: 25 },
        { name: "Ali", age: 22 }
      ]
    }
  }

  const emptyXMLContent = `<root></root>`

  beforeAll(async () => {
    await writeXMLFile(dummyFile, sampleObject)
    fs.writeFileSync(emptyFile, emptyXMLContent, "utf-8")
  })

  afterEach(async () => {
    await writeXMLFile(dummyFile, sampleObject)
  })

  it("should correctly parse XML data", async () => {
    const result = await readXMLFile(dummyFile)
    expect(result).toEqual(sampleObject)
  })

  it("should return empty object when XML is empty", async () => {
    const result = await readXMLFile(emptyFile)
    expect(result).toEqual({ root: '' })
  })

  it("should write data to XML file", async () => {
    const newData = { message: { text: "Hello", value: 123 } }
    await writeXMLFile(dummyFile, newData)
    const result = await readXMLFile(dummyFile)
    expect(result).toEqual(newData)
  })

  it("should throw error if reading XML file fails", async () => {
    await expect(readXMLFile(invalidFilePath)).rejects.toThrow("Error reading XML file")
  })

  it("should throw error if writing XML file fails", async () => {
    await expect(writeXMLFile(invalidFilePath, sampleObject)).rejects.toThrow("Error writing XML file")
  })
})
