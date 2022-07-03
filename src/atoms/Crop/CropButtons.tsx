import { ContainedButton, OutlinedButton } from '@/atoms/Button'

import styles from '@/styles/atoms/crop/cropButtons.module.scss'

type Props = {
  handleClose: () => void
  handleConfirm: () => void
}

const CropButtons = ({ handleClose, handleConfirm }: Props) => {
  return (
    <div className={styles.button_field}>
      <OutlinedButton text='キャンセル' handle={handleClose} />
      <ContainedButton text='変更する' handle={handleConfirm} />
    </div>
  )
}

export default CropButtons
