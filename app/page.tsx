import Image from "next/image";

export default function Home() {
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

        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          MR BRO 🚀
        </h1>

        <p style={{ fontSize: "1.3rem", opacity: 0.7 }}>
          The Community-Driven Meme Revolution
        </p>
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
          📩 General:
          <a
            href="mailto:mrbro@mrbro.org"
            style={{ color: "#4ade80", marginLeft: "8px" }}
          >
            mrbro@mrbro.org
          </a>
        </p>

        <p style={{ fontSize: "1.2rem" }}>
          📩 Business:
          <a
            href="mailto:Godoy107@gmail.com"
            style={{ color: "#4ade80", marginLeft: "8px" }}
          >
            Godoy107@gmail.com
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
