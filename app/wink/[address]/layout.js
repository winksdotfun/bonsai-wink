// app/wink/[address]/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import { Providers } from "../../providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }) {
  const baseUrl = "https://cd48-38-134-138-147.ngrok-free.app";
  const { address } = params;

  return {
    title: "Memespin - Fair Blockchain Gaming",
    description:
      "Experience the thrill of Memespin! Winners share the prize pool, draws get half back, and losers get nothing. Play now!",
    metadataBase: new URL(baseUrl),
    other: {
      "twitter:card": "player",
      "twitter:site": "@winksdotfun",
      "twitter:title": "Memespin - Fair Blockchain Gaming",
      "twitter:description":
        "Experience the thrill of Memespin! Winners share the prize pool, draws get half back, and losers get nothing. Play now!",
      "twitter:player": `https://cd48-38-134-138-147.ngrok-free.app/wink/${address}`,
      "twitter:player:width": "360",
      "twitter:player:height": "560",
      "twitter:image":
        "https://res.cloudinary.com/dvddnptpi/image/upload/v1738600087/zqhjyzunv8fq8nxt9ggk.png",
    },
  };
}

export default function AddressLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
