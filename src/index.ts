import { User, SampleData, RecognizedEmail, Output } from './interfaces/interfaces'
import { readJSONFile, writeJSONFile, getFilePath } from './utils/utils'

const extractEmails = (user: User, sampleEmails: string[]): string[] => {
  const nameParts = user.email
    .split('@')[0]
    .split(/[\.\-\_\d]/)
    .map((part) => part.toLowerCase())
    .filter((part) => part.length > 2)

  return sampleEmails.filter((email) => {
    if (!email) return false

    const sampleEmailParts = email
      .split('@')[0]
      .toLowerCase()
      .split(/[\.\-\_\d]/)
      .filter((part) => part.length > 2)

    return nameParts.every((part) => sampleEmailParts.some((samplePart) => samplePart.includes(part)))
  })
}

const processEmails = (users: User[], sampleData: SampleData[]): Output => {
  const sampleEmails = sampleData.map((data) => data.email || data.account_email).filter((email): email is string => email !== null)

  const recognized: RecognizedEmail[] = []
  const notRecognized: string[] = []

  users.forEach((user) => {
    const relatedEmails = extractEmails(user, sampleEmails)

    if (relatedEmails.length > 0) {
      recognized.push({
        user_email: user.email,
        related_emails: relatedEmails
      })
    } else {
      notRecognized.push(user.email)
    }
  })

  return { recognized, not_recognized: notRecognized }
}

const main = (): void => {
  try {
    const users = readJSONFile<User[]>(getFilePath('users.json'))
    const sampleData = readJSONFile<SampleData[]>(getFilePath('sample_data.json'))

    const output = processEmails(users, sampleData)
    writeJSONFile(getFilePath('output.json'), output)
  } catch (e) {
    console.error('An error occurred during processing:', e)
  }
}

main()
