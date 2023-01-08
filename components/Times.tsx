import React from "react";
import state from "../pages/state";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

export default function Times() {
  const snap = useSnapshot(state);
  useEffect(() => {
    const interval = setInterval(() => {
      state.time += 1;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{snap.time}</div>;
}
