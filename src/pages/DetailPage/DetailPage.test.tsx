import { DetailPage } from '.';
import {
  axeValidation,
  renderWithProviders,
  screen,
  waitFor,
} from '../../test/utils';

describe('<DetailPage />', () => {
  axeValidation(<DetailPage />, true);

  it('displays show details', async () => {
    renderWithProviders(<DetailPage />);

    await waitFor(() => {
      expect(screen.getByText(/Steve Carell/)).toBeInTheDocument();
    });
  });
});
