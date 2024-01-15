import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Rating,
} from '@mui/material';
import { Network, Schedule, ShowDetails, WebChannel } from '../../api';
import { InfoList } from '../../components';

const toSchedule = ({ time, days }: Schedule) => {
  if (!time.length && !days.length) {
    return '-';
  }

  let schedule = '';

  if (days && days.length > 0) {
    const pluralDays = days.map((day) => (day.endsWith('s') ? day : day + 's'));
    schedule += pluralDays.join(', ') + (time ? ' at ' : '');
  }

  if (time) {
    schedule += time;
  }

  return schedule;
};

const toNetwork = (
  network: Network | WebChannel | null,
  start: string | null,
  end: string | null,
) => {
  const networkString = network?.name ?? '-';

  if (!start) {
    return networkString;
  }

  return `${networkString} (${start} - ${end ?? 'now'})`;
};

const withFallbackString = (str: string | null, fallback = '-') => {
  return str?.trim().length ? str : fallback;
};

export function InfoCard({ data }: { data: ShowDetails }) {
  return (
    <Card
      sx={(theme) => ({ background: theme.palette.grey[100] })}
      component="section"
    >
      <CardHeader title="Show info" />
      <Divider />
      <CardContent>
        <InfoList
          items={[
            {
              term: 'Number of seasons',
              description: data._embedded?.seasons?.length.toString() ?? '-',
            },
            {
              term: data.network ? 'Network' : 'Web channel',
              description: toNetwork(
                data.network ?? data.webChannel,
                data.premiered,
                data.ended,
              ),
            },
            {
              term: 'Schedule',
              description: toSchedule(data.schedule),
            },
            {
              term: 'Status',
              description: withFallbackString(data.status),
            },
            {
              term: 'Show Type',
              description: withFallbackString(data.type),
            },
            {
              term: 'Genres',
              description: data.genres.length ? data.genres.join(', ') : '-',
            },
            {
              term: 'Official site',
              description: data.officialSite ? (
                <Link href={data.officialSite} target="_blank">
                  {data.officialSite}
                </Link>
              ) : (
                '-'
              ),
            },
          ]}
        />

        <Rating
          max={10}
          defaultValue={data.rating.average ?? 0}
          precision={0.1}
          readOnly
        />
      </CardContent>
    </Card>
  );
}
