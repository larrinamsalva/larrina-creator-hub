# Larrina's Creative Universe ✦

**Play. Learn. Create. Connect.**

A free, mobile-friendly, fully static personal creator hub for Larrina's public games, helpful apps, music, and creative projects. Inspired by the *idea* of Mikey's project gateway but separately designed and written for Larrina.

## What is included

- Responsive, colorful homepage with a distinct Larrina identity
- Direct links to published games and music and public project repositories
- Searchable catalog with category filters
- "Surprise me" random project button
- Share/copy-link button, keyboard focus styles, reduced-motion preference support
- Editable `projects.js` file for growing the public catalog
- SVG favicon and social-sharing preview
- QR code for the **proposed future URL**, included in `assets/qr-after-publish.*` **ONLY use once the site is actually live**
- `PROFILE_README.md` with an optional GitHub profile bio
- No build tools, dependencies, user accounts, analytics, tracking, or API keys

## Publish it on GitHub Pages (recommended)

1. Sign in to Larrina's GitHub account.
2. Create a **new public repository** named **`larrina-creator-hub`**, with **no starter README** (to avoid a file conflict).
3. Unzip this package and upload **the contents** of its `larrina-creator-hub` folder to the root of the new repo using **Add file → Upload files**. Include `index.html`, `styles.css`, `app.js`, `projects.js`, `.nojekyll` and `assets/`. (`PROFILE_README.md` can stay as a reference file.)
4. On GitHub, go to **Settings → Pages** and choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
5. Open and test **https://larrinamsalva.github.io/larrina-creator-hub/** after publishing. Open each project card, search/filter and the share button on both desktop and phone.
6. Only after confirming it works should you print or distribute `assets/qr-after-publish.png` / `.svg`. The QR points to that exact URL.

> Publishing was not performed by generating this package. A GitHub repo and Pages setting must be created before the proposed URL exists.

## Add a new project or link

Open `projects.js` and add one new object inside `window.LARRINA_PROJECTS`, following existing examples. Categories: `games`, `apps`, `music`, or `creative`. Only include verified public URLs. The page will update automatically on the next deployment. This site does not automatically discover private repositories.

## Add Facebook, groups, and more

They were **deliberately omitted** until Larrina or Mikey supplies their confirmed public links. Edit `index.html` in the `#connect` section to add buttons. Do not invent social links or publish personal contact details without permission.

## Optional GitHub profile intro

The file `PROFILE_README.md` is a suggested profile README. The special GitHub profile repository must be **`larrinamsalva/larrinamsalva`**. You can copy the text into that repo's `README.md` if you want a matching public GitHub profile. Do not change other repositories.

## Careful public descriptions

- Family Companion is described as an organizer, **not** a medical service.
- SCAM-A-LAX links to the source repository while release/availability is reviewed; its risk meter is not a scam-probability calculator.
- Business projects link to public source only; no claims are made about production availability.
- Private app repositories and unverified social profiles are intentionally **not linked**.
- Suno goes to the supplied artist handle; confirm that the public profile opens before sharing widely.

## License / attribution

Original HTML, CSS and JavaScript created for Larrina's Creator Hub. Third-party project names belong to their respective owners. Check and obtain permission before adding other people's photos, logos, or graphics. © Larrina.