import { useMemo, useCallback, Dispatch, SetStateAction } from 'react'
import SimpleMde from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

import styles from '@/styles/components/edit/markdown.module.scss'

type MarkdownProps = {
  details: string
  setDetails: Dispatch<SetStateAction<string>>
}

const Markdown = ({ details, setDetails }: MarkdownProps) => {
  const handleChange = useCallback((value: string) => {
    setDetails(value)
  }, [])

  // 再レンダリングのたびにフォーカスが外れるためuseMemo
  const options = useMemo(() => {
    return {
      placeholder: '本文 (必須)',
      toolbar: false,
      status: false,
    }
  }, [])

  return (
    <SimpleMde
      className={styles.markdown}
      options={options}
      value={details}
      onChange={handleChange}
    />
  )
}

export default Markdown
