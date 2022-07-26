import { useState, useRef, Dispatch, SetStateAction } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { useRecoilValue } from 'recoil'
import { accountState } from '@/lib/recoil'
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
  const account = useRecoilValue(accountState)

  // キャンセル
  const handleClose = () => {
    if (loading) return
    ;(document.getElementById('icon-button-file') as HTMLInputElement).value = ''
    setSelectImage('')
  }

  const { mutate, loading } = useAvatarUpload(handleClose)

  // 送信
  const handleConfirm = () => {
    if ((ref=== null) || loading) return

    // chromeならwebpに変換し、画質を0.5にする
    // chrome以外ではpngに変換される
    ref.current?.getImage().toBlob(
      (blob: Blob | null) => {
        if(blob === null) return

        mutate(blob, handleClose)
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
      {loading ? (
        <Circular />
      ) : (
        <CropButtons handleClose={handleClose} handleConfirm={handleConfirm} />
      )}
    </MuiDialog>
  )
}

export default Crop
