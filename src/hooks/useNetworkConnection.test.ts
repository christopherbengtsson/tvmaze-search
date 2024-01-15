import { Mock } from 'vitest';
import { EffectiveConnectionType, useNetworkConnection } from '.';
import { act, renderHook } from '../test/utils';

describe('useNetworkConnection', () => {
  let originalNavigator: typeof navigator;
  let mockConnection: {
    effectiveType?: EffectiveConnectionType;
    addEventListener: Mock;
    removeEventListener: Mock;
  };

  beforeEach(() => {
    originalNavigator = window.navigator;
    mockConnection = {
      effectiveType: '4g',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    };
    Object.defineProperty(window, 'navigator', {
      value: {
        ...originalNavigator,
        connection: mockConnection,
      },
      configurable: true,
    });
  });

  afterEach(() => {
    Object.defineProperty(window, 'navigator', {
      value: originalNavigator,
      configurable: true,
    });
  });

  it('initial state should reflect current connection', () => {
    const { result } = renderHook(() => useNetworkConnection());
    expect(result.current.supported).toBe(true);
    expect(result.current.isSlowConnection).toBe(false);
  });

  it('should update state when connection changes to slow', () => {
    const { result } = renderHook(() => useNetworkConnection());
    act(() => {
      mockConnection.effectiveType = '2g';
      mockConnection.addEventListener.mock.calls.forEach(([event, handler]) => {
        if (event === 'change') {
          handler();
        }
      });
    });
    expect(result.current.isSlowConnection).toBe(true);
  });

  it('should add and remove event listener', () => {
    const { unmount } = renderHook(() => useNetworkConnection());
    expect(mockConnection.addEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function),
    );
    unmount();
    expect(mockConnection.removeEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function),
    );
  });
});
