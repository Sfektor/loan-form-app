import type { FormData, WizardStep } from '../../types'

const isEmpty = (value: unknown) =>
  value === "" || value === null || value === undefined

export function getStepIndex(steps: WizardStep[], step?: string) {
  return steps.findIndex(s => s.path === step)
}

export function getAllowedStepIndex(steps: WizardStep[], values: FormData) {
  const firstInvalidStep = steps.findIndex(step =>
    step.fields.some(field => isEmpty(values[field]))
  )

  return firstInvalidStep === -1 ? steps.length - 1 : firstInvalidStep
}