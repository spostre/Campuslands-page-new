import { useEffect, useState } from 'react'
import { apiFetch } from '@/services/api'

export function useFetch(endpoint) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    setError(null)
    apiFetch(endpoint)
      .then((d) => active && setData(d))
      .catch((e) => active && setError(e))
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [endpoint])

  return { data, error, loading }
}
