export type FormData = {
  phone: string
  firstName: string
  lastName: string
  gender: "male" | "female" | ""
  workplace: string
  address: string
  amount: number
  day: number
}

export type WizardStep = {
  path: string
  title: string
  component: React.ComponentType
  fields: (keyof FormData)[]
}