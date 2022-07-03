import { useState, useEffect } from 'react'
import useProfilesDetails from '@/hooks/select/useProfilesDetails'
import useSetting from '@/hooks/mutate/update/useSetting'
import { ContainedButton, DisabledButton } from '@/atoms/Button'
import Circular from '@/atoms/Circular'
import Icon from '@/components/account/setting/Icon'

import styles from '@/styles/components/account/setting/input.module.scss'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'

const Input = () => {
  const [newUserName, setNewUserName] = useState('')
  const [newDetails, setNewDetails] = useState<string | null>('')
  const { data, isFetching } = useProfilesDetails()
  const { isLoading, mutate } = useSetting({ newUserName, newDetails })

  useEffect(() => {
    if (!data) return

    setNewUserName(data.username)
    setNewDetails(data.details ?? null)
  }, [data])

  if (isFetching) <Circular />

  if (data === undefined) return null

  return (
    <div>
      <Typography className={styles.title} variant='h5'>
        アイコン設定
      </Typography>

      {/* アイコンの変更 */}
      <Icon newUserName={newUserName} />

      <Typography className={styles.title} variant='h5'>
        プロフィール設定
      </Typography>

      <Typography className={styles.sub_title} variant='h6'>
        アカウント名
      </Typography>

      <div className={styles.input_field}>
        <InputBase
          className={styles.input}
          classes={{ root: styles.input_root }}
          inputProps={{
            maxLength: 15,
          }}
          placeholder='名前'
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />

        <Typography>{newUserName.length + ' / 15'}</Typography>
      </div>

      <Typography className={styles.sub_title} variant='h6'>
        自己紹介
      </Typography>

      <div className={styles.input_field}>
        <InputBase
          className={styles.input}
          classes={{ root: styles.input_root }}
          inputProps={{
            maxLength: 140,
          }}
          placeholder='自己紹介'
          multiline
          value={newDetails ?? ''}
          onChange={(e) => setNewDetails(e.target.value)}
        />

        <Typography>{(newDetails ? newDetails.length : 0) + ' / 140'}</Typography>
      </div>

      <div className={styles.save}>
        {(newUserName.length > 0 && data.username !== newUserName) ||
        data.details !== newDetails ? (
          <ContainedButton text='保存する' handle={() => mutate()} />
        ) : (
          <DisabledButton text='保存する' />
        )}
      </div>
    </div>
  )
}

export default Input