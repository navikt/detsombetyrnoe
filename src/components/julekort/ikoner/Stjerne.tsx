import * as React from "react";

function Stjerne(props: any) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M12 .5L15 9h8.5l-7 5.5 3 9L12 18l-7.5 5.5 3-9L.5 9H9l3-8.5v0z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Stjerne;
