import { LandingPage } from '.';
import { axeValidation } from '../../test/utils';

describe('<LandingPage />', () => {
  axeValidation(<LandingPage />, true);
});
