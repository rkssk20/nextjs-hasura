import { useState, useRef, Dispatch, SetStateAction } from 'react'
import AvatarEditor from 'react-avatar-editor'
import useAvatarUpload from '@/hooks/mutate/useAvatarUpload'
import CropSlider from '@/atoms/Crop/CropSlider'
import CropButtons from '@/atoms/Crop/CropButtons'
import Circular from '@/atoms/Circular'

import MuiDialog from '@mui/material/Dialog'

type Props = {
  selectImage: string
  setSelectImage: Dispatch<SetStateAction<string>>
}

const Crop = ({ selectImage, setSelectImage }: Props) => {
  const [scale, setScale] = useState(10)
  const ref = useRef<AvatarEditor>(null)

  // キャンセル
  const handleClose = () => {
    if (isLoading) return
    ;(document.getElementById('icon-button-file') as HTMLInputElement).value = ''
    setSelectImage('')
  }

  const { mutate, isLoading } = useAvatarUpload(handleClose)

  // 送信
  const handleConfirm = () => {
    if ((ref=== null) || isLoading) return

    // chromeならwebpに変換し、画質を0.5にする
    // chrome以外ではpngに変換される
    ref.current?.getImage().toBlob(
      (blob: Blob | null) => {
        if(blob === null) return

        const type = blob.type
        const index = type.indexOf('/')

        mutate({ blob, type: type.substring(index + 1) })
      },
      'image/webp',
      0.5,
    )
  }

  return (
    <MuiDialog open={Boolean(selectImage)} onClose={handleClose}>
      {/* 画像の切り抜き */}
      <AvatarEditor
        ref={ref}
        image={selectImage}
        width={300}
        height={300}
        border={0}
        color={[0, 0, 0, 0.6]}
        borderRadius={9999}
        scale={scale / 10}
      />

      {/* 画像サイズのスライダー */}
      <CropSlider scale={scale} setScale={setScale} />

      {/* ボタン全体 */}
      {isLoading ? (
        <Circular />
      ) : (
        <CropButtons handleClose={handleClose} handleConfirm={handleConfirm} />
      )}
    </MuiDialog>
  )
}

export default Crop
