import axios from "axios";
export async function getMarketplace() {
  try {
    let res = await axios.get("http://13.56.58.176:4000/marketplace");
    console.log({ res });

    return res;
  } catch (err: any) {
    return err.response;
  }
}
