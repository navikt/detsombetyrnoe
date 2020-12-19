import * as React from "react";

function HjerteIkon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 22 23" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M11 22.394s10.5-8.128 10.5-15.82S12.184-1.71 11 5.983C9.816-1.71.5-1.118.5 7.166S11 22.394 11 22.394v0z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HjerteIkon;
