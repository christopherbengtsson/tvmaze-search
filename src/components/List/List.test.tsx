import { List } from '.';
import { Search } from '../../api';
import { mockSearch } from '../../test/mocks/data/search';
import { axeValidation } from '../../test/utils';

describe('<List />', () => {
  axeValidation(
    <List
      data={mockSearch as Search[]}
      onListItemClick={() => {}}
      selectedIndex={-1}
    />,
  );

  axeValidation(
    <List
      data={mockSearch as Search[]}
      onListItemClick={() => {}}
      selectedIndex={-1}
      isLoading
    />,
  );
});
