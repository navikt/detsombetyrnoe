import * as React from "react";

function Måne(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 15 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M7.513 12C7.513 6.905 4.707 2.526.685.579 1.12.528 1.564.5 2.013.5c6.35 0 11.5 5.148 11.5 11.5s-5.15 11.5-11.5 11.5c-.45 0-.892-.028-1.328-.078C4.707 21.475 7.513 17.095 7.513 12v0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Måne;
