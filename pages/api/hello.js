import nc from "next-connect";
import IP from "ip";
import axios from "axios";
import Web3 from "web3";
import litecore from "litecore-lib";

const handler = nc();
import { Mutex } from "async-mutex";

const withdrawalMutex = new Mutex();

const infura_url =
  "https://goerli.infura.io/v3/43fe451b5c984d389c5612b9d27f4203";

handler.get(async (req, res) => {
  try {
    // Acquire the mutex to ensure exclusive access for this withdrawal operation
    const release = await withdrawalMutex.acquire();
    const currentTime = new Date();
    console.log(currentTime);
    // Initialize Web3 with your Ethereum provider (e.g., Infura)
    const web3 = new Web3(infura_url);

    // Replace these with your own values
    const senderAddress = "0x91E5FAb4E4A007441257B3eecE168D343cFC3E98";
    const privateKey =
      "ce563d4ca02af5994d2d4364c2c47146a1a9c29e343c0e20a76e166e5c901800"; // This should be kept secure and never shared

    // The recipient's Ethereum address
    const recipientAddress = "0xAf521Ffc37AC41c5a27CFCF91EAB0c323e233c39";
    let nonce = await web3.eth.getTransactionCount(senderAddress); // Nonce is the number of transactions sent from this address
    console.log(nonce);
    // Amount to send (in Wei, 1 Ether = 10^18 Wei)
    const amountToSendWei = web3.utils.toWei("0.001", "ether");
    // Create a transaction object
    const transactionObject = {
      from: senderAddress,
      to: recipientAddress,
      value: amountToSendWei,
      gas: 21000, // Gas limit
      gasPrice: web3.utils.toWei("10", "gwei"), // Gas price in Gwei
      nonce: await web3.eth.getTransactionCount(senderAddress), // Nonce is the number of transactions sent from this address
    }; // Sign the transaction with the sender's private key
    const signedTransaction = await web3.eth.accounts.signTransaction(
      transactionObject,
      privateKey
    );

    // Send the signed transaction to the Ethereum network
    // web3.eth
    //   .sendSignedTransaction(signedTransaction.rawTransaction)
    //   .on("transactionHash", (hash) => {
    //     console.log(`Transaction hash: ${hash}`);
    //     // Release the mutex after the transaction is sent
    //     // release();
    //   })
    //   .on("confirmation", (confirmationNumber, receipt) => {
    //     console.log(`Confirmation number: ${confirmationNumber}`);
    //     release();
    //     console.log("released from confirmation");
    //     if (confirmationNumber >= 6) {
    //       console.log("Transaction confirmed:", receipt);
    //     }
    //   })
    //   .on("error", (error) => {
    //     console.error("Transaction error:", error); // Release the mutex in case of an error
    //     release();
    //   });

    web3.eth
      .sendSignedTransaction(signedTransaction.rawTransaction)
      .then((reciept) => {
        console.log(reciept);
        console.log("released");
        release();
      })    
    res.send("done");
    
  } catch (error) {
    console.log(error); // Release the mutex in case of an error
    release();
  }
});
export default handler;
