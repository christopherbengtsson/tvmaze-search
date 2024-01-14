import { act, renderHook } from '@testing-library/react';
import { useDrawer } from './useDrawer';
import { useParams } from 'react-router-dom';

vi.mock('react-router-dom', () => ({
  useParams: vi.fn(),
}));

describe('useDrawer', () => {
  it('initializes drawerOpen as true when id is present', () => {
    vi.mocked(useParams).mockImplementation(() => ({ id: '123' }));

    const { result } = renderHook(() => useDrawer());
    expect(result.current.drawerOpen).toBe(true);
  });

  it('initializes drawerOpen as false when id is not present', () => {
    vi.mocked(useParams).mockImplementation(() => ({}));

    const { result } = renderHook(() => useDrawer());
    expect(result.current.drawerOpen).toBe(false);
  });

  it('allows drawerOpen to be updated', () => {
    vi.mocked(useParams).mockImplementation(() => ({}));

    const { result } = renderHook(() => useDrawer());
    expect(result.current.drawerOpen).toBe(false);

    act(() => {
      result.current.setDrawerOpen(true);
    });

    expect(result.current.drawerOpen).toBe(true);
  });
});
