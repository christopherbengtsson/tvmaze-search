import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
} from '@mui/material';
import { useSmallScreen } from '../../hooks';

export function LoadingList() {
  const smallScreen = useSmallScreen();

  return new Array(10).fill(null).map((_, index) => (
    <ListItem key={index}>
      <ListItemAvatar>
        <Skeleton variant="circular" width={40} height={40} />
      </ListItemAvatar>
      <ListItemText
        primary={<Skeleton height={24} width="30%" />}
        secondary={<Skeleton height={smallScreen ? 20 : 60} width="100%" />}
      />
    </ListItem>
  ));
}
