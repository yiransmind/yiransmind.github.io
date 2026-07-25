---
permalink: /
layout: research-home
title: "Yiran Du"
redirect_from: 
  - /about/
  - /about.html
---

<style>
  .console-profile--compact { margin-top: 46px; }
  .profile-card {
    margin-top: 22px;
    padding: 24px;
    background: radial-gradient(circle at 0% 0%, var(--console-accent-soft), transparent 32%), var(--console-panel);
    border: 1px solid var(--console-line);
    border-radius: 14px;
  }
  .console-profile--compact .profile-metrics {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    margin: 0;
    border-bottom: 1px solid var(--console-line);
  }
  .console-profile--compact .profile-metrics span {
    display: block;
    padding: 0 20px 22px;
    color: var(--console-muted);
    font-size: 0.78rem;
    line-height: 1.45;
  }
  .console-profile--compact .profile-metrics span:first-child { padding-left: 0; }
  .console-profile--compact .profile-metrics span:last-child { padding-right: 0; }
  .console-profile--compact .profile-metrics span:not(:last-child) { border-right: 1px solid var(--console-line); }
  .console-profile--compact .profile-metrics strong {
    display: block;
    margin-bottom: 5px;
    color: var(--console-accent);
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    font-weight: 300;
    letter-spacing: -0.05em;
    line-height: 1;
  }
  .profile-recognition {
    margin: 0;
    padding-top: 20px;
    color: var(--console-muted);
    font-size: 0.83rem;
    line-height: 1.65;
  }
  .profile-recognition strong {
    color: var(--console-text);
    font-weight: 600;
  }
  .console-publications .publication-row { grid-template-columns: 24px minmax(0, 1fr) 16px; }
  @media screen and (max-width: 800px) {
    .console-profile--compact .profile-metrics { grid-template-columns: 1fr; }
    .console-profile--compact .profile-metrics span {
      padding: 0 0 16px;
      border-right: 0 !important;
    }
    .console-profile--compact .profile-metrics span:not(:last-child) {
      margin-bottom: 16px;
      border-bottom: 1px solid var(--console-line);
    }
  }
</style>

<div class="research-console">
  <button class="console-mobile-toggle" type="button" aria-expanded="false" aria-controls="console-sidebar">
    <i class="fas fa-bars" aria-hidden="true"></i>
    <span>Menu</span>
  </button>

  <aside class="console-sidebar" id="console-sidebar" aria-label="Profile and navigation">
    <div class="console-identity">
      <img src="/images/image.jpg" alt="Portrait of Yiran Du" class="console-avatar">
      <h1>Yiran Du</h1>
      <p class="console-role">PhD Student in Education</p>
      <p>University of Cambridge</p>
      <p>Harvard MEd · UCL MRes</p>
    </div>

    <nav class="console-nav" aria-label="Primary navigation">
      <a class="is-active" href="/" aria-current="page"><i class="fas fa-house" aria-hidden="true"></i>Homepage</a>
      <a href="/publications/"><i class="fas fa-file-lines" aria-hidden="true"></i>Publications</a>
      <a href="/academic-service/"><i class="fas fa-user-group" aria-hidden="true"></i>Academic Service</a>
    </nav>

    <button id="theme-toggle" class="console-theme" type="button" aria-label="Toggle light and dark theme">
      <i id="theme-icon" class="fas fa-moon" aria-hidden="true"></i>
      <span>Switch theme</span>
    </button>

    <div class="console-connect">
      <span>Let’s connect</span>
      <a href="mailto:yd392@cam.ac.uk" aria-label="Email Yiran Du"><i class="fas fa-envelope" aria-hidden="true"></i></a>
      <a href="/files/CV.pdf" aria-label="Download Yiran Du’s CV"><i class="fas fa-file-arrow-down" aria-hidden="true"></i></a>
    </div>
  </aside>

  <main class="console-main">
    <section class="console-hero" aria-labelledby="hero-title">
      <div class="console-intro">
        <p class="console-kicker">Welcome to my academic space</p>
        <h2 id="hero-title">Researching the future of learning with AI</h2>
        <p>I study how artificial intelligence can support learning and human collaboration.</p>
        <div class="console-actions">
          <a class="console-button" href="#research-map">Explore research <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
          <a class="console-text-link" href="/publications/">View publications <i class="fas fa-chevron-right" aria-hidden="true"></i></a>
        </div>
      </div>

      <div class="research-map" id="research-map">
        <div class="research-map-heading">
          <p class="console-eyebrow"><i class="fas fa-circle" aria-hidden="true"></i> Research Map</p>
          <p>How my research areas connect and inform each other.</p>
        </div>
        <img src="/images/research-network.jpg" alt="Abstract network connecting four research areas to human-AI collaboration">
        <div class="research-map-label research-map-label--one"><strong>AI in Education</strong><span>Learning environments and analytics</span></div>
        <div class="research-map-label research-map-label--two"><strong>Human–AI Interaction</strong><span>Trust and collaborative AI</span></div>
        <div class="research-map-label research-map-label--three"><strong>Information Systems</strong><span>Platforms and governance</span></div>
        <div class="research-map-label research-map-label--four"><strong>Social Cognition</strong><span>Behavior and social influence</span></div>
        <div class="research-map-center">Human–AI<br>Collaboration</div>
      </div>
    </section>

    <section class="console-profile console-profile--compact" aria-labelledby="profile-title">
      <div class="console-section-heading">
        <p class="console-eyebrow" id="profile-title">Research at a glance <i class="fas fa-circle" aria-hidden="true"></i></p>
      </div>

      <div class="profile-card">
        <div class="profile-metrics" aria-label="Academic profile metrics">
          <span><strong>830</strong> Google Scholar citations</span>
          <span><strong>14</strong> SSCI / SCI articles</span>
          <span><strong>9</strong> first or corresponding-author SSCI / SCI articles</span>
        </div>

        <p class="profile-recognition"><strong>Recognition:</strong> Wiley China Excellent Author (2025) · Lucy Cavendish College Research and Conferences Award (2026)</p>
      </div>
    </section>

    <section class="console-publications" aria-labelledby="highlighted-publications-title">
      <div class="console-section-heading">
        <p class="console-eyebrow" id="highlighted-publications-title">Highlighted Publications <i class="fas fa-circle" aria-hidden="true"></i></p>
        <a href="/publications/">View all publications <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
      </div>

      <div class="publication-list">
        <a class="publication-row" href="https://doi.org/10.1016/j.tele.2026.102390">
          <i class="fas fa-file-lines" aria-hidden="true"></i>
          <span class="publication-copy"><strong>Was this person being ironic? The role of emojis in irony comprehension and memory</strong><small>Telematics and Informatics · 2026</small></span>
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
        </a>
        <a class="publication-row" href="https://doi.org/10.1016/j.system.2024.103533">
          <i class="fas fa-file-lines" aria-hidden="true"></i>
          <span class="publication-copy"><strong>The impact of conversational generative AI chatbots on EFL learners</strong><small>System · 2024</small></span>
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
        </a>
        <a class="publication-row" href="https://doi.org/10.1002/jcal.70174">
          <i class="fas fa-file-lines" aria-hidden="true"></i>
          <span class="publication-copy"><strong>Are teachers addicted to AI? Dependence on generative AI through the I-PACE model</strong><small>Journal of Computer Assisted Learning · 2026</small></span>
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
        </a>
        <a class="publication-row" href="http://doi.org/10.1111/ijal.70204">
          <i class="fas fa-file-lines" aria-hidden="true"></i>
          <span class="publication-copy"><strong>Acceptance and engagement in AI-supported reading among primary school learners</strong><small>International Journal of Applied Linguistics · 2026</small></span>
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
        </a>
        <a class="publication-row" href="https://doi.org/10.1111/ijal.12827">
          <i class="fas fa-file-lines" aria-hidden="true"></i>
          <span class="publication-copy"><strong>Learners’ acceptance and use of multimodal AI-generated content</strong><small>International Journal of Applied Linguistics · 2026</small></span>
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
        </a>
      </div>

    </section>
  </main>
</div>
