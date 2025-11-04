import React, { useState } from "react";

function App() {
  return (
  
    <div style={styles.app}>
      <Header />

      {/* Top strip: Upcoming World Cup Matches */}
      <UpcomingGamesBar />

      <main style={styles.main}>
        {/* Left: High-Value Bets (World Cup) */}
        <ValueBetsPanel />

        {/* Center: News Articles */}
        <NewsFeed />
      </main>

      {/* Bottom-right: Chatbot */}
      <ChatbotWidget />
    </div>
  );
}

/* ----------------------- Header ----------------------- */
function Header() {
  return (
    <header style={styles.header} aria-label="Top navigation">
      <div style={styles.brand}>SBC • World Cup 2026</div>
      <nav style={styles.nav}>
        <a style={styles.link} href="#">Log In</a>
        <a style={{ ...styles.link, ...styles.signup }} href="#">Sign Up</a>
      </nav>
    </header>
  );
}

/* ------------------- Upcoming Games Bar ------------------- */
function UpcomingGamesBar() {
  // Placeholder fixtures for WC 2026 (dates approximate)
  const games = [
    { id: 1, when: "2026-06-11 20:00", city: "Mexico City", teams: "MEX vs NZL", line: "MEX -0.5", total: "2.5" },
    { id: 2, when: "2026-06-12 19:00", city: "Los Angeles", teams: "USA vs JAM", line: "USA -1.0", total: "2.75" },
    { id: 3, when: "2026-06-13 18:00", city: "Toronto", teams: "CAN vs KOR", line: "PK", total: "2.25" },
    { id: 4, when: "2026-06-14 17:00", city: "Dallas", teams: "BRA vs NOR", line: "BRA -1.25", total: "3.0" },
    { id: 5, when: "2026-06-15 16:00", city: "New York", teams: "ENG vs SEN", line: "ENG -0.75", total: "2.25" },
  ];

  return (
    <section aria-label="Upcoming games" style={styles.gamesBar}>
      <h3 style={styles.sectionLabel}>Upcoming World Cup Matches</h3>
      <div style={styles.gamesScroller}>
        {games.map(g => (
          <div key={g.id} style={styles.gameChip} title={`${g.teams} • ${g.city}`}>
            <div style={styles.gameTeams}>{g.teams}</div>
            <div style={styles.gameMeta}>{g.city}</div>
            <div style={styles.gameMeta}>{g.when}</div>
            <div style={styles.gameMeta}>{g.line} • o/u {g.total}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
