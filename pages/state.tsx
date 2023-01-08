import { proxy } from "valtio";
interface st {
  time: number;
  click: number;
}

// const state :st={proxy({ time: 0, click: 0 })};
// const state: st = { time: 0, click: 0 };
const state = proxy<st>({
  time: 0,
  click: 0,
});
export default state;
