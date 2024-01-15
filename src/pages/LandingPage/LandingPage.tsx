import { Outlet, useNavigate } from 'react-router-dom';
import { Show } from '../../api';
import { DRAWER_TRANSITION, Drawer } from '../../components';
import { useDrawer, useSmallScreen } from '../../hooks';
import { SearchResultList } from './SearchResultList';

export function LandingPage() {
  const navigate = useNavigate();
  const smallScreen = useSmallScreen();
  const { drawerOpen, setDrawerOpen } = useDrawer();

  const handleListItemClick = (show: Show) => {
    setDrawerOpen(true);
    navigate(`${show.id}`);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);

    setTimeout(() => {
      if (window.history.state.idx > 0) {
        navigate(-1);
      } else {
        navigate('/');
      }
    }, DRAWER_TRANSITION);
  };

  return (
    <>
      <SearchResultList handleListItemClick={handleListItemClick} />

      <Drawer
        mobile={smallScreen}
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <Outlet />
      </Drawer>
    </>
  );
}
