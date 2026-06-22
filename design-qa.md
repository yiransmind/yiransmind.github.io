source visual truth path: /Users/yiran/.codex/generated_images/019eee06-10e7-78b3-b543-da89b7d89ca6/exec-8d18b020-80e1-4b7b-9e0c-585333b64b04.png
implementation screenshot paths: /Users/yiran/Documents/Codex/2026-06-22/he/work/qa/desktop-viewport.png; /Users/yiran/Documents/Codex/2026-06-22/he/work/qa/publications-live.png; /Users/yiran/Documents/Codex/2026-06-22/he/work/qa/academic-service-live.png
viewport: 1487 x 1058 desktop; 390 x 844 mobile
state: dark homepage; dark Publications; dark Academic Service; light theme; mobile Academic Service navigation open

**Full-view comparison evidence**

The side-by-side comparison at `/Users/yiran/Documents/Codex/2026-06-22/he/work/qa/comparison-full.png` confirms the same core composition as the selected Research Console concept: fixed identity rail, two-column hero, bordered network visualization, horizontal topic filters, and publication rows. The implementation intentionally uses the real biography and publication records, producing slightly denser copy than the concept.

The three-view comparison at `/Users/yiran/Documents/Codex/2026-06-22/he/work/qa/design-comparison.png` verifies that the Publications and Academic Service pages now use the same fixed identity rail, dark/cyan tokens, heading hierarchy, dividers, and compact editorial styling as the selected concept.

**Focused region comparison evidence**

The focused comparison at `/Users/yiran/Documents/Codex/2026-06-22/he/work/qa/comparison-hero.png` confirms the hero hierarchy, headline wrapping, cyan accent treatment, research-map scale, and primary action alignment. The implementation uses the generated research-network raster asset and Font Awesome icons; no placeholder or custom SVG artwork remains.

**Findings**

No actionable P0, P1, or P2 findings remain.

- Fonts and typography: the light-weight display heading, uppercase micro-labels, readable body scale, and compact UI labels preserve the reference hierarchy. Real biography copy wraps more densely but remains readable.
- Spacing and layout rhythm: desktop grid, sidebar width, map proportions, filter spacing, and publication separators align with the selected concept. Mobile navigation opens as a stable off-canvas rail without clipped controls.
- Colors and visual tokens: dark midnight/cyan treatment matches the reference; the light theme maintains readable contrast and consistent semantic accents.
- Image quality and asset fidelity: the supplied portrait and generated research network are sharp, correctly cropped, and stylistically consistent. Icons come from the site's existing Font Awesome library.
- Copy and content: all visible credentials and publications are real repository content; no invented metrics or publications remain.
- Interactions and accessibility: topic filters update `aria-selected`, Information Systems exposes a clear empty state, theme switching restores both states, mobile navigation opens correctly, controls use semantic buttons/links, and no browser console errors were observed.
- Interior pages: Publications exposes 17 publication records with clear year sections. Academic Service exposes all 52 supplied journal-review entries in a two-column desktop grid and one-column mobile list. Active navigation is correct on both routes.
- Responsive behavior: the interior pages have no horizontal overflow at desktop or 390 px mobile width; the off-canvas navigation reports its expanded state correctly.

**Implementation Checklist**

- [x] Desktop dark-theme visual comparison
- [x] Focused hero/map comparison
- [x] Light-theme contrast check
- [x] Mobile menu check
- [x] Publication filtering and empty-state check
- [x] Theme-toggle round trip
- [x] Browser console error check
- [x] Publications desktop layout and active-navigation check
- [x] Academic Service desktop reviewer-grid check
- [x] Academic Service mobile single-column and navigation check

**Patches made since the previous QA pass**

- Repaired corrupted deployment blobs and triggered a clean GitHub Pages build.
- Reduced hero headline scale and rebalanced hero columns to match the reference wrapping.
- Added the missing Information Systems filter and an accessible empty state.
- Verified the final Pages deployment and all interactive states.
- Replaced the legacy Publications and Academic Service layouts with the Research Console shell.
- Converted the dense semicolon-separated reviewer paragraph into a responsive 52-item journal list.

**Follow-up Polish**

- [P3] The real biography is longer than the concept copy, so the publication section begins slightly lower than in the mock. This is an acceptable content-driven deviation.

final result: passed
