import Link from 'next/link'

import styles from '@/styles/atoms/bar.module.scss'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

type BarProps = {
  value: 0 | 1
  tab_list: {
    name: string
    url: string
  }[]
}

const Bar = ({ value, tab_list }: BarProps) => {
  return (
    <Tabs
      className={styles.tabs}
      classes={{ flexContainer: styles.tabs_flex_container }}
      value={value}
      aria-label='basic tabs'
      variant='fullWidth'
      textColor='inherit'
    >
      {tab_list.map((item) => (
        <Link key={item.name} href={item.url} as={item.url} passHref>
          <Tab className={styles.tab} label={item.name} />
        </Link>
      ))}
    </Tabs>
  )
}

export default Bar
