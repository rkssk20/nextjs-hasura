import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import Crop from '@/components/edit/Crop'

import styles from '@/styles/components/edit/image.module.scss'
import Button from '@mui/material/Button'
import ImageIcon from '@mui/icons-material/Image'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'

interface ImageProps {
  image: Blob | null
  setImage: Dispatch<SetStateAction<Blob | null>>
}

const Image = ({ image, setImage }: ImageProps) => {
  const [selectImage, setSelectImage] = useState('')
  // 画像選択
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return
    setSelectImage(window.URL.createObjectURL(e.target.files[0]))
  }

  // 洗濯中の画像をキャンセル
  const handleCancel = () => {
    ;(document.getElementById('icon-button-file') as HTMLInputElement).value = ''
    setImage(null)
  }

  return (
    <div className={styles.label}>
      <label htmlFor='icon-button-file'>
        {/* 表示せずボタンと連携するinput */}
        <input
          className={styles.hidden_button}
          accept='image/*'
          id='icon-button-file'
          type='file'
          onChange={handleImage}
        />

        {!image && (
          // 未選択時、画像選択ボタン
          <Button
            className={styles.image_button}
            classes={{ root: styles.image_button_root }}
            aria-label='upload picture'
            component='span'
            disableElevation
            startIcon={<ImageIcon />}
          >
            画像を選択
          </Button>
        )}
      </label>

      {image && (
        // 選択時、画像とキャンセルボタン
        <div className={styles.image_field}>
          <Badge
            className={ styles.badge }
            classes={{
              root: styles.badge_root
            }}
            badgeContent={
              <IconButton className={styles.cancel} onClick={handleCancel}>
                <ClearIcon className={styles.clear} fontSize='large' />
              </IconButton>
            }
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <img className={styles.image} alt='選択中の画像' src={URL.createObjectURL(image)} />
          </Badge>
        </div>
      )}

      {/* 切り抜きのダイアログ */}
      <Crop selectImage={selectImage} setSelectImage={setSelectImage} setImage={setImage} />
    </div>
  )
}

export default Image
