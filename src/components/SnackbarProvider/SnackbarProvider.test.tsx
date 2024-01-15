import { SnackbarProvider } from '.';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { screen, fireEvent, waitFor, render } from '../../test/utils';

const TestComponent = ({
  message,
  variant,
}: {
  message: string;
  variant: 'warning' | 'error';
}) => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    enqueueSnackbar({ message, variant });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

describe('<SnackbarProvider />', () => {
  it('Warning snackbar works', async () => {
    expect(
      render(
        <SnackbarProvider>
          <TestComponent message="Warning message" variant="warning" />
        </SnackbarProvider>,
      ),
    ).toBeDefined();

    const snackbar = screen.getByText('Warning message');
    expect(snackbar).toBeVisible();

    fireEvent.click(screen.getByLabelText('Close'));

    await waitFor(() => expect(snackbar).not.toBeInTheDocument());
  });

  it('Error snackbar works', async () => {
    expect(
      render(
        <SnackbarProvider>
          <TestComponent message="Error message" variant="error" />
        </SnackbarProvider>,
      ),
    ).toBeDefined();

    const snackbar = screen.getByText('Error message');
    expect(snackbar).toBeVisible();

    fireEvent.click(screen.getByLabelText('Close'));

    await waitFor(() => expect(snackbar).not.toBeInTheDocument());
  });
});
