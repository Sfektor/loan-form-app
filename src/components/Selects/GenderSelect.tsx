import { useFormContext } from "react-hook-form"
import { type FormData } from "../../types"

export const GenderSelect = () => {
  const { register, formState: { errors } } = useFormContext<FormData>()

  return (
    <div className="mb-3">
      <label className="form-label">Пол</label>

      <select
        {...register("gender", { required: "Выберите пол" })}
        className={`form-select ${errors.gender ? "is-invalid" : ""}`}
      >
        <option value="">Выберите</option>
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
      </select>

      {errors.gender && (
        <div className="invalid-feedback">
          {errors.gender.message}
        </div>
      )}
    </div>
  )
}