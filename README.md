# GrantWise

A React application that helps organizations craft compelling grant proposals using AI assistance.

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages in your repository**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"

2. **Push to the main branch**:
   - The GitHub Action will automatically build and deploy the site when you push to the main branch
   - You can also manually trigger the workflow from the Actions tab

3. **Access your deployed site**:
   - Once deployed, your site will be available at `https://[your-username].github.io/GrantWise/`
   - If you're using a custom domain, configure it in the GitHub Pages settings

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Customizing the Base Path

If your repository has a different name or you're deploying to a custom domain, update the `base` property in `vite.config.ts`:

```typescript
// For a different repo name
base: '/your-repo-name/',

// For a custom domain (or root deployment)
base: '/',
``` 