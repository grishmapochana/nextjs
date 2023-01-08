import React from "react";
import { useSnapshot } from "valtio";
import state from "../pages/state";

export default function Count() {
  const snap = useSnapshot(state);
  return (
    <button
      onClick={() => {
        state.click += 1;
      }}
    >
      {snap.click}
    </button>
  );
}
