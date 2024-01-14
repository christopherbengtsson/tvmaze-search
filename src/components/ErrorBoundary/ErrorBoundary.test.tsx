import { ErrorBoundary } from '.';
import { axeValidation, render } from '../../test/utils';

const errorMessage = 'TestError';
const BadComponent = () => {
  throw new Error(errorMessage);
};

describe('<ErrorBoundary />', () => {
  axeValidation(
    <ErrorBoundary>
      <></>
    </ErrorBoundary>,
  );
  it('renders children', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>child</div>
      </ErrorBoundary>,
    );

    expect(getByText('child')).toBeTruthy();
  });

  it('catches errors from children', async () => {
    console.error = vi.fn();

    const { getByText } = render(
      <ErrorBoundary>
        <BadComponent />
      </ErrorBoundary>,
    );

    expect(getByText('An unknown error occurred')).toBeTruthy();
  });
});
