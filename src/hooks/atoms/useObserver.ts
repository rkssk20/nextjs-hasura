import { useState, useEffect } from 'react'

type Props = {
  hasNextPage: boolean | undefined
  fetchNextPage: () => void
}

// 無限スクロール用。最後の要素が表示されたかを返す
const useObserver = ({ hasNextPage, fetchNextPage }: Props) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (ref === null) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        hasNextPage && fetchNextPage()
      }
    })

    observer.observe(ref)

    // 他ページでは監視しない
    return () => {
      if (ref !== null) {
        observer.unobserve(ref)
      }
    }
  }, [ref])

  return setRef
}

export default useObserver
