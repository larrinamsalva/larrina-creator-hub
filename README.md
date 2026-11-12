# Larrina's Creative Universe ✦

**Play. Learn. Create. Connect.**

**Website:** https://larrinamsalva.github.io/larrina-creator-hub/

A colorful, mobile-friendly home for Larrina's learning games, helpful software, Chip Nasty music and creative projects.

## Explore

- [LarriVerse Arcade](https://larrinamsalva.github.io/larriverse-arcade/) — now with dinosaur discovery and 3D prehistoric exploration
- [Dino Discovery World · 3D](https://larrinamsalva.github.io/larriverse-arcade/games/dino-discovery-world/) — all eight chapters open for free choice, 80 missions and organic-looking models
- [3D Dinosaur Explorer Trails](https://larrinamsalva.github.io/larriverse-arcade/games/dino-discovery-world/explore.html) — walk through Triassic, Jurassic and Cretaceous with a saved trail journal
- [Brain Sweat Studio](https://larrinamsalva.github.io/brainsweatstudios/)
- [ChipToons Studio](https://larrinamsalva.github.io/ChipToons/) — create editable educational cartoons and export WebM movies (smoke-test on the hosted page)
- [ForgeOS Property Manager · Guest Demo](https://forgeos-property-manager-staging.vercel.app/demo) — fictional-data-only, no-login staging tour of RV and property management. This is **staging**, not live commercial software; check public access and the example workspace in a normal browser before sharing widely.
- **LMS · Living Management System** — [Open LMS setup guide](https://github.com/larrinamsalva/LMS#run-the-fictional-demo-locally) or [browse the LMS repository](https://github.com/larrinamsalva/LMS). Its prominent hub card opens these real project instructions; no public online demo has been confirmed.
- [Family Companion](https://family-wellness-companion.larrina.chatgpt.site/)
- [VibraHeal](https://larrinamsalva.github.io/vibra-heal/) — relaxation, guided breathing, nature sounds and mindfulness
- [SCAM-A-LAX](https://larrinamsalva.github.io/SCAM-A-LAX/)
- [Field Manager website](https://field-manager-website.vercel.app/)
- [Chip Nasty's music on Suno](https://suno.com/@larrinasalva)
- [Laughrina](https://larrinamsalva.github.io/Laughrina/)

For hosted projects, **Open** buttons lead directly to the public app, game, or music page, not to the GitHub repository. A smaller optional developer link leads to source code. **LMS** has a prominent **Open LMS setup guide** link to the repository's local fictional-demo instructions, and is clearly labeled **not hosted online** rather than pretending the GitHub link launches a browser app. The ForgeOS link comes from the connected Vercel staging project's production-target deployment record, not from a guessed hostname; please check that the no-login `/demo` route is accessible before public promotion. Visit each destination in a normal browser after merging, especially ChipToons and ForgeOS.

## How to update the hub

This is a **static HTML/CSS/JavaScript website**—no React build, API key, database, account, or dependency installation required.

- **Add or edit a project:** Change its entry in `projects.js`. Keep the `id` unique; supported categories are `games`, `apps`, `music` and `creative`. `href` must open the direct public app/site; `sourceHref` is an optional GitHub code link. If there is no deployed public app, use `href: ''` and `status: 'local'`; the card explains the limitation instead of showing a broken launch button.
- **Change the writing or site sections:** Edit `index.html`.
- **Change colors or layout:** Edit `styles.css`.
- **Change search, filters, share or Surprise Me behavior:** Edit `app.js`.
- **Change branding artwork:** Edit `assets/`.

Commit a change to `main`. The `.github/workflows/deploy.yml` workflow automatically publishes the site using GitHub Pages. Check the [Actions tab](https://github.com/larrinamsalva/larrina-creator-hub/actions) for the deployment result.

## QR code and business cards

The QR code at [assets/qr-after-publish.png](assets/qr-after-publish.png) and its scalable [SVG version](assets/qr-after-publish.svg) both point to:

https://larrinamsalva.github.io/larrina-creator-hub/

Test the live destination with an actual phone before printing or distributing cards. The URL stays stable while the content grows.

## Share preview

The image in [assets/social-preview.png](assets/social-preview.png) is referenced by social sharing meta tags in the homepage. A matching editable SVG is also included.

## Optional GitHub profile intro

`PROFILE_README.md` is a **draft only** for a special GitHub profile README. It does not automatically change the public profile. If Larrina wants to use it, the special profile repository would be `larrinamsalva/larrinamsalva`.

## Privacy and accuracy

Only verified public destinations belong on the front page. Don't publish personal numbers, addresses, private repositories or unconfirmed group links. The site has no analytics, backend, login or visitor data collection. Family Companion is an organizer, not a medical provider; SCAM-A-LAX's risk meter is an educational warning indicator, not a scam probability.

Original website assembled for Larrina with ❤️.
