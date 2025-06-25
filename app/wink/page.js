"use client";
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
    <iframe 
      src={iframeUrl}
      className="w-full h-screen border-0 relative"
      allow="web3"
      allowFullScreen
    >
    <div className="absolute z-50 bottom-0 left-0 bg-black w-full text-center text-sm text-white">Powered by winks.fun</div>
    </iframe>
  </div>

  );
}