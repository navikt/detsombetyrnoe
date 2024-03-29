import * as React from "react";
import { ErrorInfo } from "react";
import { isTest } from "../utils/environment";
import { loggError } from "../utils/logger";
import styled from "styled-components";
import { navFrontend } from "../styles/navFarger";

interface Props {
  boundaryName?: string;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

const Style = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${navFrontend.navBlaDarken80};
  color: white;
`;

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
      return <Style>Beklager, det skjedde en teknisk feil 🤷‍♀️</Style>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
