import { AxiosResponse } from 'axios';
import { SEARCH_URL, Search, Show, useApi } from '../../api';
import { DebounceInput, List } from '../../components';
import { useState } from 'react';
import { useSnackbar } from 'notistack';

interface SearchResultListProps {
  handleListItemClick: (show: Show) => void;
}

export function SearchResultList({
  handleListItemClick,
}: SearchResultListProps) {
  const { useGet } = useApi();
  const { enqueueSnackbar } = useSnackbar();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState('');

  const {
    data: response,
    isPending,
    error,
    isError,
  } = useGet<AxiosResponse<Search[]>>({
    endpoint: SEARCH_URL,
    queryKey: [`search/${searchTerm}`],
    query: { q: searchTerm },
    enabled: !!searchTerm.length,
  });

  const onListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    show: Show,
  ) => {
    setSelectedIndex(index);
    handleListItemClick(show);
  };

  if (isError) {
    enqueueSnackbar({
      message: error.message,
      variant: 'error',
    });
  }

  return (
    <>
      <DebounceInput
        placeholder="Search by show name..."
        fullWidth
        onDebounce={(value) => setSearchTerm(value)}
        type="search"
      />

      {searchTerm && !isError && (
        <List
          data={response?.data ?? []}
          isLoading={isPending}
          onListItemClick={onListItemClick}
          selectedIndex={selectedIndex}
        />
      )}
    </>
  );
}