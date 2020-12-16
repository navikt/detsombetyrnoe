import * as React from "react";

function Sky(props: any) {
  return (
    <svg viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.5 29c-2.04 0-3.944-.581-5.555-1.588a7.501 7.501 0 01-14.848.296 4.501 4.501 0 01-5.322-6.733C4.315 20.603 0 16.055 0 10.5 0 4.702 4.702 0 10.5 0c3.774 0 7.082 1.991 8.933 4.98A7.503 7.503 0 0126.502 0a7.499 7.499 0 017.474 8.11A10.59 10.59 0 0135.5 8C41.3 8 46 12.7 46 18.5S41.3 29 35.5 29z"
        fill="#fff"
      />
    </svg>
  );
}

export default Sky;
