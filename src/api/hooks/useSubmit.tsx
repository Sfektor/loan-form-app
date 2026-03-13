import { useState } from "react"

export const useSubmit = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (fullName: string) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: fullName
        })
      })

      if (!response.ok) {
        throw new Error("Ошибка отправки")
      }

      const result = await response.json()
      return result

    } catch (e) {
      setError("Не удалось отправить заявку")
      throw e
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, error }
}