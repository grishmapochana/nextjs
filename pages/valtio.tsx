import React from "react";
import Times from "../components/Times";
import Count from "../components/Count";
import { proxy, useSnapshot } from "valtio";

export default function valtio() {
  return (
    <>
      <Times />
      <Count />
    </>
  );
}
