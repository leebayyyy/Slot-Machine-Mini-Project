# Food Frenzy Slot Machine

## Team Member
- **Name:** Charlz Levi Orcullo
- **Student ID:** 02-2425-009566


## Project Title & Theme
**JavaScript Slot Machine — "Food Frenzy" Edition**

A browser-based slot machine game built with vanilla HTML5, CSS3, and JavaScript. This version uses fast food-themed emojis (🍕 🍔 🌮 🍟 🍩 🍦) for a fun, casual snack-attack feel.

## How to Run the Project
1. Download and unzip the project folder.
2. Make sure `index.html`, `style.css`, and `script.js` are all in the same folder.
3. Double-click `index.html` (or right-click then Open With any web browser).
4. No installation, server, or build tools required. It runs entirely in the browser.

## Features Implemented
- **Three-reel slot machine** with randomized fast food-emoji symbols.
- **Spin animation** — reels rapidly cycle through symbols before landing on a final result, simulating a real slot spin.
- **Win detection logic:**
  - 3 matching symbols → Jackpot (10× the bet)
  - 2 matching symbols → Small win (2× the bet)
  - No matches → Bet is lost
- **Credit system** — starts at 100 credits; credits update live after every spin.
- **Adjustable betting** — increase/decrease bet in increments of 10, with limits so the player can't bet more than their current credits or below the 10-credit minimum.
- **Button state handling** — controls disable during the spin animation to prevent double-clicks, and disable again if the player runs out of credits.
- **Reset function** — restores credits and bet to their starting values so the game can be replayed.
- **Custom styling** — fast food-themed color palette, styled reels, and a simple bounce animation during spins.

