# Taha Ibrahim Siddiqui - GitHub Pages site

This repository contains a no-build static site for GitHub Pages. It is designed to publish cleanly from the root of the `main` branch at:

`https://tahaibrahimsiddiqui.github.io/personal_website/`

## Publishing

1. Push changes to the `main` branch.
2. In the GitHub repository settings, open `Pages`.
3. Set the source to `Deploy from a branch`.
4. Choose `main` and the `/ (root)` folder.

## Updating content

Most content lives in `assets/js/site-data.js`. Edit that file to update:

- profile copy
- research entries
- writing entries
- resources
- gallery images

The site uses plain HTML, CSS, and vanilla JS. There is no build step and no Node dependency.
