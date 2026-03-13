import { useEffect, useState } from "react"

let cachedCategories: string[] | null = null

export const useWorkplaces = () => {
	const [data, setData] = useState<string[]>(cachedCategories || [])
	const [loading, setLoading] = useState(!cachedCategories)
	const [error, setError] = useState<string | null>(null)

	const fetchWorkplaces = async () => {
		setLoading(true)
		setError(null)

		try {
			const response = await fetch("https://dummyjson.com/products/category-list")

			if (!response.ok) {
				throw new Error("Ошибка загрузки")
			}

			const result: string[] = await response.json()

			cachedCategories = result
			setData(result)

		} catch (e) {
			console.error(e)
			setError("Не удалось загрузить список")
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		if (cachedCategories) {
			setLoading(false)
			return
		}

		fetchWorkplaces()
	}, [])

	return { data, loading, error, refetch: fetchWorkplaces }
}