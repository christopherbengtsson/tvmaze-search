import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import {
  SnackbarProvider as NotistackProvider,
  closeSnackbar,
} from 'notistack';
import { useSmallScreen } from '../../hooks';

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const smallScreen = useSmallScreen();

  return (
    <NotistackProvider
      preventDuplicate
      anchorOrigin={{
        horizontal: smallScreen ? 'left' : 'center',
        vertical: smallScreen ? 'bottom' : 'top',
      }}
      action={(id) => (
        <IconButton
          size="small"
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={() => closeSnackbar(id)}
          role="close"
          sx={{ marginRight: 1 }}
        >
          <CloseIcon />
        </IconButton>
      )}
    >
      {children}
    </NotistackProvider>
  );
}
