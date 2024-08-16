import * as React from "react";
import { createContext, ReactNode, useContext } from "react";
import { ForsideProps } from "src/app/(site)/page";

const context = createContext<Partial<ForsideProps>>({});

export const useForsideContext = () => useContext(context);

function ForsideProvider(props: { forsideProps: Partial<ForsideProps>; children: ReactNode }) {
  return <context.Provider value={props.forsideProps}>{props.children}</context.Provider>;
}

export default ForsideProvider;
