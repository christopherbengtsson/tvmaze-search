import { useEffect, useState } from 'react';

export type EffectiveConnectionType = '2g' | '3g' | '4g' | 'slow-2g';

export function useNetworkConnection() {
  const [connectionStatus, setConnectionStatus] = useState({
    supported: 'connection' in navigator,
    isSlowConnection: false,
  });

  useEffect(() => {
    const updateConnectionStatus = () => {
      const connection = navigator.connection;

      if (connection) {
        const slowConnections: EffectiveConnectionType[] = ['slow-2g', '2g'];
        setConnectionStatus({
          supported: true,
          isSlowConnection: slowConnections.includes(connection.effectiveType),
        });
      }
    };

    if (connectionStatus.supported) {
      updateConnectionStatus();
      navigator.connection?.addEventListener('change', updateConnectionStatus);
    }

    return () => {
      if (connectionStatus.supported && navigator.connection) {
        navigator.connection.removeEventListener(
          'change',
          updateConnectionStatus,
        );
      }
    };
  }, [connectionStatus.supported]);

  return connectionStatus;
}
