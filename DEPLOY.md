# Deployment Guide for Render

## Quick Deploy Steps

1. **Connect GitHub Repository**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Static Site"
   - Connect your GitHub account and select `Portfolio2025` repository

2. **Configure Build Settings**
   - **Name**: jose-estrada-portfolio
   - **Branch**: main
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - Click "Create Static Site"

## Performance Optimizations Applied

### 1. **Build Optimizations**
- Code splitting for faster initial load
- Separate chunks for vendor, animations, and icons
- Minified JavaScript and CSS
- Optimized asset paths with cache-busting hashes

### 2. **Caching Strategy**
- Static assets cached for 1 year (JS, CSS, images)
- HTML files never cached (always fresh)
- Security headers included

### 3. **Image Optimization**
- All images organized in `/project-images/`
- Lazy loading implemented for better performance
- Proper cache headers for images

## Post-Deployment Steps

1. **Verify Performance**
   - Run Google Lighthouse test
   - Check Core Web Vitals scores
   - Test on mobile devices

2. **Custom Domain (Optional)**
   - Add custom domain in Render settings
   - Update DNS records

## Monitoring

- Check Render dashboard for build logs
- Monitor performance metrics
- Set up alerts for downtime

## Troubleshooting

If deployment fails:
1. Check build logs in Render dashboard
2. Ensure all dependencies are in package.json
3. Verify node version compatibility
4. Clear Render build cache and redeploy