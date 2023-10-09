import nc from "next-connect";
import IP from "ip";
import axios from "axios";

import coinbase from "coinbase-commerce-node";
let Client = coinbase.Client;
Client.init(process.env.API_KEY);
let Charge = coinbase.resources.Charge;
const handler = nc();
const CryptoAccount = require("send-crypto");
/* Load account from private key */
const privateKey = process.env.PRIVATE_KEY || CryptoAccount.newPrivateKey();
const account = new CryptoAccount(privateKey);

handler.get(async (req, res) => {
  try {
    /* Print address */
    console.log("BTC ", await account.address("BTC"));
    console.log("ltc ", await account.address("LTC"));
    console.log("BCH ", await account.address("BCH"));
    console.log("FIL ", await account.address("FIL"));

    const btc = await account.getBalance("BTC");
    console.log("BTC Amount ", btc);

    const eth = await account.getBalance("ETH");
    console.log("Eth Amount ", eth);

    const bch = await account.getBalance("BCH");
    console.log("BCH Amount ", bch);

    // const txHash = await account
    //   .send("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", 0.01, "FIL")
    //   .on("transactionHash", console.log("Done"))
    //   .on("confirmation", console.log("Confirmend"));

    return res.status(200).send({ msg: "Done" });
  } catch (error) {
    console.log(error);
  }
});

handler.post(async (req, res) => {
  const { amount, currency, name, description } = req.body;
  const resources = coinbase.resources;

  try {
    const charge = await resources.Charge.create({
      name,
      description,
      local_price: {
        amount: amount,
        currency: currency,
      },
      pricing_type: "fixed_price",
      metadata: {
        user_id: "3434",
      },
    });
    res.status(200).send(charge.hosted_url);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default handler;
