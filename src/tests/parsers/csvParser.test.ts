import { readCSVFile, writeCSVFile } from "../../util/parsers/csvParser"
import * as fs from "fs"
import * as path from "path"

describe("Csv Parser", () => {
  const dummyFile = path.resolve(__dirname, "../data/dummy.csv")
  const emptyFile = path.resolve(__dirname, "../data/empty.csv")
  const invalidFilePath = path.resolve(__dirname, "../data-does-not-exist/invalid.csv")

  const initialData: string[][] = [
    ["Name", "Age", "City", "Gender"],
    ["Hadi", "30", "South", "Male"],
    ["Sami", "25", "Beirut", "Male"],
    ["Ali", "28", "North", "Male"]
  ]

  beforeAll(() => {
    fs.writeFileSync(dummyFile, initialData.map(row => row.join(",")).join("\n"), "utf-8")
    fs.writeFileSync(emptyFile, "", "utf-8")
  })

  afterEach(() => {
    fs.writeFileSync(dummyFile, initialData.map(row => row.join(",")).join("\n"), "utf-8")
  })

  it("should correctly parse CSV data (excluding header)", async () => {
    const result = await readCSVFile(dummyFile)
    expect(result).toEqual(initialData.slice(1))
  })

  it("should include the header if includeHeader = true", async () => {
    const result = await readCSVFile(dummyFile, true)
    expect(result[0]).toEqual(initialData[0])
    expect(result.length).toBe(initialData.length)
  })

  it("should return empty array for an empty CSV file", async () => {
    const result = await readCSVFile(emptyFile)
    expect(result).toEqual([])
  })

  it("should write data to a CSV file", async () => {
    const newData = [
      ["Name", "Age", "City", "Gender"],
      ["Hadi", "30", "South", "Male"],
      ["Sami", "25", "Beirut", "Male"]
    ]
    await writeCSVFile(dummyFile, newData)
    const result = await readCSVFile(dummyFile)
    expect(result).toEqual(newData.slice(1))
  })

  it("should exclude invalid rows (wrong column count)", async () => {
    const newData = [
      ["Name", "Age", "City", "Gender"],
      ["Hadi", "30", "South", "Male"],
      ["Sami", "25", "Beirut"]
    ]
    await writeCSVFile(dummyFile, newData)
    const result = await readCSVFile(dummyFile)
    expect(result).toEqual([newData[1]])
  })

  it("should throw an error for invalid read path", async () => {
    await expect(readCSVFile(invalidFilePath)).rejects.toThrow("Error reading CSV file")
  })

  it("should throw an error for invalid write path", async () => {
    const data = [["Name", "Age"], ["Test", "99"]]
    await expect(writeCSVFile(invalidFilePath, data)).rejects.toThrow("Error writing CSV file")
  })
})
