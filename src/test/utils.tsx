import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ReactElement } from 'react';
import { configureAxe } from 'vitest-axe';

afterEach(() => {
  cleanup();
});

const axe = configureAxe({
  rules: {
    // color contrast checking doesnt work in a jsdom environment.
    'color-contrast': { enabled: false },
  },
});

export async function axeValidation(
  component: ReactElement,
  withProviders?: boolean,
) {
  it('has no axe violations', async () => {
    const { container } = withProviders
      ? renderWithProviders(component)
      : render(component);

    await act(async () => {
      const result = await axe(container);
      expect(result).toHaveNoViolations();
    });
  });
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MemoryRouter>
  );
};

const renderWithProviders = (ui: JSX.Element) => {
  return render(ui, {
    wrapper,
  });
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { renderWithProviders };
