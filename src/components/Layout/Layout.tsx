import { Container, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

export function Layout({ title }: { title: string }) {
  return (
    <>
      <header>
        <Typography variant="h1" textAlign="center">
          {title}
        </Typography>
      </header>

      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
