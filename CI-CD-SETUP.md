# CI/CD Setup Guide for Bharat Group Website

This document explains the CI/CD pipeline setup for automated building, testing, and deployment.

## Overview

We have two GitHub Actions workflows:

1. **CI (Continuous Integration)** - `.github/workflows/ci.yml`
   - Runs on every push and pull request
   - Tests on Node.js 18.x and 20.x
   - Builds the project
   - Runs linter
   - Uploads build artifacts

2. **CD (Continuous Deployment)** - `.github/workflows/deploy.yml`
   - Runs on every push to main branch
   - Builds and deploys to GitHub Pages
   - Automatic deployment

## GitHub Pages Setup

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/vikashmahato23/bharat_group
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
   - DO NOT select "Deploy from a branch"

### Step 2: Push the CI/CD Configuration

The workflows are already created. Just push them to GitHub:

```bash
git add .
git commit -m "Add CI/CD workflows for automated deployment"
git push
```

### Step 3: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Once completed (green checkmark), your site will be live at:

   **https://vikashmahato23.github.io/bharat_group/**

## How It Works

### Continuous Integration (CI)

When you push code or create a pull request:
1. GitHub Actions automatically checks out your code
2. Installs dependencies with `npm ci`
3. Runs the linter (if configured)
4. Builds the project with `npm run build`
5. Verifies the build succeeded
6. Uploads build artifacts for download

### Continuous Deployment (CD)

When you push to the main branch:
1. All CI steps run first
2. If build succeeds, it configures GitHub Pages
3. Uploads the `dist` folder as a Pages artifact
4. Deploys to GitHub Pages
5. Your site is automatically updated at the GitHub Pages URL

## Monitoring Deployments

### View Workflow Status

1. Go to the **Actions** tab: https://github.com/vikashmahato23/bharat_group/actions
2. Click on any workflow run to see details
3. Green checkmark = Success
4. Red X = Failed (click to see error details)

### Check Deployment Status

1. In **Settings** → **Pages**, you'll see:
   - **Your site is live at**: [URL]
   - Last deployment time
   - Deployment status

## Workflow Badges

Add these to your README.md to show build status:

```markdown
![CI](https://github.com/vikashmahato23/bharat_group/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/vikashmahato23/bharat_group/actions/workflows/deploy.yml/badge.svg)
```

## Triggering Manual Deployment

The deploy workflow has `workflow_dispatch` enabled, so you can manually trigger deployment:

1. Go to **Actions** tab
2. Click "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select branch (usually main)
5. Click green "Run workflow" button

## Environment Variables

For GitHub Pages deployment, we use:
- `GITHUB_PAGES=true` - Sets the base path to `/bharat_group/`

This is configured in `vite.config.js`:
```javascript
base: process.env.GITHUB_PAGES === 'true' ? '/bharat_group/' : '/'
```

## Troubleshooting

### Deployment Failed

1. Check the Actions tab for error messages
2. Common issues:
   - Pages not enabled in Settings
   - Source not set to "GitHub Actions"
   - Build errors (check CI workflow first)

### Site Not Loading Correctly

1. Verify base path in `vite.config.js` matches your repo name
2. Clear browser cache
3. Check that assets are loading (F12 → Network tab)

### Build Succeeds Locally But Fails in CI

1. Check Node.js version (CI uses 18.x and 20.x)
2. Ensure all dependencies are in `package.json`
3. Check for environment-specific code

## Custom Domain (Optional)

To use a custom domain like `www.bharatgroup.com`:

1. In **Settings** → **Pages** → **Custom domain**
2. Enter your domain name
3. Add a `CNAME` file to your `public/` folder with your domain
4. Configure DNS at your domain provider:
   - Add CNAME record pointing to `vikashmahato23.github.io`
   - Or A records pointing to GitHub's IPs

## Alternative Deployment Options

Instead of GitHub Pages, you can also deploy to:

### Vercel
1. Import your GitHub repo at vercel.com
2. Auto-deploys on every push
3. Free SSL and custom domain

### Netlify
1. Connect GitHub repo at netlify.com
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Auto-deploys on push

### Your Own Server
Use the deploy workflow to upload to your server via FTP/SSH instead of GitHub Pages.

## Next Steps

1. Push this configuration to GitHub
2. Enable GitHub Pages in Settings
3. Wait for first deployment
4. Visit your live site!

Your site will be available at:
**https://vikashmahato23.github.io/bharat_group/**
