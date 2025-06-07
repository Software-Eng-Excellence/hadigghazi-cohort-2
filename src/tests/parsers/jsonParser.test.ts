import { readJSONFile, writeJSONFile } from "../../util/parsers/jsonParser"
import * as fs from "fs"
import * as path from "path"

describe("JSON Parser", () => {
  const dummyFile = path.resolve(__dirname, "../data/dummy.json")
  const emptyFile = path.resolve(__dirname, "../data/empty.json")
  const invalidFilePath = path.resolve(__dirname, "../data-does-not-exist/invalid.json")

  const sampleData = {
    users: [
      { name: "Hadi", age: 30 },
      { name: "Sami", age: 25 },
      { name: "Ali", age: 22 }
    ]
  }

  beforeEach(() => {
    fs.writeFileSync(dummyFile, JSON.stringify(sampleData, null, 2), "utf-8")
    fs.writeFileSync(emptyFile, "{}", "utf-8")
  })

  afterEach(() => {
  try {
    fs.unlinkSync(dummyFile)
  } catch {
  // ignore error
  }

  try {
    fs.unlinkSync(emptyFile)
  } catch {
  // ignore error
  }
  })

  it("should correctly parse JSON data", async () => {
    const result = await readJSONFile(dummyFile)
    expect(result).toEqual(sampleData)
  })

  it("should return an object when JSON is empty", async () => {
    const result = await readJSONFile(emptyFile)
    expect(result).toStrictEqual({})
  })

  it("should write data to JSON file", async () => {
    const newData = { message: "Hello", value: 123 }
    await writeJSONFile(dummyFile, newData)
    const result = await readJSONFile(dummyFile)
    expect(result).toStrictEqual(newData)
  })

  it("should throw error if reading JSON file fails", async () => {
    await expect(readJSONFile(invalidFilePath)).rejects.toThrow("Error reading JSON file")
  })

  it("should throw error if writing JSON file fails", async () => {
    await expect(writeJSONFile(invalidFilePath, sampleData)).rejects.toThrow("Error writing JSON file")
  })
})
