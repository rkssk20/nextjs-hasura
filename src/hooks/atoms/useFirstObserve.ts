import { useRef, useEffect } from 'react'

// 初回の表示を監視する
const useFirstObserve = (Fetch: () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current === null) return

    // 初回の表示時に関数を実行し、監視を解除する
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        Fetch()
        observer.unobserve(entry.target)
      }
    })

    observer.observe(ref.current)

    // 他ページでは監視しない
    return () => {
      if (ref.current !== null) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return ref
}

export default useFirstObserve
