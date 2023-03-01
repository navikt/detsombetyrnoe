import React from "react";
import ErrorBoundary from "./ErrorBoundary";

export default function withErrorBoundary<Props extends {}>(
  Component: React.ComponentType<Props>,
  boundaryName: string
) {
  return (props: Props) => {
    return (
      <ErrorBoundary boundaryName={boundaryName}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
