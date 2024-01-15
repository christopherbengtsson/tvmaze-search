import {
  act,
  axeValidation,
  fireEvent,
  renderWithProviders,
  screen,
  waitFor,
} from '../../test/utils';
import { SearchResultList } from './SearchResultList';

describe('<SearchResultList />', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  axeValidation(<SearchResultList handleListItemClick={() => {}} />, true);

  it('fetches and displays data on search', async () => {
    expect(
      renderWithProviders(<SearchResultList handleListItemClick={() => {}} />),
    ).toBeTruthy();

    fireEvent.change(screen.getByRole('searchbox'), {
      target: { value: 'test' },
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    await waitFor(() => {
      expect(screen.getByText(/Steve Carell/)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByRole('searchbox'), {
      target: { value: '' },
    });

    await waitFor(() => {
      expect(screen.queryByText(/Steve Carell/)).not.toBeInTheDocument();
    });
  });
});
