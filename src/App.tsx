import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { enqueueSnackbar } from 'notistack';
import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout, SnackbarProvider, theme } from './components';
import { useNetworkConnection } from './hooks';
import { DetailPage, LandingPage } from './pages';

const IS_DEV = import.meta.env.MODE === 'development';

export function App() {
  const { isSlowConnection } = useNetworkConnection();

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60,
      },
    },
  });

  useEffect(() => {
    if (isSlowConnection) {
      enqueueSnackbar({
        variant: 'warning',
        message: 'Warning, your internet connection is very slow.',
      });
    }
  }, [isSlowConnection]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <QueryClientProvider client={client}>
            <Routes>
              <Route element={<Layout title="TV-Maze search" />}>
                <Route element={<LandingPage />} path="/">
                  <Route element={<DetailPage />} path="/:id" />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
            {IS_DEV && <ReactQueryDevtools />}
          </QueryClientProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
