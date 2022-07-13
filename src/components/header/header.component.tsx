import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Header = () => (
  <AppBar position='fixed'>
    <Toolbar dir="rtl">
      <IconButton>
        <AccountBalanceWalletIcon  />
      </IconButton>
    </Toolbar>
  </AppBar>
)

export default Header;