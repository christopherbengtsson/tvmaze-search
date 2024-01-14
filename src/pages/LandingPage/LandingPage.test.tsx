import { LandingPage } from '.';
import {
  axeValidation,
  fireEvent,
  renderWithProviders,
  screen,
} from '../../test/utils';

describe('<LandingPage />', () => {
  axeValidation(<LandingPage />, true);

  it('renders details page directly on defined parameters', async () => {
    renderWithProviders(<LandingPage />);

    fireEvent.click(screen.getByLabelText('Go back'));
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
