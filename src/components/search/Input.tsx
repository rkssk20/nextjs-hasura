import useSearch from '@/hooks/atoms/useSearch'

import styles from '@/styles/components/search/input.module.scss'
import Autocomplete from '@mui/material/Autocomplete'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

const Input = () => {
  const { search, setSearch, searchHistory, handleHistory, handlePost } = useSearch()

  return (
    <Autocomplete
      className={styles.autocomplete}
      classes={{
        root: styles.autocomplete_root,
        input: styles.autocomplete_input,
        popper: styles.autocomplete_popper,
        option: styles.autocomplete_option,
      }}
      freeSolo
      openOnFocus
      value={search}
      options={searchHistory}
      isOptionEqualToValue={() => false}
      // 検索履歴から実行した場合の処理
      onChange={handleHistory}
      renderInput={(params) => (
        <div className={styles.input_field} ref={params.InputProps.ref}>
          {/* 検索欄 */}
          <input
            type='text'
            placeholder='検索'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onSubmit={handlePost}
            {...params.inputProps}
          />

          {/* 検索アイコン */}
          <IconButton aria-label='検索' onClick={handlePost}>
            <SearchIcon />
          </IconButton>
        </div>
      )}
    />
  )
}

export default Input
