// import create from "zustand";
// import { devtools, persist } from "zustand/middleware";

// const nft_store = (set) => ({
//   items: [],
//   setNftData: (data) => {
//     set(() => ({
//       items: data,
//     }));
//   },
// });

// const useNftStore = create(
//   devtools(
//     persist(nft_store, {
//       name: "ceek",
//     })
//   )
// );
// export default useNftStore;
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const nftStore = (set: any) => ({
  items: [],
  setNftData: (data: string) => {
    set(() => ({
      items: data,
    }));
  },
});

// STORE WITH PERSIST
const useNftStore = create(
  devtools(
    persist(nftStore, {
      name: "ceek",
    })
  )
);

// STORE WITHOUT PERSIST
// const useStore = create(store);

export default useNftStore;
