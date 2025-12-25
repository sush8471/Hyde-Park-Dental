# 🚀 Complete Guide: Upload to GitHub & Deploy to Vercel

This guide will walk you through uploading your Hyde Park Dental website to GitHub using GitHub Desktop, and then deploying it to Vercel.

---

## Part 1: Upload to GitHub using GitHub Desktop

### Step 1: Install GitHub Desktop

1. **Download GitHub Desktop**:

   - Go to https://desktop.github.com/
   - Click "Download for Windows"
   - Run the installer `GitHubDesktopSetup.exe`
   - Wait for installation to complete

2. **Sign in to GitHub**:
   - Open GitHub Desktop
   - Click "Sign in to GitHub.com"
   - Enter your GitHub username and password
   - Authorize GitHub Desktop

---

### Step 2: Add Your Local Repository

1. **Open GitHub Desktop**

2. **Add the Hyde Park Dental folder**:

   - Click `File` → `Add Local Repository`
   - Click `Choose...` button
   - Navigate to: `c:\Users\Lenovo\Documents\Projects\Website redesign\Hydepark Dental`
   - Click `Select Folder`

3. **You'll see one of two scenarios**:

   **Scenario A** - "This directory does not appear to be a Git repository":

   - Click `Create a repository` or `create a repository`
   - Repository name will be auto-filled
   - Click `Create Repository`

   **Scenario B** - Repository already exists:

   - Click `Add Repository`
   - Continue to Step 3

---

### Step 3: Review Your Changes

You should now see GitHub Desktop showing your project files. In the left sidebar:

- ✅ **Changed files** - All your project files will be listed
- ✅ **Summary box** (bottom left) - Where you'll write commit messages

**Important**: Before committing, make sure these files are NOT checked (if they appear):

- `node_modules/` (should be in .gitignore)
- `.env` files with secrets
- Build output (e.g., `dist/`, `build/`)

---

### Step 4: Make Your First Commit

1. **Review the files**:

   - Look through the changed files list
   - All files should have checkmarks ✓
   - Uncheck any files you don't want to upload

2. **Write a commit message**:

   - In the "Summary" box (required): `Initial commit: Hyde Park Dental website`
   - In the "Description" box (optional): `Complete website with all components, fixed merge conflicts, ready for deployment`

3. **Click `Commit to main`**

---

### Step 5: Publish to GitHub

1. **Click `Publish repository`** (top right area)

2. **Configure repository settings**:

   - **Name**: `Hyde-Park-Dental` (or `hyde-park-dental`)
   - **Description**: `Hyde Park Dental website - Adelaide's trusted dental practice since 1983`
   - **Keep your code private**: ☑️ Check this for a private repo, or uncheck for public
   - **Organization**: Leave as "None" (or select if you have one)

3. **Click `Publish repository`**

4. **Wait for upload**: GitHub Desktop will show progress as it uploads your files

---

### Step 6: Verify Upload on GitHub

1. **View on GitHub**:

   - In GitHub Desktop, click `Repository` → `View on GitHub`
   - OR go to: https://github.com/YOUR_USERNAME/Hyde-Park-Dental

2. **Verify all files are there**:
   - You should see: `src/`, `public/`, `package.json`, `README.md`, etc.
   - Check the file count matches your local project

✅ **Your code is now on GitHub!**

---

## Part 2: Deploy to Vercel

### Step 1: Create Vercel Account

1. **Go to Vercel**:

   - Visit https://vercel.com
   - Click `Sign Up`

2. **Sign up with GitHub** (Recommended):
   - Click `Continue with GitHub`
   - Authorize Vercel to access your GitHub account
   - This makes deployment much easier!

---

### Step 2: Import Your Project

1. **Click `Add New...`** → **`Project`**

2. **Import Git Repository**:

   - You'll see a list of your GitHub repositories
   - Find `Hyde-Park-Dental` and click `Import`

3. **If you don't see your repository**:
   - Click `Adjust GitHub App Permissions`
   - Select your repository
   - Click `Save`
   - Go back and click `Import` next to your repo

---

### Step 3: Configure Project Settings

Vercel will auto-detect your Vite project. Configure these settings:

1. **Project Name**: `hyde-park-dental` (this becomes your URL)

2. **Framework Preset**: Should auto-detect as `Vite`

3. **Root Directory**: `./` (leave as default)

4. **Build and Output Settings**:

   - **Build Command**: `bun run build` or `npm run build`
   - **Output Directory**: `dist` (Vite default)
   - **Install Command**: `bun install` or `npm install`

5. **Environment Variables** (if needed):
   - Click `Environment Variables`
   - Add any required env variables
   - For this project, you likely don't need any yet

---

### Step 4: Deploy!

1. **Click `Deploy`**

2. **Wait for deployment** (usually 1-3 minutes):

   - You'll see a build log
   - Vercel will:
     - Install dependencies
     - Run the build command
     - Deploy to their CDN

3. **Deployment states**:
   - 🟡 **Building** - Installing and building
   - ✅ **Success** - Deployed successfully!
   - ❌ **Failed** - Check build logs for errors

---

### Step 5: View Your Live Site!

1. **Once deployed successfully**:

   - You'll see: "🎉 Congratulations!"
   - Click `Visit` or the deployment URL

2. **Your site will be live at**:

   - `https://hyde-park-dental.vercel.app`
   - Or a similar URL

3. **Share the URL**:
   - Click the URL to copy
   - Share with your team or client!

---

## Part 3: Making Updates (Future Changes)

### When You Make Changes to Your Code:

#### Using GitHub Desktop:

1. **Make your code changes** in VS Code/your editor

2. **Open GitHub Desktop**:

   - It will automatically detect changed files

3. **Review changes**:

   - See what files changed in the left sidebar
   - View the diff (additions/deletions)

4. **Commit changes**:

   - Write a commit message (e.g., "Updated navbar styling")
   - Click `Commit to main`

5. **Push to GitHub**:

   - Click `Push origin` (top right)
   - This uploads your changes to GitHub

6. **Automatic Deployment**:
   - Vercel automatically detects the GitHub push
   - It will rebuild and redeploy your site
   - Check Vercel dashboard for deployment status

---

## 🎯 Quick Reference

### GitHub Desktop Flow:

```
Make changes → Open GitHub Desktop → Review → Commit → Push
```

### Vercel Auto-Deploy:

```
GitHub push detected → Build starts → Deploy to production
```

---

## ⚠️ Troubleshooting

### Build Fails on Vercel?

**Check these common issues**:

1. **Missing dependencies**:

   - Make sure all packages are in `package.json`
   - Run `bun install` locally to verify

2. **Build command error**:

   - Try changing to `npm run build` instead of `bun run build`
   - Or vice versa

3. **Import errors**:

   - Check that all file imports use correct paths
   - Case-sensitive on Vercel (Linux) but not on Windows

4. **Environment variables**:
   - Add any missing env vars in Vercel dashboard

### To Fix Build Errors:

1. Check the build log in Vercel (click on the failed deployment)
2. Find the error message
3. Fix the issue locally
4. Commit and push changes via GitHub Desktop
5. Vercel will auto-deploy again

---

## 🔧 Vercel Configuration (Advanced)

Create `vercel.json` in your project root for custom settings:

```json
{
  "buildCommand": "bun run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## 📱 Custom Domain (Optional)

### To add your own domain (e.g., hydeparkdental.com.au):

1. **In Vercel Dashboard**:

   - Go to your project
   - Click `Settings` → `Domains`
   - Click `Add`
   - Enter your domain name

2. **Configure DNS**:

   - Vercel will show DNS records to add
   - Go to your domain registrar
   - Add the A record or CNAME as instructed

3. **Wait for DNS propagation** (can take up to 48 hours)

---

## ✅ Checklist

### Before Deployment:

- [ ] All merge conflicts resolved
- [ ] `node_modules/` in `.gitignore`
- [ ] No sensitive data (API keys, passwords) in code
- [ ] Build works locally (`bun run build`)
- [ ] All images and assets are included

### GitHub Upload:

- [ ] GitHub Desktop installed
- [ ] Signed in to GitHub
- [ ] Repository published
- [ ] All files uploaded successfully

### Vercel Deployment:

- [ ] Vercel account created
- [ ] Project imported from GitHub
- [ ] Build settings configured correctly
- [ ] Deployment successful
- [ ] Live site accessible

---

## 🎉 Next Steps

Once deployed:

1. **Test the live site thoroughly**
2. **Share the URL** with stakeholders
3. **Monitor** the Vercel dashboard for analytics
4. **Set up custom domain** if needed
5. **Enable HTTPS** (Vercel does this automatically)

---

## 📞 Need Help?

- **GitHub Desktop Docs**: https://docs.github.com/en/desktop
- **Vercel Docs**: https://vercel.com/docs
- **Vite Deployment Guide**: https://vitejs.dev/guide/static-deploy.html

---

**You're all set! 🚀**

Your Hyde Park Dental website will be live on the internet in just a few minutes!
