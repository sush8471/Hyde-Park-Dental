# 🚀 Upload to GitHub - Command Line Guide

## Prerequisites: Install Git

### Option 1: Using Winget (Fastest)

```powershell
winget install --id Git.Git -e --source winget
```

**Note:** You may need to run PowerShell as Administrator. If prompted, allow the installation.

### Option 2: Manual Download

1. Go to: https://git-scm.com/download/win
2. Download "64-bit Git for Windows Setup"
3. Run the installer
4. Use all default settings
5. **Important:** Restart your terminal/PowerShell after installation

---

## Verify Git Installation

After installation, **open a NEW PowerShell window** and run:

```powershell
git --version
```

You should see something like: `git version 2.43.0.windows.1`

---

## Configure Git (First Time Setup)

```powershell
# Set your name (use your real name or GitHub username)
git config --global user.name "Your Name"

# Set your email (MUST match your GitHub account email)
git config --global user.email "your.email@example.com"

# Verify configuration
git config --list
```

---

## Upload Codebase to GitHub - Complete Steps

### Step 1: Navigate to Your Project

```powershell
cd "c:\Users\Lenovo\Documents\Projects\Website redesign\Hydepark Dental"
```

### Step 2: Check Git Status

```powershell
# Check current status
git status
```

This will show you what files have changed and if you're in a merge.

### Step 3: Resolve Any Merge State (if needed)

If you see "You have unmerged paths" or similar:

```powershell
# Complete the merge with current changes
git add .
git commit -m "Resolved merge conflicts"
```

### Step 4: Stage All Changes

```powershell
# Add all files to staging
git add .

# Check what will be committed
git status
```

### Step 5: Commit Your Changes

```powershell
# Commit with a message
git commit -m "Fixed merge conflicts and added deployment guides"
```

If you see "nothing to commit" - that's fine, proceed to next step.

### Step 6: Check Remote Repository

```powershell
# Check if remote exists
git remote -v
```

**If you see a GitHub URL** - great! Skip to Step 8.
**If you see nothing** - continue to Step 7.

### Step 7: Add GitHub Remote (if needed)

First, create a repository on GitHub:

1. Go to https://github.com/new
2. Repository name: `Hyde-Park-Dental`
3. **Do NOT** initialize with README
4. Click "Create repository"

Then add the remote:

```powershell
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/Hyde-Park-Dental.git

# Verify it was added
git remote -v
```

### Step 8: Push to GitHub

```powershell
# Make sure you're on main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**If asked for credentials:**

- **Username:** Your GitHub username
- **Password:** Use a Personal Access Token (NOT your GitHub password)

---

## 🔐 Creating a Personal Access Token

GitHub no longer accepts passwords for command-line authentication. You need a token:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "Hyde Park Dental Deployment"
4. Select scopes: ☑️ **repo** (check all sub-boxes)
5. Scroll down and click "Generate token"
6. **COPY THE TOKEN** - you won't see it again!
7. Use this token as your password when pushing

### Store Credentials (Optional)

To avoid entering token every time:

```powershell
# Store credentials
git config --global credential.helper wincred
```

Next time you push, enter your username and token, and Windows will remember it.

---

## 📋 Complete Quick Reference

```powershell
# Quick upload sequence (after Git is installed and configured)

# 1. Navigate to project
cd "c:\Users\Lenovo\Documents\Projects\Website redesign\Hydepark Dental"

# 2. Check status
git status

# 3. Stage all changes
git add .

# 4. Commit
git commit -m "Initial deployment - codebase ready"

# 5. Push to GitHub (if remote already exists)
git push -u origin main

# OR create remote first (if needed)
git remote add origin https://github.com/YOUR_USERNAME/Hyde-Park-Dental.git
git branch -M main
git push -u origin main
```

---

## 🔧 Troubleshooting

### "Git is not recognized"

**Solution:**

1. Restart your terminal/PowerShell
2. If still not working, restart your computer
3. Git needs to be in your PATH environment variable

### "Author identity unknown"

**Solution:**

```powershell
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### "Permission denied" or "Authentication failed"

**Solution:**

- Make sure you're using a Personal Access Token, not your password
- Token needs "repo" scope permissions

### "Failed to push some refs"

**Solution:**

```powershell
# Pull first, then push
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### "You have unstaged changes"

**Solution:**

```powershell
git add .
git commit -m "Your message"
git push
```

---

## ✅ Verification

After pushing, verify your code is on GitHub:

1. Go to: `https://github.com/YOUR_USERNAME/Hyde-Park-Dental`
2. You should see all your files
3. Check the latest commit message

---

## 🚀 After GitHub Upload - Deploy to Vercel

Once code is on GitHub:

```powershell
# Install Vercel CLI (optional, or use website)
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

**Or use the Vercel website (easier):**

1. Go to https://vercel.com
2. Sign in with GitHub
3. Import `Hyde-Park-Dental` repository
4. Click Deploy

---

## 📝 Future Updates

After initial upload, updating is simple:

```powershell
# 1. Make your changes in code

# 2. Stage changes
git add .

# 3. Commit
git commit -m "Updated navbar styling"

# 4. Push
git push

# Vercel will auto-deploy!
```

---

## 🎯 One-Line Upload (After All Setup)

Once everything is configured, future uploads are just:

```powershell
git add . && git commit -m "Your update message" && git push
```

---

**You're all set! Follow these commands and you'll have your code on GitHub in minutes.** 🎉
