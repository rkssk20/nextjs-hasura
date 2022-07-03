import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import type { definitions } from '@/types/supabase'
import { supabase } from '@/lib/supabaseClient'
import { accountState, notificateState } from '@/lib/recoil'
import AvatarIcon from '@/atoms/Icon/AvatarIcon'
import { ContainedButton, OutlinedButton } from '@/atoms/Button'
import InitialIcon from '@/atoms/Icon/InitialIcon'
import Following from '@/components/account/Following'

import styles from '@/styles/components/account/profiles.module.scss'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import MuiLink from '@mui/material/Link'
import CircularProgress from '@mui/material/CircularProgress'

type ProfileProps = {
  path: string
  item: definitions['profiles']
}

const Profile = ({ path, item }: ProfileProps) => {
  const account = useRecoilValue(accountState)
  const setNotificate = useSetRecoilState(notificateState)
  const user = supabase.auth.user()
  const router = useRouter()

  // ログアウト処理
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      setNotificate({
        open: true,
        message: 'ログアウトに失敗しました。',
      })

      return
    }

    router.push('/')
  }

  return (
    <DialogContent>
      <Stack direction='row' alignItems='center'>
        {/* ユーザーアイコン */}
        {item.avatar ? (
          <AvatarIcon
            src={
              process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/avatars/' + item.avatar
            }
            variant='large'
          />
        ) : (
          <InitialIcon username={item.username} variant='large' />
        )}

        <Stack justifyContent='center' className={styles.profile_right}>
          {/* ユーザー名 */}
          <Typography component='p' variant='h3'>
            {item.username}
          </Typography>

          {account.loading ? (
            <CircularProgress
              className={styles.circular}
              classes={{ root: styles.circular_root }}
              size={38.25}
            />
          ) : path == user?.id ? (
            // 本人なら設定、ログアウト
            <Stack
              className={styles.buttons}
              direction='row'
              alignItems='center'
              justifyContent='center'
            >
              <ContainedButton text='設定' handle={() => router.push(`/account/setting`)} />

              <OutlinedButton text='ログアウト' handle={handleLogout} />
            </Stack>
          ) : (
            // 他人ならフォロー、フォロワー
            <Following path={path} />
          )}
        </Stack>
      </Stack>

      {/* 自己紹介 */}
      <Typography className={styles.details}>{item.details}</Typography>

      {/* フォローとフォロワー */}
      <Stack direction='row'>
        <NextLink href={`/account/${router.query.id}/follow`} as={`/account/${router.query.id}/follow`} passHref>
          <MuiLink color='inherit' underline='hover' variant='body1'>
            <span className={styles.span_count}>{item.follow_count.toLocaleString()}</span>
            フォロー
          </MuiLink>
        </NextLink>

        <NextLink href={`/account/${router.query.id}/follower`} as={`/account/${router.query.id}/follower`} passHref>
          <MuiLink
            className={styles.follower}
            classes={{ root: styles.follower_root }}
            color='inherit'
            underline='hover'
            variant='body1'
          >
            <span className={styles.span_count}>{item.follower_count.toLocaleString()}</span>
            フォロワー
          </MuiLink>
        </NextLink>
      </Stack>
    </DialogContent>
  )
}

export default Profile
