import { useState, useEffect } from 'react'

type Props = {
  handleMore: () => void
}

// 無限スクロール用。最後の要素が表示されたかを返す
const useObserver = ({ handleMore  }: Props) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (ref === null) return

    const observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && handleMore()
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
