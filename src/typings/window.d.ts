import { EffectiveConnectionType } from '../hooks/useNetworkConnection';

export {};

declare global {
  interface Navigator {
    connection?: {
      effectiveType: EffectiveConnectionType;
      addEventListener: (
        type: string,
        listener: (this: NetworkInformation, ev: Event) => unknwon,
      ) => void;
      removeEventListener: (
        type: string,
        listener: (this: NetworkInformation, ev: Event) => unknown,
      ) => void;
    };
  }
}
