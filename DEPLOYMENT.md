# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages automatically.

## Automated Deployment

### Prerequisites
1. The repository must have GitHub Pages enabled in the repository settings
2. GitHub Actions must have the necessary permissions

### Setup Steps

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment", select **Source**: `GitHub Actions`

2. **Configure Permissions**:
   - Go to **Settings** → **Actions** → **General**
   - Scroll to "Workflow permissions"
   - Select **"Read and write permissions"**
   - Check **"Allow GitHub Actions to create and approve pull requests"**
   - Click **Save**

### How It Works

The workflow (`.github/workflows/deploy.yml`) automatically:
- Triggers on every push to the `main` branch
- Installs dependencies
- Builds the React application
- Deploys the built files to GitHub Pages

### Manual Deployment

If you prefer to deploy manually using the `gh-pages` branch method:

```bash
npm run deploy
```

This will:
1. Build the project (`npm run build`)
2. Push the `dist` folder to the `gh-pages` branch

## Accessing the Deployed Site

Once deployed, your site will be available at:
**https://SpidySamurai.github.io/React-Memory-Game/**

## Triggering a Deployment

- **Automatic**: Push any changes to the `main` branch
- **Manual**: Go to **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all dependencies are properly listed in `package.json`
- Verify the build works locally with `npm run build`

### 404 Errors After Deployment
- Verify the `base` path in `vite.config.js` matches your repository name
- Ensure GitHub Pages is configured to use GitHub Actions as the source

### Routing Issues (for React Router)
- For GitHub Pages with React Router, you may need to handle 404s
- The current setup uses HashRouter which works well with GitHub Pages

## Configuration Files

- **vite.config.js**: Contains the `base` path configuration (`/React-Memory-Game/`)
- **package.json**: Contains deployment scripts and homepage URL
- **.github/workflows/deploy.yml**: GitHub Actions workflow for automated deployment
