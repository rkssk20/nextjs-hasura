import type { ReactElement } from 'react'
import NextLink from 'next/link'
import PageLayout from '@/components/provider/PageLayout'
import ContainerLayout from '@/components/provider/ContainerLayout'
import LoginOnly from '@/components/provider/LoginOnly'
import Input from '@/components/account/setting/Input'
import Side from '@/components/side/Side'

import styles from '@/styles/pages/account/setting.module.scss'
import DialogContent from '@mui/material/DialogContent'
import Divider from '@mui/material/Divider'
import MuiLink from '@mui/material/Link'
import useMediaQuery from '@mui/material/useMediaQuery'

const Setting = () => {
  return (
    <ContainerLayout type='article' title='設定' description='' image=''>
      <LoginOnly>
        <DialogContent>
          <Input />

          <Divider className={styles.divider} classes={{ root: styles.divider_root }} />

          <NextLink href='/account/withdrawal' passHref>
            <MuiLink variant='caption' color='gray' underline='hover'>
              退会する
            </MuiLink>
          </NextLink>

          <Divider className={styles.under_divider} />
        </DialogContent>
      </LoginOnly>
    </ContainerLayout>
  )
}

export default Setting

const MediaQuery = () => {
  const tablet = useMediaQuery('(min-width: 768px)')

  if(tablet) {
    return <Side />
  } else {
    return null
  }
}

Setting.getLayout = function getLayout(page: ReactElement) {

  return (
    <PageLayout>
      {page}
      
      <MediaQuery />
    </PageLayout>
  )
}
