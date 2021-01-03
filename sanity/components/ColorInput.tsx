import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";

export type ColorInputColor = { color: string; name: string };

interface Props {
  value: string;
  onChange: any;
  colors: ColorInputColor[];
  label: string;
}

const Button = styled.button<{ farge: string }>`
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  margin: 0.2rem;
  box-shadow: 0 0.1rem 0.2rem #888;
  display: flex;
  width: 100%;
  align-items: center;
  &:hover {
    opacity: 0.9;
  }
  &::before {
    content: "";
    display: inline-block;
    width: 4rem;
    height: 2rem;
    background-color: ${(props) => props.farge};
    margin-right: 0.5rem;
    border-right: solid 0.1rem #999;
  }
`;

const createPatchFrom = (value?: string) => PatchEvent.from(!value ? unset() : set(value));

const getLabel = (farge?: ColorInputColor) => (farge ? `${farge.name} (${farge.color})` : "ingen farge valgt");

function ColorInput(props: Props) {
  const [open, setOpen] = useState(false);

  const handleNyFarge = (farge: ColorInputColor) => {
    props.onChange(createPatchFrom(farge.color));
    setOpen(false);
  };

  const currentFarge = props.colors.find((it) => it.color === props.value);

  if (open) {
    return (
      <div>
        <p>Velg farge:</p>
        {props.colors.map((farge) => (
          <Button farge={farge.color} onClick={() => handleNyFarge(farge)}>
            {getLabel(farge)}
          </Button>
        ))}
      </div>
    );
  }

  return (
    <div>
      <legend>{props.label}</legend>
      <Button farge={props.value} onClick={() => setOpen(true)}>
        {getLabel(currentFarge)}
      </Button>
    </div>
  );
}

export default ColorInput;
