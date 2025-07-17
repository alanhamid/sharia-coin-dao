
// BOS Donation Page (React + Stripe + USDC Wallet Connect)

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { ethers } from 'ethers';

const stripePromise = loadStripe('pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'); // Replace with your Stripe public key

export default function DonationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [referral, setReferral] = useState('');
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  // Stripe payment handler
  const handleStripeDonation = async () => {
    const stripe = await stripePromise;
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, referral })
    });
    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  // Wallet connect handler (MetaMask)
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletConnected(true);
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error('User rejected connection');
      }
    } else {
      alert('Please install MetaMask');
    }
  };

  // USDC donation (manual example)
  const sendUSDC = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'; // USDC on Ethereum Mainnet
    const usdcABI = ["function transfer(address to, uint amount) public returns (bool)"];
    const contract = new ethers.Contract(usdcAddress, usdcABI, signer);
    const tx = await contract.transfer('YOUR_WALLET_ADDRESS', ethers.utils.parseUnits('25', 6));
    await tx.wait();
    alert('USDC Sent!');
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Donate to Sharia Coin DAO</h1>
      <p className="mb-6">Support ethical finance and secure your SCGT membership token.</p>

      <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 mb-3 border" />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 mb-3 border" />
      <input type="text" placeholder="Referral Code (Optional)" value={referral} onChange={e => setReferral(e.target.value)} className="w-full p-2 mb-3 border" />

      <button onClick={handleStripeDonation} className="w-full bg-blue-600 text-white p-3 rounded mb-4">Donate with Card (Stripe)</button>

      {!walletConnected ? (
        <button onClick={connectWallet} className="w-full bg-gray-800 text-white p-3 rounded mb-4">Connect Wallet</button>
      ) : (
        <div>
          <p className="mb-2 text-green-600">Wallet Connected: {walletAddress}</p>
          <button onClick={sendUSDC} className="w-full bg-green-600 text-white p-3 rounded">Donate 25 USDC</button>
        </div>
      )}
    </div>
  );
}
