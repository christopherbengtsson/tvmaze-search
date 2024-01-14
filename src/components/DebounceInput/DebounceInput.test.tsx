import { DebounceInput } from '.';
import {
  axeValidation,
  fireEvent,
  renderWithProviders,
  screen,
} from '../../test/utils';

describe('<DebounceInput />', () => {
  axeValidation(<DebounceInput placeholder="search" onDebounce={() => {}} />);

  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('forwards props to TextField', () => {
    renderWithProviders(
      <DebounceInput onDebounce={() => {}} label="Test Label" />,
    );
    expect(screen.getByLabelText('Test Label')).toBeDefined();
  });

  it('debounces input changes', async () => {
    const mockDebounce = vi.fn();
    renderWithProviders(
      <DebounceInput onDebounce={mockDebounce} delay={500} />,
    );

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test' },
    });
    expect(mockDebounce).not.toHaveBeenCalled();

    vi.advanceTimersByTime(200);
    expect(mockDebounce).not.toHaveBeenCalled();

    vi.advanceTimersByTime(250);
    expect(mockDebounce).not.toHaveBeenCalled();

    vi.advanceTimersByTime(50);
    expect(mockDebounce).toHaveBeenCalledWith('test');
  });
});
