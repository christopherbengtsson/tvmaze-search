import { QueryKey, useQuery } from '@tanstack/react-query';
import qs from 'qs';
import axios, { AxiosError, AxiosResponse } from 'axios';

interface UseGetProps {
  endpoint: string;
  queryKey: QueryKey;
  query?: Record<string, string | number | object | undefined>;
  enabled?: boolean;
  onError?: () => void;
}

export function useGet<ApiResponse>({
  endpoint,
  queryKey,
  query,
  enabled,
}: UseGetProps) {
  const stringParams = qs.stringify(query, {
    skipNulls: true,
    indices: false,
    arrayFormat: 'brackets',
  });

  const queryFn = async () => {
    const params = stringParams ? `?${stringParams}` : '';

    return await axios.get(endpoint + params);
  };

  return useQuery<
    AxiosResponse<ApiResponse>,
    AxiosError,
    ApiResponse,
    QueryKey
  >({
    queryKey,
    queryFn,
    enabled,
  });
}
