import { Component } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  async componentDidCatch(error: Error) {
    const { message, stack } = error;
    console.error(message, stack);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ padding: 10 }}>An unknown error occurred</div>;
    }

    return this.props.children;
  }
}
