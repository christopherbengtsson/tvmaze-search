import { Avatar, AvatarGroup } from '@mui/material';
import { Cast } from '../../api';

export function CastAvatars({ cast }: { cast: Cast[] }) {
  return (
    <AvatarGroup max={8}>
      {cast.map(({ person }) => (
        <Avatar
          imgProps={{ loading: 'lazy' }}
          key={person.name}
          alt={person.name}
          src={person.image?.medium}
        />
      ))}
    </AvatarGroup>
  );
}
