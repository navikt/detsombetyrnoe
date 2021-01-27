declare module "react-in-viewport" {
  import { ReactNode } from "react";
  export type ViewportConfig = {
    disconnectOnLeave?: boolean;
  };

  export function handleViewport<P>(
    block: ReactNode,
    options?: IntersectionObserver,
    config?: ViewportConfig
  ): React.ComponentType<
    P & {
      onEnterViewport?: VoidFunction;
      onLeaveViewport?: VoidFunction;
    }
  >;

  export type PropsInViewport = {
    inViewport: boolean;
    enterCount: number;
    leaveCount: number;
    forwardedRef?: React.MutableRefObject;
    onEnterViewport?: VoidFunction;
    onLeaveViewport?: VoidFunction;
  };

  export default handleViewport;
}
