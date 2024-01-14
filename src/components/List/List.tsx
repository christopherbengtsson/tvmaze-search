import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  List as MuiList,
  Typography,
} from '@mui/material';
import { Search, Show } from '../../api';
import { LoadingList } from './LoadingList';
import { htmlToString } from '../../utils';

export interface ListProps {
  data: Search[];
  isLoading?: boolean;
  selectedIndex: number;
  onListItemClick: (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    listIndex: number,
    show: Show,
  ) => void;
}
export function List({
  data,
  isLoading,
  onListItemClick,
  selectedIndex,
}: ListProps) {
  if (data.length === 0 && !isLoading) {
    return <Typography>No results</Typography>;
  }

  return (
    <MuiList>
      {isLoading ? (
        <LoadingList />
      ) : (
        data.map(({ show }, index) => (
          <ListItem
            key={show.id}
            component="li"
            role="listitem"
            sx={{ padding: 0 }}
          >
            <ListItemButton
              selected={selectedIndex === index}
              onClick={(event) => onListItemClick(event, 0, show)}
            >
              <ListItemAvatar>
                <Avatar alt={show.name} src={show.image?.medium} />
              </ListItemAvatar>

              <ListItemText
                primary={show.name}
                secondary={htmlToString(show.summary)}
                sx={(theme) => ({
                  [theme.breakpoints.down('sm')]: {
                    '& .MuiListItemText-secondary': {
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    },
                  },
                })}
              />
            </ListItemButton>
          </ListItem>
        ))
      )}
    </MuiList>
  );
}
