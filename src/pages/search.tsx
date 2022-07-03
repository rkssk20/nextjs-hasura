import type { ReactElement } from 'react'
import { useRouter } from 'next/router'
import Bar from '@/atoms/Bar'
import PageLayout from '@/components/provider/PageLayout'
import ContainerLayout from '@/components/provider/ContainerLayout'
import Input from '@/components/search/Input'
import ArticlesNoWord from '@/components/search/ArticlesNoWord'
import UserNoWord from '@/components/search/UserNoWord'
import ArticlesSearch from '@/components/search/ArticlesSearch'
import UserSearch from '@/components/search/UserSearch'
import Side from '@/components/side/Side'

const Search = () => {
  const router = useRouter()
  const q = router.query.q
  const sorce = router.query.sorce

  const tab_list = [
    { name: '投稿', url: `/search${q ? `?q=${q}` : ''}` },
    { name: 'ユーザー', url: `/search?${q ? `q=${q}&` : ''}sorce=user` },
  ]

  return (
    <ContainerLayout
      type='article'
      title={q ? q + 'の検索結果' : '検索'}
      description=''
      image=''
    >
      {/* 検索欄と検索履歴 */}
      <Input />

      {/* 検索対象の選択バー */}
      <Bar tab_list={tab_list} value={Boolean(sorce) ? 1 : 0} />

      {/* 検索結果一覧 */}
      {q ? (
        sorce ? (
          <UserSearch word={q} />
        ) : (
          <ArticlesSearch word={q} />
        )
      ) : sorce ? (
        <UserNoWord />
      ) : (
        <ArticlesNoWord />
      )}
    </ContainerLayout>
  )
}

export default Search

Search.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      {page}
      
      <Side />
    </PageLayout>
  )
}
