# Siddhesh Sarfare — Portfolio

Personal portfolio of Siddhesh Sarfare, front-end web developer.
Live at <https://siddhesh-sarfare.github.io/Portfolio/>.

Built with React (Create React App) and Tailwind CSS. A single page with
Hero, About, Work, Skills and Contact sections, light/dark themes, and an
accessible mobile menu.

## Run locally

```bash
yarn install
yarn start
```

The dev server opens at <http://localhost:3000/Portfolio>.

## Scripts

| Command       | What it does                                   |
| ------------- | ---------------------------------------------- |
| `yarn start`  | Development server with hot reload             |
| `yarn test`   | Runs the test suite                            |
| `yarn build`  | Production build in `build/`                   |
| `yarn deploy` | Builds and publishes `build/` to GitHub Pages  |

## Editing content

All copy, projects, skills and social links live in
[`src/data/content.js`](src/data/content.js). Edit that file to update the
site without touching components.

## Structure

```
src/
  data/content.js        site content
  hooks/                 useReveal, useActiveSection, useTheme
  components/
    Header/              sticky nav, mobile menu, theme toggle
    sections/            Hero, About, Projects, Skills, Contact
    Footer/
    ui/                  Button, Icon, SectionHeading, SocialLinks, BackToTop
  index.css              design tokens (colours, light/dark) and base styles
tailwind.config.js       maps tokens to Tailwind utilities
```
