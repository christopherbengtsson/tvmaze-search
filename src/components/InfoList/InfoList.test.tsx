import { InfoList } from '.';
import { axeValidation } from '../../test/utils';

describe('<InfoList />', () => {
  axeValidation(<InfoList items={[{ term: 'term', description: 'desc' }]} />);
});
