import { Dispatch, SetStateAction } from 'react'

import styles from '@/styles/atoms/crop/cropSlider.module.scss'
import Slider from '@mui/material/Slider'
import ImageIcon from '@mui/icons-material/Image'

type Props = {
  scale: number
  setScale: Dispatch<SetStateAction<number>>
}

const CropSlider = ({ scale, setScale }: Props) => {
  return (
    <div className={styles.slider_field}>
      <ImageIcon color='disabled' />

      <Slider
        className={styles.slider}
        aria-label='Volume'
        min={10}
        max={50}
        value={scale}
        onChange={(e, newValue) => setScale(newValue as number)}
      />

      <ImageIcon fontSize='large' color='disabled' />
    </div>
  )
}

export default CropSlider
