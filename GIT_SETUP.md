# Setting Up Git and GitHub for Your Portfolio

## What is Git and GitHub?

**Git:** A tool to track changes to your code (like "Save" and "Save As History")
**GitHub:** A website where you store your code online and share it

---

## Installation

### Step 1: Install Git

1. Go to https://git-scm.com/download/win
2. Download the latest version
3. Run the installer
4. Click "Next" through all screens
5. Choose "Use Git Bash Here" when asked
6. Finish installation

**Verify installation:**

```bash
git --version
```

You should see a version number like `git version 2.42.0`

---

### Step 2: Install Node.js (If Not Already Done)

1. Go to https://nodejs.org/
2. Download LTS (Long Term Support) version
3. Run installer
4. Click "Next" through all screens
5. Finish

**Verify installation:**

```bash
node --version
npm --version
```

---

## GitHub Account Setup

### Create Account

1. Go to https://github.com/signup
2. Enter email: `shreyasraut0007@gmail.com`
3. Create strong password
4. Username: `shreyasraut0707` (matches your existing GitHub!)
5. Verify email

### Configure Git Locally

Open VS Code Terminal and run:

```bash
git config --global user.name "Shreyas Raut"
git config --global user.email "shreyasraut0007@gmail.com"
```

**Verify configuration:**

```bash
git config --global user.name
git config --global user.email
```

---

## First Time Setup Commands

Run these in your portfolio folder:

```bash
# Navigate to your portfolio
cd c:\Users\Shreyas\OneDrive\Desktop\portfolio

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio website"

# Create main branch
git branch -M main

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/shreyasraut0707/portfolio.git

# Push to GitHub
git push -u origin main
```

---

## Making Changes Going Forward

### After you make changes:

```bash
# 1. Check what changed
git status

# 2. Add all changes
git add .

# 3. Commit with a message
git commit -m "Updated skills section"

# 4. Push to GitHub
git push
```

---

## Common Git Commands

```bash
# See your code history
git log

# See what changed
git diff

# Undo last commit (be careful!)
git reset --soft HEAD~1

# See all branches
git branch

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

---

## Troubleshooting

### "Authentication failed"

**Solution:** Use Personal Access Token instead of password

1. Go to https://github.com/settings/tokens
2. Click "Generate new token"
3. Select all scopes
4. Generate and copy token
5. Use token as password when pushing

### "fatal: not a git repository"

**Solution:** Run `git init` in your portfolio folder first

### "error: src refspec main does not match any"

**Solution:** Run `git commit` first before pushing

### Permission Denied (publickey)

**Solution:** Set up SSH key:

```bash
ssh-keygen -t ed25519 -C "shreyasraut0007@gmail.com"
# Just press Enter when asked for passphrase
# Then add the public key to GitHub Settings
```

---

## Tips

✅ **Good commit messages:**

- "Added skills section"
- "Fixed navigation menu"
- "Updated project descriptions"

❌ **Bad commit messages:**

- "Update"
- "Fixed stuff"
- "asdf"

✅ **Commit often** (every feature/fix)
✅ **Write clear messages**
✅ **Push to GitHub regularly**

---

## What's Next?

After pushing to GitHub:

1. Deploy on Vercel (automatic from GitHub)
2. Share your portfolio URL
3. Keep updating your portfolio
4. Every push to GitHub = automatic update on Vercel

---

## Quick Reference

| Command               | What it does           |
| --------------------- | ---------------------- |
| `git init`            | Create new repository  |
| `git add .`           | Stage all changes      |
| `git commit -m "msg"` | Save changes locally   |
| `git push`            | Upload to GitHub       |
| `git pull`            | Download from GitHub   |
| `git status`          | See what changed       |
| `git log`             | See history            |
| `git clone <url>`     | Download existing repo |

---

## You're All Set! 🎉

Now you can:

- ✅ Track changes to your code
- ✅ Have backup on GitHub
- ✅ Share your code
- ✅ Deploy to Vercel automatically

**Happy coding!** 🚀
