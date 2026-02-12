
import Image from "next/image";

  export default function Home() {
  return (
    <main style={{
      background: "#0a0a0a",
      color: "white",
      fontFamily: "sans-serif"
    }}>

      {/* HERO */}
<section style={{
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
}}>

  <Image
    src="/mrbro-logo.png"
    alt="MR BRO Logo"
    width={250}
    height={250}
    priority
    style={{ marginBottom: "30px" }}
  />

  <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>
    MR BRO 🚀
  </h1>

  <p style={{ fontSize: "1.5rem", opacity: 0.7 }}>
    The Community-Driven Meme Revolution
  </p>

</section>


      {/* CONTACT */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center",
        borderTop: "1px solid #222"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>
          Contact
        </h2>

        <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
          📩 General: 
          <a href="mailto:mrbro@mrbro.org" style={{ color: "#4ade80", marginLeft: "8px" }}>
            mrbro@mrbro.org
          </a>
        </p>

        <p style={{ fontSize: "1.2rem" }}>
          📩 Business:
          <a href="mailto:Godoy107@gmail.com" style={{ color: "#4ade80", marginLeft: "8px" }}>
            Godoy107@gmail.com
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px",
        textAlign: "center",
        opacity: 0.5,
        fontSize: "0.9rem"
      }}>
        © 2026 MR BRO. All rights reserved.
      </footer>

    </main>
  );
}
