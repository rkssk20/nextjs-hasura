import Image from 'next/image'

import styles from '@/styles/atoms/articleImage.module.scss'

const ArticleImage = ({ image }: { image: string }) => {
  return (
    <div className={styles.image_fill}>
      <Image
        src={image}
        quality={70}
        alt='見出し画像'
        layout='fill'
        objectFit='cover'
      />
    </div>
  )
}

export default ArticleImage