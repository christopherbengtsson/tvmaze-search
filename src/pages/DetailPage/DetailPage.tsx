import { useParams } from 'react-router-dom';
import { DETAILS_URL, ShowDetails, useApi } from '../../api';
import { Skeleton, Typography } from '@mui/material';
import styled from 'styled-components';
import { InfoCard } from './InfoCard';
import { CastAvatars } from './CastAvatars';
import type { AxiosResponse } from 'axios';
import { htmlToString } from '../../utils';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Aside = styled.aside`
  img {
    float: left;
    width: 150px;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    padding-right: 8px;
  }
`;

export function DetailPage() {
  const { id } = useParams();
  const { useGet } = useApi();
  const { enqueueSnackbar } = useSnackbar();

  const {
    data: response,
    isPending,
    isError,
    error,
  } = useGet<AxiosResponse<ShowDetails>>({
    endpoint: `${DETAILS_URL}/${id}`,
    queryKey: [id],
    enabled: !!id,
    query: {
      embed: ['cast', 'seasons'],
    },
  });

  useEffect(() => {
    if (isError && !isPending) {
      enqueueSnackbar({
        message: error.message,
        variant: 'error',
      });
    }
  }, [enqueueSnackbar, error, isError, isPending]);

  if (isError && !isPending) {
    return null;
  }

  return (
    <Wrapper>
      <Typography
        variant="h2"
        component="h1"
        aria-label={isPending ? 'Loading show...' : response.data.name}
      >
        {isPending ? <Skeleton width="40%" /> : response.data.name}
      </Typography>

      <section>
        <Aside>
          {isPending ? (
            <Skeleton variant="rectangular" width="100%" height={250} />
          ) : (
            <img src={response.data.image?.original} alt={response.data.name} />
          )}
        </Aside>

        <article>
          <Typography variant="body1">
            {isPending ? (
              <Skeleton height={200} width="100%" />
            ) : (
              htmlToString(response.data.summary)
            )}
          </Typography>
        </article>
      </section>

      {!isPending && <CastAvatars cast={response.data._embedded?.cast ?? []} />}

      {isPending ? (
        <Skeleton variant="rectangular" width="100%" height={500} />
      ) : (
        <InfoCard data={response.data} />
      )}
    </Wrapper>
  );
}
