import styles from '@/styles/components/report/select.module.scss'
import MuiSelect from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { Dispatch, SetStateAction } from 'react'

import InputBase from '@mui/material/InputBase'

type SelectProps = {
  genru: number | null
  setGenru: Dispatch<SetStateAction<number | null>>
  menu_item: string[]
}

const Select = ({ genru, setGenru, menu_item }: SelectProps) => {
  return (
    <MuiSelect
      className={styles.select}
      MenuProps={{
        PaperProps: { elevation: 3 },
      }}
      value={genru ?? 'null'}
      input={<InputBase className={styles.input} />}
      onChange={(e) => setGenru(e.target.value as number)}
    >
      <MenuItem className={styles.none_menu_item} value={'null'}>
        項目を選択
      </MenuItem>

      {menu_item.map((item, index) => (
        <MenuItem key={item} value={index}>
          {item}
        </MenuItem>
      ))}
    </MuiSelect>
  )
}

export default Select
