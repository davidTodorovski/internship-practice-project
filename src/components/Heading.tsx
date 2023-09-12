import React from "react";
import { orbitron } from "../app/fonts";

export default function Heading({ children }) {
  return <h1 className={orbitron.className}>{children}</h1>;
}
