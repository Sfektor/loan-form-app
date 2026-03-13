import { useFormContext } from "react-hook-form"
import { useWorkplaces } from '../../api'
import { type FormData } from "../../types"

export const WorkplaceSelect = () => {
  const { data, loading, error, refetch } = useWorkplaces()

  const { register, formState: { errors } } = useFormContext<FormData>()

  return (
    <div className="mb-3">
      <label className="form-label">Место работы</label>

      <select
        disabled={loading || !!error}
        {...register("workplace", { required: "Выберите место работы" })}
        className={`form-select ${errors.workplace ? "is-invalid" : ""}`}
      >
        {loading && <option value="">Загрузка...</option>}

        {error && <option value="">Ошибка загрузки</option>}

        {!loading && !error && (
          <>
            <option value="">Выберите</option>

            {data.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </>
        )}
      </select>

      {errors.workplace && (
        <div className="invalid-feedback">
          {errors.workplace.message}
        </div>
      )}

      {error && (
        <button
          type="button"
          className="btn btn-outline-secondary mt-2"
          onClick={refetch}
        >
          Повторить загрузку
        </button>
      )}
    </div>
  )
}