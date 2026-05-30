# Deploying the AP Psychology Study Hub to GitHub Pages 🚀

This application is fully compatible with GitHub Pages. We configured Vite to use relative assets (`base: "./"`), meaning it will load properly whether it is deployed to a custom domain (e.g., `https://my-domain.com`) or a subfolder repository path (e.g., `https://<username>.github.io/psych-study-hub/`).

Below are the two recommended methods to host the built application.

---

## Method A: Continuous Deployment via GitHub Actions (Recommended)

This is the cleanest approach. Every time you push a code change to `main` or `master`, GitHub will automatically build and publish the application.

1. **Create the Workflow File**
   In your repository, create a new file at `.github/workflows/deploy.yml` with the following content:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main # Change to master if that is your default branch

   permissions:
     contents: write
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: true

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout Code
           uses: actions/checkout@v4

         - name: Install Node.js
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'

         - name: Install Dependencies
           run: npm ci

         - name: Build Application
           run: npm run build

         - name: Upload Build Artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

         - name: Deploy to GitHub Pages
           uses: actions/deploy-pages@v4
   ```

2. **Configure Repository Settings**
   - Go to your GitHub repository in your browser.
   - Click on **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.
   - Push your code to the designated branch, and GitHub will handle the rest!

---

## Method B: Quick Command-Line Deploy (Manual)

If you prefer to deploy directly from your local terminal using an automated task:

1. **Add `gh-pages` helper package**
   In your terminal, install the deployment utility:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to `package.json`**
   Add these two lines inside the `"scripts"` block in your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Deploy with One Command**
   Run the following terminal command to build and push to a clean remote `gh-pages` deployment branch automatically:
   ```bash
   npm run deploy
   ```

---

## Technical Features Implemented for Seamless Deployments
- **Relative Path Resolution**: Adjusted `vite.config.ts` to output relative asset linkages.
- **Client-Side SPA Routing**: Since the app uses responsive React state-based navigation for view routing (instead of browser historical endpoints requiring server url rewrites), it will never trigger a "404 Not Found" when users refresh the page, which is a major benefit of state-based views on GitHub Pages.
- **Clean Linter Validation**: Standard code bases are fully tested and compile without any warning flags.
