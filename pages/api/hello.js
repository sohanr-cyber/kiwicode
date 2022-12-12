import nc from "next-connect";
import IP from "ip";
import axios from "axios";
const handler = nc();
const URL =
  "https://ipgeolocation.abstractapi.com/v1/?api_key=d87bac229012464b940131c85fd83bf5";

handler.get(async (req, res) => {
  try {
    const ipAddress = IP.address();
    // const apiResponse = await axios.get(URL + "&ip_address=" + ipAddress);
    const apiResponse = await axios.get(`${URL}&ip_address=${ipAddress}`);
    console.log({ apiResponse });
    res.send({ data: apiResponse.data });
  } catch (error) {
    console.log({ error });
    res.send({ error });
  }
});

export default handler;
