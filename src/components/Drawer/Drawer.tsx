import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Box, Grid, IconButton, SwipeableDrawer } from '@mui/material';
import { ReactNode } from 'react';

export const DRAWER_TRANSITION = 350;

interface DrawerProps {
  open: boolean;
  mobile?: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Drawer({ open, onClose, mobile, children }: DrawerProps) {
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onOpen={() => {}}
      onClose={onClose}
      disableSwipeToOpen
      transitionDuration={DRAWER_TRANSITION}
      PaperProps={{
        sx: {
          width: mobile ? '100%' : '75%',
          height: '100%',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={(theme) => ({
            padding: 1,
            pl: 3,
            borderBottom: `1px solid ${theme.palette.grey[200]}`,
          })}
        >
          <IconButton aria-label="Go back" onClick={onClose}>
            <ArrowBackIcon />
          </IconButton>
        </Grid>

        <Box
          sx={{
            padding: 3,
            height: '100%',
            width: '100%',
            display: 'flex',
            '& section': {
              width: '100%',
            },
          }}
        >
          <section>{children}</section>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
}
