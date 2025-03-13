// mint_scgt.js
require('dotenv').config();
const web3 = require('@solana/web3.js');
const splToken = require('@solana/spl-token');

const connection = new web3.Connection("https://api.mainnet-beta.solana.com", "confirmed");
const secretKey = Uint8Array.from(JSON.parse(process.env.DAO_PRIVATE_KEY));
const wallet = web3.Keypair.fromSecretKey(secretKey);

// Update these constants
const SCGT_MINT_ADDRESS = new web3.PublicKey("Your_SCGT_Mint_Address");
const DAO_SCGT_TOKEN_ACCOUNT = new web3.PublicKey("DAO_SCGT_Token_Account_Address");

// Function to mint and send SCGT to user
async function mintAndSendSCGT(recipientAddress) {
    const recipientPublicKey = new web3.PublicKey(recipientAddress);

    const buyerSCGTTokenAccount = await splToken.getAssociatedTokenAddress(
        SCGT_MINT_ADDRESS,
        recipientPublicKey
    );

    const mintTransaction = new web3.Transaction().add(
        splToken.createTransferInstruction(
            DAO_SCGT_TOKEN_ACCOUNT,
            buyerSCGTTokenAccount,
            wallet.publicKey,
            1 // transferring 1 SCGT (assuming SCGT has 0 decimals)
        )
    );

    try {
        const connection = new web3.Connection(web3.clusterApiUrl("mainnet-beta"), "confirmed");
        const signature = await web3.sendAndConfirmTransaction(connection, mintTransaction, [wallet]);
        console.log("SCGT minted & transferred. Tx Signature:", signature);
    } catch (error) {
        console.error("Error minting/transferring SCGT:", error);
    }
}
