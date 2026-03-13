import { useFormContext } from "react-hook-form"
import { type FormData } from "../../types"

export const LoanDaySlider = () => {
  const { register, watch } = useFormContext<FormData>()

  const value = watch("day")

  return (
    <div className="mb-3">
      <label className="form-label">
        Срок займа: {value} дней
      </label>

      <input
        type="range"
        min={10}
        max={30}
        step={1}
        {...register("day", { required: true, valueAsNumber: true })}
        className="form-range"
      />
    </div>
  )
}