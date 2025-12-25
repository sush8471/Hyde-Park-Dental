# 🚀 Deployment Guide: Hyde Park Dental

## Deployment Platforms

### 1. Vercel (Recommended) ⭐

**Why Vercel?**

- ✅ Free for personal/commercial projects
- ✅ Automatic deployments from GitHub
- ✅ Built-in CDN and SSL
- ✅ Perfect for Vite/React apps
- ✅ Easy custom domain setup

#### Deploy to Vercel

**Option A: Via Website (Easiest)**

1. Go to https://vercel.com/
2. Sign up with GitHub
3. Click **"New Project"**
4. Import your `hyde-park-dental` repository
5. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `bun run build`
   - **Output Directory:** `dist`
   - **Install Command:** `bun install`
6. Click **Deploy**
7. Wait 2-3 minutes ⏱️
8. Your site is live! 🎉

**Option B: Via CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

### 2. Netlify

**Why Netlify?**

- ✅ Easy drag-and-drop deployment
- ✅ Form handling built-in
- ✅ Generous free tier

#### Deploy to Netlify

1. Go to https://netlify.com/
2. Sign up with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect to GitHub
5. Select your repository
6. Configure:
   - **Build command:** `bun run build`
   - **Publish directory:** `dist`
7. Click **Deploy**

---

### 3. GitHub Pages (Free but limited)

**Note:** GitHub Pages works best with static sites, requires some configuration for SPAs.

```bash
# Install gh-pages
bun add -D gh-pages

# Add to package.json scripts:
"predeploy": "bun run build",
"deploy": "gh-pages -d dist"

# Deploy
bun run deploy
```

Then enable GitHub Pages in repository settings.

---

## 🌐 Custom Domain Setup

### For Vercel:

1. Go to your project in Vercel
2. Click **Settings** → **Domains**
3. Add your domain: `www.hydeparkdental.com.au`
4. Follow DNS configuration instructions
5. Add these records to your domain registrar:

**For Vercel:**

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For root domain:**

```
Type: A
Name: @
Value: 76.76.21.21
```

### For Netlify:

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Add DNS records as instructed

---

## 🔧 Build Configuration

### Vercel Configuration (`vercel.json`)

Create this file in project root:

```json
{
  "buildCommand": "bun run build",
  "outputDirectory": "dist",
  "devCommand": "bun run dev",
  "installCommand": "bun install",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Netlify Configuration (`netlify.toml`)

Create this file in project root:

```toml
[build]
  command = "bun run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🎯 Pre-Deployment Checklist

### ✅ Before Deploying:

- [ ] **Test build locally:** `bun run build && bun run preview`
- [ ] **Check all links work**
- [ ] **Verify booking system links**
- [ ] **Test responsive design** (mobile, tablet, desktop)
- [ ] **Check all images load**
- [ ] **Test navigation menu**
- [ ] **Verify footer social links**
- [ ] **Check all service dialogs open**
- [ ] **Test testimonial carousel**
- [ ] **Verify before/after sliders work**

### ✅ After Deploying:

- [ ] **Test live URL loads**
- [ ] **Check SSL certificate** (should show 🔒)
- [ ] **Test booking links** (open Centaur Portal)
- [ ] **Test phone links** (click-to-call works)
- [ ] **Test on real mobile device**
- [ ] **Check page load speed** (use PageSpeed Insights)
- [ ] **Verify SEO meta tags**
- [ ] **Test social media links**

---

## 🔍 Performance Optimization

### Already Optimized:

✅ **Vite** - Fast build and optimized production bundle
✅ **Lazy loading** - Images load as needed
✅ **Tree shaking** - Unused code removed
✅ **Code splitting** - Smaller initial bundle
✅ **Minification** - Compressed HTML, CSS, JS

### Additional Optimizations:

1. **Image Optimization:**

   ```bash
   # Convert images to WebP
   # Use image optimization tools
   ```

2. **Enable Compression:**

   - Vercel/Netlify do this automatically

3. **Add Analytics:**
   ```bash
   # Google Analytics
   # Vercel Analytics
   ```

---

## 📊 Monitoring After Launch

### Tools to Use:

1. **Google Analytics** - Track visitors
2. **Google Search Console** - Monitor SEO
3. **PageSpeed Insights** - Check performance
4. **Vercel Analytics** - Real-time metrics
5. **Uptime monitoring** - UptimeRobot, Pingdom

---

## 🐛 Troubleshooting Deployment

### Common Issues:

**Build Fails:**

```bash
# Test build locally first
bun run build

# Check error messages
# Usually missing dependencies or import errors
```

**404 on Routes:**

- Add redirects configuration (see above)
- Ensure SPA routing is configured

**Images Not Loading:**

- Check image paths are correct
- Make sure images are in `public/` folder
- Verify image filenames match exactly

**Slow Load Times:**

- Check image sizes (compress large images)
- Verify production build is used
- Enable CDN caching

---

## 🔄 Continuous Deployment

### Automatic Deployments:

Once connected to Vercel/Netlify:

1. **Push to main branch** → Auto deploys to production
2. **Push to other branches** → Creates preview deployments
3. **Pull requests** → Generate preview URLs

```bash
# Make changes
git add .
git commit -m "Update services section"
git push

# Vercel/Netlify will automatically deploy!
```

---

## 🎉 You're Ready to Deploy!

**Recommended Flow:**

1. ✅ Install Git
2. ✅ Push to GitHub
3. ✅ Deploy to Vercel
4. ✅ Test live site
5. ✅ Add custom domain
6. ✅ Launch! 🚀

---

**Questions or issues? Check Vercel/Netlify docs or ask for help!**
