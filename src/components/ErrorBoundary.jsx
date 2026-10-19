import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-surface p-8">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold text-[#EF4444] mb-4">Something went wrong</h1>
            <pre className="text-sm text-ink-muted bg-card p-4 rounded-[20px] border border-line overflow-auto text-left max-h-64">
              {this.state.error.message}
              {"\n\n"}
              {this.state.error.stack}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary mt-6"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
