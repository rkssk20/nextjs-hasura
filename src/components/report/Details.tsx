import type { Dispatch, SetStateAction, ChangeEvent } from 'react'

import styles from '@/styles/components/report/details.module.scss'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import Checkbox from '@mui/material/Checkbox'

interface DetailsProps {
  address: string
  setAddress: Dispatch<SetStateAction<string>>
  details: string
  setDetails: Dispatch<SetStateAction<string>>
  error: boolean
  checked: boolean
  setChecked: Dispatch<SetStateAction<boolean>>
}

const Details = ({
  address,
  setAddress,
  details,
  setDetails,
  error,
  checked,
  setChecked,
}: DetailsProps) => {
  const hadnleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  return (
    <div>
      <Typography className={styles.title} variant='h5'>
        メールアドレス (必須)
      </Typography>

      <InputBase
        className={styles.input}
        classes={{ root: styles.input_root }}
        inputProps={{
          maxLength: 254,
        }}
        placeholder='連絡先を入力'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      {error && (
        <Typography variant='body1' color='error'>
          正しいメールアドレスを入力してください。
        </Typography>
      )}

      <Typography className={styles.title} variant='h5'>
        詳細 (必須)
      </Typography>

      <InputBase
        className={styles.input}
        classes={{ root: styles.input_root }}
        multiline={true}
        rows={10}
        inputProps={{
          maxLength: 1000,
        }}
        placeholder='詳細を1000文字以内で教えてください'
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        error={true}
      />

      <div className={styles.rule}>
        <Checkbox checked={checked} onChange={hadnleChecked} />

        <Typography>利用規約に同意してお問い合わせする。</Typography>
      </div>
    </div>
  )
}

export default Details
