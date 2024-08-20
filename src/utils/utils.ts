import path from 'node:path'
import fs from 'node:fs'

export const getFilePath = (fileName: string): string => {
  return path.resolve(__dirname, '../data', fileName)
}

export const readJSONFile = <T>(filePath: string): T => {
  try {
    const data = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(data) as T
  } catch (e) {
    console.error(`Error reading or parsing the file at ${filePath}:`, e)
    throw new Error(`Failed to read or parse JSON file: ${filePath}`)
  }
}

export const writeJSONFile = (filePath: string, data: object): void => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
    console.log('\x1b[32m', `✅ Data successfully written to ${filePath}`, '\x1b[0m')
  } catch (e) {
    console.error(`Error writing to the file at ${filePath}:`, e)
    throw new Error(`Failed to write to JSON file: ${filePath}`)
  }
}
