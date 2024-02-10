"use client";
import GitHubButton from "react-github-btn";

export function GHStarButton() {
  return (
    <GitHubButton
      href="https://github.com/dogfrogfog/tailwindcss-carousels"
      data-color-scheme="no-preference: light; light: light; dark: dark;"
      data-icon="octicon-star"
      data-show-count="true"
      aria-label="Star dogfrogfog/tailwindcss-carousels on GitHub"
    >
      Star
    </GitHubButton>
  );
}
