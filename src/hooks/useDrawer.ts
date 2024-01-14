import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function useDrawer() {
  const { id } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(!!id);

  useEffect(() => {
    setDrawerOpen(!!id);
  }, [id]);

  return {
    drawerOpen,
    setDrawerOpen,
  };
}
