import NextLink from 'next/link'

import styles from '@/styles/components/header/hamburger/logout.module.scss'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ListItemText from '@mui/material/ListItemText'

const Logout = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <List>
      <NextLink href='/login' passHref>
        <ListItemButton
          className={styles.list_item_button}
          classes={{ root: styles.list_item_button_root }}
          component='a'
          onClick={handleClose}
        >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>

          <ListItemText primaryTypographyProps={{ variant: 'h5' }}>ログイン</ListItemText>
        </ListItemButton>
      </NextLink>
    </List>
  )
}

export default Logout
