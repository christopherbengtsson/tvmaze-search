import { List } from '.';
import { Search } from '../../api';
import { mockShow } from '../../test/mockData/show';
import { axeValidation } from '../../test/utils';

describe('<List />', () => {
  axeValidation(
    <List
      data={[{ score: 0, show: mockShow }] as Search[]}
      onListItemClick={() => {}}
      selectedIndex={-1}
    />,
  );

  axeValidation(
    <List
      data={[{ score: 0, show: mockShow }] as Search[]}
      onListItemClick={() => {}}
      selectedIndex={-1}
      isLoading
    />,
  );
});
