"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';

export default function DonationPage() {
  const params = useParams();
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const recipientAddress = params.address || "";

  console.log("recipientAddress", recipientAddress);
  

  // Get wallet connection 
  const { isConnected } = useAccount();
  
  // Transaction hooks
  const { sendTransaction } = useSendTransaction();
  const { isLoading: isTransactionPending } = useWaitForTransactionReceipt();

  const handleDonate = async () => {
    if (!amount || !isConnected) return;

    try {
      setIsLoading(true);
      await sendTransaction({
        to: recipientAddress,
        value: parseEther(amount),
      });
    } catch (error) {
      console.error('Transaction failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const iframeUrl = `https://app.onbons.ai/post/${recipientAddress}`;
  console.log('====================================');
  console.log('iframeUrl', iframeUrl);
  console.log('====================================');


  return (
    <div className="min-h-screen bg-gradient-to-t from-customStart to-customEnd/50">
    <div className="relative w-full h-screen">
  <iframe
    src={iframeUrl}
    className="w-full h-full border-0"
    allow="web3"
    allowFullScreen
  />
  <div className="absolute z-50 bottom-0 left-0 h-14 bg-black w-full flex justify-center items-center text-center text-sm text-white">
    Powered by winks.fun
  </div>
</div>

  </div>

  );
}