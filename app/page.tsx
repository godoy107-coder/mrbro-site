export default function Home() {
  return (
    <main style={{
      background: "#0f0f0f",
      color: "white",
      fontFamily: "Arial, sans-serif"
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
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>
          MR BRO 🚀
        </h1>
        <p style={{ opacity: 0.7, marginBottom: "2rem" }}>
          The Community-Driven Meme Revolution
        </p>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={buttonStyle}>X</a>
          <a href="#" style={buttonStyle}>Telegram</a>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section style={{
        padding: "100px 20px",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
          Who We Are
        </h2>
        <p style={{ opacity: 0.7, lineHeight: "1.6" }}>
          Mr Bro is a community-driven crypto project built for people who believe in transparency,
          simplicity and long-term value. We combine strong tokenomics, sustainable staking,
          and an engaged community to build something real.
        </p>
      </section>

      {/* STAKING SECTION */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "#141414"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
          Staking
        </h2>
        <p style={{ opacity: 0.7, marginBottom: "2rem" }}>
          Stake your MRBRO tokens and earn rewards.
        </p>

        <button style={buttonStyle}>
          Launch Staking App
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px",
        textAlign: "center",
        opacity: 0.5
      }}>
        © {new Date().getFullYear()} MR BRO. All rights reserved.
      </footer>

    </main>
  );
}

const buttonStyle = {
  padding: "12px 30px",
  background: "white",
  color: "black",
  textDecoration: "none",
  borderRadius: "30px",
  fontWeight: "bold"
};

