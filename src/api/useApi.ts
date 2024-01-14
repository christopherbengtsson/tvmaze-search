import { QueryKey, useQuery } from '@tanstack/react-query';
import { GetApi } from './types';
import qs from 'qs';
import axios, { AxiosError, AxiosResponse } from 'axios';

export function useApi() {
  function useGet<ApiResponse>({ endpoint, queryKey, query, enabled }: GetApi) {
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

  return { useGet };
}
