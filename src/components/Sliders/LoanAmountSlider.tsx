import { useFormContext } from "react-hook-form"
import { type FormData } from "../../types"

export const LoanAmountSlider = () => {
  const { register, watch } = useFormContext<FormData>()

  const value = watch("amount")

  return (
    <div className="mb-3">
      <label className="form-label">
        Сумма займа: ${value}
      </label>

      <input
        type="range"
        min={200}
        max={1000}
        step={100}
        {...register("amount", { required: true, valueAsNumber: true })}
        className="form-range"
      />
    </div>
  )
}