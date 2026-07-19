---
permalink: /
layout: research-home
title: "Yiran Du"
description: "Yiran Du is a PhD researcher at the University of Cambridge studying human–AI interaction, AI in education, digital communication, and social cognition."
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
  .profile-facts {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 26px;
    padding-top: 20px;
  }
  .profile-facts p {
    margin: 0;
    color: var(--console-muted);
    font-size: 0.83rem;
    line-height: 1.65;
  }
  .profile-facts strong {
    display: block;
    margin-bottom: 4px;
    color: var(--console-text);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }
  @media screen and (max-width: 800px) {
    .console-profile--compact .profile-metrics,
    .profile-facts { grid-template-columns: 1fr; }
    .console-profile--compact .profile-metrics span {
      padding: 0 0 16px;
      border-right: 0 !important;
    }
    .console-profile--compact .profile-metrics span:not(:last-child) {
      margin-bottom: 16px;
      border-bottom: 1px solid var(--console-line);
    }
    .profile-facts { gap: 16px; }
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
      <p class="console-role">PhD Researcher in Education</p>
      <p>University of Cambridge</p>
    </div>

    <nav class="console-nav" aria-label="Primary navigation">
      <a class="is-active" href="/" aria-current="page"><i class="fas fa-house" aria-hidden="true"></i>Research</a>
      <a href="/publications/"><i class="fas fa-file-lines" aria-hidden="true"></i>Publications</a>
      <a href="/academic-service/"><i class="fas fa-user-group" aria-hidden="true"></i>Academic Service</a>
      <a href="/files/CV.pdf"><i class="fas fa-file-arrow-down" aria-hidden="true"></i>Curriculum Vitae</a>
    </nav>

    <button id="theme-toggle" class="console-theme" type="button" aria-label="Toggle light and dark theme">
      <i id="theme-icon" class="fas fa-moon" aria-hidden="true"></i>
      <span>Switch theme</span>
    </button>

    <div class="console-focus" aria-label="Research themes">
      <p class="console-eyebrow">Research Themes</p>
      <ul>
        <li>AI in Education & Language Learning</li>
        <li>Human–AI Interaction & Adoption</li>
        <li>Social Cognition & Digital Communication</li>
        <li>Educational Research & Measurement</li>
      </ul>
    </div>

    <div class="console-connect">
      <span>Contact</span>
      <a href="mailto:yd392@cam.ac.uk" aria-label="Email Yiran Du"><i class="fas fa-envelope" aria-hidden="true"></i></a>
      <a href="https://scholar.google.com/citations?user=k0KssJUAAAAJ&hl=en" aria-label="View Yiran Du on Google Scholar"><i class="fas fa-graduation-cap" aria-hidden="true"></i></a>
      <a href="https://orcid.org/0000-0002-6576-0073" aria-label="View Yiran Du's ORCID profile"><i class="fab fa-orcid" aria-hidden="true"></i></a>
    </div>
  </aside>

  <main class="console-main">
    <section class="console-hero" aria-labelledby="hero-title">
      <div class="console-intro">
        <p class="console-kicker">Human–AI interaction · Education · Social cognition</p>
        <h2 id="hero-title">Understanding how people adopt, interpret, and depend on AI</h2>
        <p>I am a PhD researcher in Education at the University of Cambridge. My work examines human–AI interaction in learning and digital communication, combining perspectives from education, information systems, and social cognition.</p>
        <p>I am particularly interested in when AI supports human agency, when reliance becomes dependence, and how social and psychological factors shape technology use.</p>
        <div class="console-actions">
          <a class="console-button" href="/publications/">Selected publications <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
          <a class="console-text-link" href="/files/CV.pdf">Download CV <i class="fas fa-chevron-right" aria-hidden="true"></i></a>
        </div>
      </div>

      <div class="research-map" id="research-map">
        <div class="research-map-heading">
          <p class="console-eyebrow"><i class="fas fa-circle" aria-hidden="true"></i> Current Questions</p>
          <p>Four connected questions guide my research programme.</p>
        </div>
        <img src="/images/research-network.jpg" alt="Abstract network connecting four research questions to responsible human–AI collaboration">
        <div class="research-map-label research-map-label--one"><strong>AI-supported learning</strong><span>How can AI strengthen learning without weakening agency?</span></div>
        <div class="research-map-label research-map-label--two"><strong>Adoption & dependence</strong><span>Why do people accept, resist, or over-rely on AI?</span></div>
        <div class="research-map-label research-map-label--three"><strong>Digital communication</strong><span>How are intention, irony, and affect interpreted online?</span></div>
        <div class="research-map-label research-map-label--four"><strong>Measurement</strong><span>How can behavioural and educational constructs be measured rigorously?</span></div>
        <div class="research-map-center">Responsible<br>Human–AI<br>Collaboration</div>
      </div>
    </section>

    <section class="console-profile console-profile--compact" aria-labelledby="profile-title">
      <div class="console-section-heading">
        <p class="console-eyebrow" id="profile-title">Profile <i class="fas fa-circle" aria-hidden="true"></i></p>
        <a href="/academic-service/">Academic service <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
      </div>

      <div class="profile-card">
        <div class="profile-metrics" aria-label="Academic profile metrics, updated July 2026">
          <span><strong>830</strong> Google Scholar citations · July 2026</span>
          <span><strong>18</strong> research outputs</span>
          <span><strong>9</strong> first- or corresponding-author SSCI / SCI articles</span>
        </div>

        <div class="profile-facts">
          <p><strong>Education</strong> PhD in Education, University of Cambridge; MEd in Human Development and Education, Harvard University; MRes in Cognitive Neuroscience, University College London.</p>
          <p><strong>Recognition</strong> Wiley China Excellent Author, 2025; Research and Conferences Award, Lucy Cavendish College, 2026.</p>
        </div>
      </div>
    </section>

    <section class="console-publications" aria-labelledby="recent-publications-title">
      <div class="console-section-heading">
        <p class="console-eyebrow" id="recent-publications-title">Selected Publications <i class="fas fa-circle" aria-hidden="true"></i></p>
        <a href="/publications/">View all publications <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
      </div>

      <div class="publication-filters" role="group" aria-label="Filter publications by research theme">
        <button type="button" class="is-active" data-filter="all" aria-pressed="true">All</button>
        <button type="button" data-filter="ai-education" aria-pressed="false">AI in Education</button>
        <button type="button" data-filter="human-ai" aria-pressed="false">Human–AI Interaction</button>
        <button type="button" data-filter="social-cognition" aria-pressed="false">Social Cognition</button>
        <button type="button" data-filter="education-research" aria-pressed="false">Education & Measurement</button>
      </div>

      <div class="publication-list" aria-live="polite">
        <a class="publication-row" data-topic="social-cognition" href="https://doi.org/10.1016/j.tele.2026.102390">
          <i class="fas fa-file-lines" aria-hidden="true"></i>
          <span class="publication-copy"><strong>Was this person being ironic? The role of emojis in irony comprehension and memory</strong><small>Telematics and Informatics · 2026</small></span>
          <span class="publication-topic">Social Cognition</span>
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
        </a>
        <a class="publication-row" data-topic="human-ai ai-education" href="https://doi.org/10.1002/jcal.70174">
          <i class="fas fa-file-lines" aria-hidden="true"></i>
          <span class="publication-copy"><strong>Are teachers addicted to AI? Dependence on generative AI through the I-PACE model</strong><small>Journal of Computer Assisted Learning · 2026</small></span>
          <span class="publication-topic">Human–AI Interaction</span>
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
        </a>
        <a class="publication-row" data-topic="ai-education" href="https://doi.org/10.1111/ijal.70204">
          <i class="fas fa-file-lines" aria-hidden="true"></i>
          <span class="publication-copy"><strong>Acceptance and engagement in AI-supported reading among primary school learners</strong><small>International Journal of Applied Linguistics · 2026</small></span>
          <span class="publication-topic">AI in Education</span>
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
        </a>
        <a class="publication-row" data-topic="human-ai ai-education" href="https://doi.org/10.1111/ijal.12827">
          <i class="fas fa-file-lines" aria-hidden="true"></i>
          <span class="publication-copy"><strong>Learners’ acceptance and use of multimodal AI-generated content</strong><small>International Journal of Applied Linguistics · 2026</small></span>
          <span class="publication-topic">Human–AI Interaction</span>
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
        </a>
        <p class="publication-empty" hidden>No selected publications match this theme. View the complete archive for related work.</p>
      </div>

      <p class="console-statement"><i class="fas fa-quote-left" aria-hidden="true"></i> Building evidence for responsible, human-centred AI that supports learning and society.</p>
    </section>
  </main>
</div>
