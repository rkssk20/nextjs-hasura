import { ReactNode } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '@/styles/components/provider/containerLayout.module.scss'

type Props = {
  type: 'website' | 'article' | 'profile'
  title: string
  description: string
  image: string
  children: ReactNode
}

const ContainerLayout: NextPage<Props> = ({ type, title, description, image, children }) => {
  const ogpTitle = title ? title + ' | Next.js × Hasura' : 'Next.js × Hasura'

  const ogpDescription = description
    ? description
    : 'Next.jsとHasuraを使用したテンプレート。技術ブログ風。'

  const ogpImageUrl = image ?? '/favicon.png'

  return (
    <div className={styles.container}>
      <Head>
        {/* ページのタイトル */}
        <title>{ogpTitle}</title>
        {/* ページの概要。検索結果にも表示される */}
        <meta name='description' content={ogpDescription} />
        {/* ページの種類 */}
        <meta property='og:type' content={type} />
        {/* スマホ表示設定 */}
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />

        {/* OGPにおけるページのタイトル */}
        <meta property='og:title' content={ogpTitle} />
        {/* OGPにおけるサイト名 */}
        <meta property='og:site_name' content={ogpTitle} />
        {/* OGPにおけるページの概要 */}
        <meta property='og:description' content={ogpDescription} />
        {/* OGPにおける画像 */}
        <meta property='og:image' content={ogpImageUrl} />

        {/* Twitterカードの利用 */}
        <meta name='twitter:card' content='summary_large_image' />
        {/* Twitterカードのタイトル */}
        <meta name='twitter:title' content={ogpTitle} />
        {/* Twitterカードの説明文 */}
        <meta name='twitter:description' content={ogpDescription} />
        {/* Twitterカードの画像 */}
        <meta name='twitter:image' content={ogpImageUrl} />
        {/* Twitterアカウント */}
        <meta name='twitter:site' content='' />
      </Head>

      {children}
    </div>
  )
}

export default ContainerLayout