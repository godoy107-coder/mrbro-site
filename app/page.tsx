"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      "0xd2D731ab1C6b934914F660d8A4F611b732251142"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main
      style={{
        background: "#0a0a0a",
        color: "white",
        fontFamily: "sans-serif",
        margin: 0,
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "600px",
            maxWidth: "90vw",
            height: "600px",
            marginBottom: "40px",
          }}
        >
          <Image
            src="/mrbro-logo.png"
            alt="MR BRO Logo"
            fill
            priority
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        {/* CONTRACT ADDRESS */}
        <div
          style={{
            background: "#111",
            padding: "12px 20px",
            borderRadius: "10px",
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "0.85rem",
              opacity: 0.7,
              wordBreak: "break-all",
            }}
          >
            CA: 0xd2D731ab1C6b934914F660d8A4F611b732251142
          </span>

          <button
            onClick={copyToClipboard}
            style={{
              background: "#4ade80",
              color: "#000",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>

        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          MR BRO 🚀
        </h1>

        <p style={{ fontSize: "1.3rem", opacity: 0.7 }}>
          The Community-Driven Meme Revolution
        </p>
      </section>
{/* WHITEPAPER */}
<section
  style={{
    padding: "80px 20px",
    textAlign: "center",
    borderTop: "1px solid #222",
  }}
>
  <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>
    Whitepaper
  </h2>

  <p style={{ opacity: 0.7, marginBottom: "40px" }}>
    Explore the official documentation and project details.
  </p>

  <a
    href="https://drive.google.com/drive/folders/1yeW2p9BN53VCKRm-WGJekNQwOOd_YICp?usp=share_link"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#ffffff",
      color: "#000",
      padding: "14px 30px",
      borderRadius: "8px",
      fontWeight: "bold",
      fontSize: "1.1rem",
      textDecoration: "none",
      transition: "all 0.3s ease",
    }}
  >
    📄 View Whitepaper
  </a>
</section>


      {/* TRADE SECTION */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid #222",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>
          Trade MR BRO
        </h2>

        <p style={{ opacity: 0.7, marginBottom: "40px" }}>
          View live chart, liquidity and trading activity.
        </p>

        <a
          href="https://www.geckoterminal.com/bsc/pools/0xc71ac83e5eecb5c81a84372c33fd87f0ca468312?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#4ade80",
            color: "#000",
            padding: "14px 30px",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "1.1rem",
            textDecoration: "none",
            transition: "all 0.3s ease",
            marginBottom: "40px",
          }}
        >
          🚀 Trade Now
        </a>

        {/* GECKO LOGO */}
        <a
          href="https://www.geckoterminal.com/bsc/pools/0xc71ac83e5eecb5c81a84372c33fd87f0ca468312?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            margin: "0 auto",
            width: "200px",
            height: "80px",
            position: "relative",
          }}
        >
          <Image
            src="/geckoterminal_dark.png"
            alt="GeckoTerminal"
            fill
            style={{ objectFit: "contain" }}
          />
        </a>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          borderTop: "1px solid #222",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>
          Contact
        </h2>

        <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
          📩 Email:
          <a
            href="mailto:mrbro@mrbro.com"
            style={{ color: "#4ade80", marginLeft: "8px" }}
          >
            mrbro@mrbro.com
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px",
          textAlign: "center",
          opacity: 0.5,
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} MR BRO. All rights reserved.
      </footer>
    </main>
  );
}

