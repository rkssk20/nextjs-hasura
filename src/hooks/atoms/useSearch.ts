import { useState, useEffect, SyntheticEvent } from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { searchHistorySelector } from '@/lib/recoil'

const useSearch = () => {
  const [search, setSearch] = useState('')
  const [searchHistory, setSearchHistory] = useRecoilState(searchHistorySelector)
  const router = useRouter()
  const sorce = router.query.sorce

  // ページ遷移時に検索ワードを検索欄にセット
  useEffect(() => {
    router.query.q &&
      typeof router.query.q === 'string' &&
      (() => {
        setSearch(router.query.q)
      })()
  }, [router.query.q])

  // 検索を実行
  const handlePost = () => {
    if (search.length === 0) return

    setSearchHistory([search, ...searchHistory])

    const query = Boolean(sorce) ? { q: search, sorce } : { q: search }

    router.push(
      {
        pathname: '/search',
        query,
      },
      undefined,
      {
        shallow: true,
      },
    )
  }

  // 検索履歴から実行
  const handleHistory = (_: SyntheticEvent<Element, Event>, value: string | null) => {
    if (!value) {
      if (sorce) {
        router.push(
          {
            pathname: '/search',
            query: {
              sorce,
            },
          },
          undefined,
          {
            shallow: true,
          },
        )
      } else {
        router.push(
          {
            pathname: '/search',
          },
          undefined,
          {
            shallow: true,
          },
        )
      }

      return
    }

    setSearchHistory([value, ...searchHistory])

    const query = Boolean(sorce) ? { q: value, sorce } : { q: value }

    router.push(
      {
        pathname: '/search',
        query,
      },
      undefined,
      {
        shallow: true,
      },
    )
  }

  return { search, setSearch, searchHistory, handleHistory, handlePost }
}

export default useSearch
