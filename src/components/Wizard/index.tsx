import { useEffect } from 'react'
import { useFormContext } from "react-hook-form"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import type { FormData, WizardStep } from "../../types"
import { getAllowedStepIndex, getStepIndex } from "./utils"

type WizardProps = {
  steps: WizardStep[]
}

export const Wizard = ({ steps }: WizardProps) => {
  const { trigger, getValues, setFocus } = useFormContext<FormData>()
  const navigate = useNavigate()
  const { step } = useParams()

  const stepIndex = getStepIndex(steps, step)

  if (stepIndex === -1) {
    return <Navigate to={`/${steps[0].path}`} replace />
  }

  const values = getValues()
  const allowedIndex = getAllowedStepIndex(steps, values)

  if (stepIndex > allowedIndex) {
    return <Navigate to={`/${steps[allowedIndex].path}`} replace />
  }

  const currentStep = steps[stepIndex]
  const StepComponent = currentStep.component

  const isFirst = stepIndex === 0
  const isLast = stepIndex === steps.length - 1

  const next = async () => {
    const valid = await trigger(currentStep.fields)

    if (!valid) return

    const nextStep = steps[stepIndex + 1]

    if (nextStep) {
      navigate(`/${nextStep.path}`)
    }
  }

  const prev = () => {
    if (!isFirst) {
      navigate(`/${steps[stepIndex - 1].path}`)
    }
  }

  useEffect(() => {
    const field = currentStep.fields[0]
  
    const id = requestAnimationFrame(() => {
      setFocus(field)
    })
  
    return () => cancelAnimationFrame(id)
  }, [stepIndex])

  return (
    <div className="card shadow-sm p-4 mx-auto mt-3" style={{ maxWidth: 500 }}>
      <p className="text-muted mb-2">
        Шаг {stepIndex + 1} из {steps.length}
      </p>

      <h2 className="mb-4">{currentStep.title}</h2>

      <StepComponent />

      <div className="d-flex justify-content-between mt-4">
        {!isFirst && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={prev}
          >
            Назад
          </button>
        )}

        {!isLast && (
          <button
            type="button"
            className="btn btn-primary ms-auto"
            onClick={next}
          >
            Далее
          </button>
        )}
      </div>
    </div>
  )
}