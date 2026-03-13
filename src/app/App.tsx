import { useState } from 'react'
import { FormProvider, useForm } from "react-hook-form"
import { Outlet, useNavigate } from "react-router-dom"
import { useSubmit } from '../api'
import { Modal } from '../components'
import type { FormData } from "../types"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [formValues, setFormValues] = useState<FormData | null>(null)

  const { submit, error, loading } = useSubmit()
  const navigate = useNavigate()

  const methods = useForm<FormData>({
    mode: "onChange",
    shouldUnregister: false,
    defaultValues: {
      phone: '',
      firstName: '',
      lastName: '',
      gender: '',
      address: '',
      workplace: '',
      amount: 200,
      day: 10
    }
  })

  const onSubmit = async (data: FormData) => {
    setShowModal(true)
    setFormValues(data)

    await submit(`${data.firstName} ${data.lastName}`)

    if (!error) {
      navigate('/', { replace: true })
      methods.reset()
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Outlet />
      </form>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Результат заявки"
        loading={loading}
        error={error}
      >
        <p>
          Поздравляем, {formValues?.lastName || ""} {formValues?.firstName || ""}. 
          Вам одобрено {formValues?.amount || ""}$ на {formValues?.day || ""} дней.
        </p>
      </Modal>
    </FormProvider>
  )
}

export default App