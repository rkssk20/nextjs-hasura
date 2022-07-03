import { useEffect } from 'react'
import { useRouter } from 'next/router'

// ページ遷移を検知して関数を発動する
const usePopState = (Fetch: (e?: MouseEvent) => void) => {
  const router = useRouter()

  useEffect(() => {
    router.beforePopState(() => {
      Fetch()

      return true
    })

    return () => router.beforePopState(() => true)
  }, [])
}

export default usePopState
