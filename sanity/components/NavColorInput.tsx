import * as React from "react";
import ColorInput, { ColorInputColor } from "./ColorInput";
import { navFrontend } from "../../src/styles/navFarger";

const navFarger = Object.entries(navFrontend).filter((farge) => farge[1].length === 7);

const convertedNavFarger: ColorInputColor[] = navFarger.map((farge) => ({ name: farge[0], color: farge[1] }));

const colors: ColorInputColor[] = [
  {
    name: "Hvit",
    color: "#ffffff",
  },
  ...convertedNavFarger,
];

const NavColorInput = (props: any) => <ColorInput {...props} colors={colors} label="Bakgrunnsfarge" />;

export default NavColorInput;
