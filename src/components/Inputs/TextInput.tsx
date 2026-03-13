import { useFormContext } from "react-hook-form"
import { type FormData } from "../../types"

type Props = {
  name: keyof FormData
  label: string
}

export const TextInput = ({ name, label }: Props) => {
  const { register, formState: { errors } } = useFormContext<FormData>()

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>

      <input
        type='text'
        {...register(name, { required: "Обязательное поле" })}
        className={`form-control ${errors[name] ? "is-invalid" : ""}`}
      />

      {errors[name] && (
        <div className="invalid-feedback">
          {errors[name]?.message as string}
        </div>
      )}
    </div>
  )
}