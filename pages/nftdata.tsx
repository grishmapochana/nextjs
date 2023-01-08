import React, { useEffect } from "react";
// import { getMarketplace } from "../utils/api";
// import { useNftStore } from "../zustand/nft_store";
import { getMarketplace } from "../components/utils/api";
import useNftStore from "../components/zustand/nft_store";

export default function Nftdata() {
  const { setNftData, items } = useNftStore();

  useEffect(() => {
    getNfts();
  }, []);

  const getNfts = async () => {
    const res = await getMarketplace();
    console.log(res);
    if (res.status >= 200 || res.status <= 300) {
      setNftData(res.data.data);
    }
    console.log({ items });
  };

  return <div>Nftdata</div>;
}
