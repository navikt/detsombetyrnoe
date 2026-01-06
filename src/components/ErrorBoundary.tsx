import * as React from "react";
import { ErrorInfo } from "react";
import { isTest } from "../utils/environment";
import { loggError } from "../utils/logger";
import styles from "./ErrorBoundary.module.css";

interface Props {
  boundaryName?: string;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (isTest()) {
      throw error;
    }
    this.setState({ hasError: true, error, errorInfo });
    loggError(error);
  }

  render() {
    if (this.state.hasError) {
      return <div className={styles.style}>Beklager, det skjedde en teknisk feil 🤷‍♀️</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
