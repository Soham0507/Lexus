---
name: Headless WebGL test failures
description: Why the Playwright testing agent reports the Lexus quiz as broken while real browsers work fine.
---
The quiz HTML (`artifacts/lexus-energy-quiz/public/lexus_energy_quiz_tuned_v018.html`) calls `canvas.getContext('webgl')` at the top of its main inline script and uses the context immediately. In a browser without WebGL the script throws, halting top-level execution, so later `let scores`/quiz handlers never initialize and buttons appear dead ("Cannot access 'scores' before initialization" when calling startQuiz()).

**Why:** The automated testing agent's headless Chromium reports `webgl: false, webgl2: false`. Real browsers (including the screenshot tool's browser) render fine.

**How to apply:** Don't treat testing-agent failures on this app's interactions as regressions. Verify with the screenshot tool or a real browser. If e2e testing is ever needed, the test browser must have WebGL enabled (e.g. swiftshader flags).
