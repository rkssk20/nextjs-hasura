import { ReactElement, useState, useEffect } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '@/lib/firebase'
import { ContainedButton } from '@/atoms/Button'
import ArticleImage from '@/atoms/Image/ArticleImage'
import Introduction from '@/atoms/Introduction'
import PageLayout from '@/components/provider/PageLayout'
import ContainerLayout from '@/components/provider/ContainerLayout'
import Side from '@/components/side/Side'

import styles from '@/styles/pages/about.module.scss'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

const About = () => {
  const [image, setImage] = useState('')
  const router = useRouter()

  useEffect(() => {
    (async() => {
      const url = await getDownloadURL(ref(storage, 'other/C61F8A5A-DEB2-4673-85B1-3B96ED656A69_1_201_a.jpeg'));
      setImage(url);
    })();
  }, [])

  return (
    <ContainerLayout
      type='article'
      title='このサイトについて'
      description=''
      image=''
    >
      <Typography className={styles.title} classes={{ root: styles.title_root }} variant='h3'>
        技術選定
      </Typography>

      <NextLink href='/article/2VUSR4cSHml0oVyiQlLsU' passHref>
        <MuiLink className={styles.link}>Next.js × Hasuraの技術選定</MuiLink>
      </NextLink>

      <Typography className={styles.title} classes={{ root: styles.title_root }} variant='h3'>
        GitHubリポジトリ
      </Typography>

      <NextLink href='https://github.com/rkssk20/nextjs-hasura' passHref>
        <MuiLink className={styles.link} target='_blank'>
          rkssk20/nextjs-hasura
        </MuiLink>
      </NextLink>

      <div className={styles.button}>
        <ContainedButton text='かんたんログイン' handle={() => router.push('/login')} />
      </div>

      { image && <ArticleImage image={ image } /> }
    </ContainerLayout>
  )
}

export default About

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <Introduction details={ false } />

      {page}

      <Side />
    </PageLayout>
  )
}
