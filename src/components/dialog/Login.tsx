import type { DialogProps } from '@/types/types'
import Dialog from '@/components/dialog/Dialog'
import LoginContent from '@/atoms/LoginContent'

const Login = ({ dialog, handleClose }: DialogProps) => {
  return (
    <Dialog dialog={dialog} handleClose={handleClose}>
      <LoginContent />
    </Dialog>
  )
}

export default Login
