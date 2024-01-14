import { Layout } from '.';
import { axeValidation } from '../../test/utils';

describe('<Layout />', () => {
  axeValidation(<Layout title="title" />);
});
