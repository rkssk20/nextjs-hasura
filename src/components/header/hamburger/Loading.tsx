import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Skeleton from '@mui/material/Skeleton'

const Loading = () => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <Skeleton variant='circular' width={24} height={24} />
        </ListItemIcon>

        <ListItemText primary={<Skeleton variant='text' height={22.67} />} />
      </ListItem>
    </List>
  )
}

export default Loading
