import { AddressStep, LoanStep, PersonalStep } from '../pages'
import type { WizardStep } from '../types'

export const wizardSteps: WizardStep[] = [
  {
    path: "personal",
    title: "Личные данные",
    component: PersonalStep,
    fields: ["phone", "firstName", "lastName", "gender"]
  },
  {
    path: "address",
    title: "Адрес и работа",
    component: AddressStep,
    fields: ["workplace", "address"]
  },
  {
    path: "loan",
    title: "Параметры займа",
    component: LoanStep,
    fields: ["amount", "day"]
  }
]