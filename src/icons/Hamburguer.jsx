import * as React from "react";

const Hamburguer = (props) => (
  <svg
    width={36}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M36 0H0v2h36V0ZM36 7H0v2h36V7ZM36 14H16v2h20v-2Z" fill="#123AC8" />
  </svg>
);

export default Hamburguer;
