"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {

  

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await axios.get('/api/config')
        const data = res.data
        console.log(typeof data);
        
        console.log(data)
        setConfig(data.REFERRAL)
      } catch (error) {
        console.error(error)
      }
    }
    
    fetchConfig()
  }, [])

  const iframeUrl = `https://app.onbons.ai/`;


  return (
  //   <iframe 
  //   src={iframeUrl}
  //   className="w-full h-screen border-0"
  //   allow="web3"
  //   allowFullScreen
  // />
  <div className="min-h-screen bg-gradient-to-t from-customStart to-customEnd/50">
    <iframe 
      src={iframeUrl}
      className="w-full h-screen border-0"
      allow="web3"
      allowFullScreen
    />
  </div>
  );
}
