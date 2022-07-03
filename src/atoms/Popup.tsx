import type { Dispatch, ReactNode, SetStateAction } from 'react'

import Menu from '@mui/material/Menu'

type Props = {
  anchorEl: null | HTMLElement
  setAnchorEl: Dispatch<SetStateAction<null | HTMLElement>>
  children: ReactNode
}

const Popup = ({ anchorEl, setAnchorEl, children }: Props) => {
  return (
    <Menu
      id='positioned-menu'
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
    >
      {children}
    </Menu>
  )
}

export default Popup
