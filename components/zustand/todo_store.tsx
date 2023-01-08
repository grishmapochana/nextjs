import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface todo {
  id: number;
  name: string;
  done: boolean;
}
interface todostate {
  todo: todo[];
  add: (name: string) => void;
  remove: (id: number) => void;
}
// const todostore:
