# 🚀 Guide: Upload Hyde Park Dental to GitHub

## Step 1: Install Git

### Option A: Using Winget (Recommended)

```powershell
winget install --id Git.Git -e --source winget
```

### Option B: Download Installer

1. Go to https://git-scm.com/download/win
2. Download the installer
3. Run the installer with default settings
4. **Restart your terminal** after installation

---

## Step 2: Configure Git (First-time setup)

```powershell
# Set your name
git config --global user.name "Your Name"

# Set your email (use the same email as your GitHub account)
git config --global user.email "your.email@example.com"
```

---

## Step 3: Initialize Git Repository

```powershell
# Navigate to your project directory
cd "c:\Users\Lenovo\Documents\Projects\Website redesign\Hydepark Dental"

# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Hyde Park Dental website"
```

---

## Step 4: Create GitHub Repository

### Via GitHub Website:

1. Go to https://github.com
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `hyde-park-dental`
4. Description: `Hyde Park Dental website - Adelaide's trusted dental practice since 1983`
5. Choose **Private** or **Public**
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **Create repository**

---

## Step 5: Push to GitHub

```powershell
# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/hyde-park-dental.git

# Push code to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## Step 6: Verify Upload

1. Go to your GitHub repository
2. Refresh the page
3. You should see all your files!

---

## 🔐 If you're asked for credentials:

### Option 1: Personal Access Token (Recommended)

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Copy the token
4. Use it as your password when pushing

### Option 2: GitHub Desktop (Easier for beginners)

1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in to GitHub
3. Add local repository
4. Publish to GitHub

---

## 📝 Important Files Already Configured

✅ `.gitignore` - Excludes node_modules, build files
✅ `package.json` - All dependencies listed
✅ `README.md` - Project documentation

---

## ⚠️ Before Pushing - Check .env Files

If you have any `.env` files with secrets:

1. Make sure `.env` is in `.gitignore`
2. **Never commit API keys or passwords**
3. Create a `.env.example` with placeholder values

---

## 🎯 Quick Commands Reference

```powershell
# Check status
git status

# See what changed
git diff

# Add specific file
git add path/to/file

# Add all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

---

## Next Steps After GitHub Upload

1. ✅ Code is on GitHub
2. 🚀 Deploy to Vercel/Netlify
3. 🌐 Connect custom domain
4. 📝 Update README with live URL

---

## Need Help?

If you get stuck:

1. Check the error message carefully
2. Make sure Git is installed: `git --version`
3. Verify you're in the right directory
4. Check GitHub credentials are correct

---

**Ready to deploy after this!** 🎉
