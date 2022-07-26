import type { Dispatch, SetStateAction } from 'react'

import styles from '@/styles/components/edit/categories.module.scss'
import type { SelectChangeEvent } from '@mui/material'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import InputBase from '@mui/material/InputBase'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

interface CategoriesProps {
  categories: number[]
  setCategories: Dispatch<SetStateAction<number[]>>
}

const Categories = ({ categories, setCategories }: CategoriesProps) => {
  // カテゴリを選択
  const handleChange = (e: SelectChangeEvent<number[]>) => {
    setCategories(e.target.value as number[])
  }

  return (
    <Select
      className={styles.select}
      classes={{ select: styles.select_root }}
      multiple
      displayEmpty
      value={categories}
      color={ undefined }
      renderValue={(selected) =>
        selected.length === 0 ? (
          <span className={styles.empty}>
            カテゴリを選択
            <ArrowDropDownIcon />
          </span>
        ) : (
          selected.map((item) => (
            <span key={item}>
              {
                (item === 0) ? '# Next.js' :
                (item === 1) ? '# Supabase' :
                (item === 2) ? '# Hasura' : '# Firebase'
              }
            </span>
          ))
        )
      }
      input={
        <InputBase
          className={styles.input}
          classes={{
            input: styles.input_input,
            focused: styles.input_focused,
          }}
        />
      }
      MenuProps={{ PaperProps: { elevation: 3 } }}
      IconComponent={() => <></>}
      onChange={handleChange}
    >
      {['# Next.js', '# Supabase', '# Hasura', '# Firebase'].map((item, index) => (
        <MenuItem
          className={styles.menu_item}
          classes={{ root: styles.menu_item_selected }}
          key={item}
          value={index}
        >
          <Checkbox checked={categories.indexOf(index) > -1} />
          {item}
        </MenuItem>
      ))}
    </Select>
  )
}

export default Categories
