import { AxiosResponse } from 'axios';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { SEARCH_URL, Search, Show, useGet } from '../../api';
import { DebounceInput, List } from '../../components';

interface SearchResultListProps {
  handleListItemClick: (show: Show) => void;
}

export function SearchResultList({
  handleListItemClick,
}: SearchResultListProps) {
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

  useEffect(() => {
    if (isError) {
      enqueueSnackbar({
        message: error.message,
        variant: 'error',
      });
    }
  }, [isError, error, enqueueSnackbar]);

  const onListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    show: Show,
  ) => {
    setSelectedIndex(index);
    handleListItemClick(show);
  };

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
