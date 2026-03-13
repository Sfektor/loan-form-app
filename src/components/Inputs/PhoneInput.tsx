import { Controller, useFormContext } from "react-hook-form"
import { IMaskInput } from "react-imask"
import { type FormData } from "../../types"

export const PhoneInput = () => {
  const { control, formState: { errors } } = useFormContext<FormData>()

  return (
    <div className="mb-3">
      <label className="form-label">Телефон</label>

      <Controller
        name="phone"
        control={control}
        rules={{
          required: "Обязательное поле",
          minLength: {
            value: 10,
            message: "Введите полный номер"
          }
        }}
        render={({ field }) => (
          <IMaskInput
            {...field}
            mask="0000 000 000"
            type="tel"
            placeholder="0XXX XXX XXX"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            onAccept={(_, mask) => field.onChange(mask.unmaskedValue)}
          />
        )}
      />

      {errors.phone && (
        <div className="invalid-feedback">
          {errors.phone.message}
        </div>
      )}
    </div>
  )
}