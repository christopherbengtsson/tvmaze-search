import { renderHook, waitFor } from '@testing-library/react';
import { SEARCH_URL, useApi } from '.';
import { wrapper } from '../test/utils';
import { mockSearch } from '../test/mocks/data/search';

describe('useApi', () => {
  it('fetches data', async () => {
    const { result } = renderHook(
      () =>
        useApi().useGet<{ data: string }>({
          endpoint: SEARCH_URL,
          queryKey: ['testKey'],
          query: { sampleParam: 'test', sampleParam2: ['some', 'other'] },
          enabled: true,
        }),
      { wrapper },
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data?.data).toEqual(mockSearch);
  });

  it('handles network errors', async () => {
    const { result } = renderHook(
      () =>
        useApi().useGet<{ data: string }>({
          endpoint: '/error',
          queryKey: ['testError'],
          query: {},
          enabled: true,
        }),
      { wrapper },
    );

    await waitFor(() => expect(result.current.isError).toBe(true));
  });
});
