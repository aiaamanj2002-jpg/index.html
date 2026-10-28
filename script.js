* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  height: 100%;
  font-family: "Montserrat", sans-serif;
  background: #0d4a67;
}

body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  color: #f5fbff;
  background:
    linear-gradient(180deg, rgba(13, 74, 103, 0.28), rgba(13, 74, 103, 0.1)),
    url("https://images.unsplash.com/photo-1544551763-46a013bb70b5?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat;
}

img {
  max-width: 100%;
  display: block;
}

button,
input {
  font: inherit;
}

.page-shell {
  position: relative;
  width: min(100%, 1280px);
  min-height: 760px;
  padding: 18px 28px 26px;
  overflow: hidden;
  background: rgba(23, 107, 141, 0.22);
  backdrop-filter: blur(2px);
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 10px 0;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.logo-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.35);
  font-size: 1.5rem;
  font-weight: 600;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 34px;
  flex: 1;
}

.nav a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.search-wrap {
  position: relative;
  width: 220px;
  min-width: 180px;
  height: 46px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.42);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.search-wrap input {
  width: 100%;
  height: 100%;
  padding: 0 52px 0 18px;
  border: 0;
  background: transparent;
  outline: none;
  color: white;
}

.search-wrap button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.14);
  border: 0;
  border-radius: 50%;
  color: white;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.search-wrap svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
}

.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 660px;
  padding-top: 30px;
}

.orb {
  position: absolute;
  left: 50%;
  top: 38%;
  transform: translate(-50%, -50%);
  width: min(64vw, 800px);
  aspect-ratio: 1.1;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08), 0 0 80px rgba(158, 218, 250, 0.18);
}

.content {
  position: relative;
  z-index: 2;
  max-width: 680px;
  text-align: center;
  margin-top: 20px;
}

.content h1 {
  margin: 0;
  font-size: clamp(2.8rem, 4vw, 6rem);
  line-height: 0.9;
  letter-spacing: -0.06em;
  font-weight: 800;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.96);
}

.content h1 span {
  display: block;
  margin-top: 10px;
  font-family: "Playfair Display", serif;
  font-size: 0.54em;
  font-weight: 700;
  letter-spacing: -0.04em;
  text-transform: none;
  font-style: italic;
  color: rgba(255, 255, 255, 0.94);
}

.content p {
  max-width: 530px;
  margin: 22px auto 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1rem;
  line-height: 1.8;
}

.cta {
  margin-top: 34px;
  border: 0;
  border-radius: 40px;
  background: rgba(12, 75, 89, 0.72);
  color: white;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 18px 36px;
  box-shadow: 0 16px 28px rgba(10, 52, 74, 0.24);
  cursor: pointer;
}

.sea-scene {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  filter: blur(2px);
}

.bubble-1 { width: 62px; height: 62px; left: 20%; top: 66%; }
.bubble-2 { width: 92px; height: 92px; right: 18%; top: 20%; }
.bubble-3 { width: 40px; height: 40px; left: 30%; top: 15%; }
.bubble-4 { width: 68px; height: 68px; right: 26%; bottom: 20%; }
.bubble-5 { width: 54px; height: 54px; left: 66%; top: 28%; }
.bubble-6 { width: 26px; height: 26px; left: 12%; top: 30%; }

.fish {
  position: absolute;
  width: 42px;
  height: 22px;
  border-radius: 60% 40% 55% 45%;
  background: rgba(13, 52, 70, 0.86);
  box-shadow: inset -10px 0 0 rgba(255,255,255,0.12);
  transform: rotate(-18deg);
}

.fish::after {
  content: "";
  position: absolute;
  right: -10px;
  top: 50%;
  width: 12px;
  height: 12px;
  transform: translateY(-50%);
  background: rgba(13, 52, 70, 0.86);
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
}

.fish-1 { left: 14%; top: 48%; }
.fish-2 { left: 32%; top: 64%; transform: rotate(18deg); }
.fish-3 { right: 22%; top: 46%; transform: rotate(-18deg); }
.fish-4 { right: 30%; bottom: 16%; transform: rotate(14deg); }

.plant {
  position: absolute;
  bottom: 15px;
  width: 18px;
  height: 120px;
  background: rgba(15, 82, 101, 0.8);
  border-radius: 18px;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
}

.plant::before,
.plant::after {
  content: "";
  position: absolute;
  bottom: 50px;
  left: -18px;
  width: 54px;
  height: 44px;
  border-radius: 50% 50% 60% 40%;
  background: rgba(22, 92, 109, 0.75);
  transform: rotate(-24deg);
}

.plant::after {
  left: -8px;
  bottom: 62px;
  transform: rotate(18deg);
}

.plant-1 { left: 12%; }
.plant-2 { left: 28%; height: 150px; }
.plant-3 { right: 14%; height: 140px; }
.plant-4 { right: 28%; height: 120px; }

.socials {
  position: absolute;
  right: 36px;
  bottom: 34px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 5;
}

.socials a {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  text-decoration: none;
  color: rgba(255,255,255,0.9);
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.24);
  border-radius: 50%;
  font-size: 0.9rem;
}

.credit {
  position: absolute;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  font-size: 0.85rem;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.04em;
}

.credit span {
  font-weight: 700;
  color: rgba(255,255,255,0.9);
}

@media (max-width: 900px) {
  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav {
    order: 3;
    width: 100%;
    flex-wrap: wrap;
    gap: 14px 24px;
  }

  .search-wrap {
    width: 170px;
  }

  .content p {
    max-width: 460px;
  }
}

@media (max-width: 620px) {
  .page-shell {
    min-height: 620px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .brand {
    width: 100%;
    justify-content: center;
  }

  .topbar {
    padding-top: 10px;
  }

  .search-wrap {
    width: min(100%, 220px);
  }

  .content {
    max-width: 90%;
  }

  .content h1 {
    font-size: 2.5rem;
  }

  .content p {
    font-size: 0.88rem;
  }

  .socials {
    right: 18px;
    bottom: 26px;
  }
}
