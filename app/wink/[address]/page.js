"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function DonationPage() {
  const params = useParams();
  const recipientAddress = params.address || "";

  console.log("recipientAddress", recipientAddress);
  



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