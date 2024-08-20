export interface User {
  name: string
  email: string
  id: number
}

export interface SampleData {
  text: string
  account_email: string | null
  email: string | null
}

export interface RecognizedEmail {
  user_email: string
  related_emails: string[]
}

export interface Output {
  recognized: RecognizedEmail[]
  not_recognized: string[]
}
