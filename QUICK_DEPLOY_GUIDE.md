# 🚀 How to Share Your Portfolio Online - Step by Step Guide

## What You Need

- Your code (already created ✅)
- A GitHub account (FREE)
- Vercel account (FREE)

---

## Step 1: Create a GitHub Account (If You Don't Have One)

1. Go to https://github.com/signup
2. Enter your email: `shreyasraut0007@gmail.com`
3. Create a password
4. Enter username: `shreyasraut0707` (you already use this!)
5. Click "Create Account"
6. Verify your email

**That's it!** GitHub account created ✅

---

## Step 2: Create Your First GitHub Repository

1. Go to https://github.com/new
2. Fill in:
   - **Repository name:** `portfolio`
   - **Description:** "My professional portfolio website"
   - **Public** (so anyone can see it)
   - ✅ **Add a README file** (optional)
3. Click "Create repository"

**Your repository is created!** Copy the URL shown.

---

## Step 3: Push Your Code to GitHub

### From VS Code Terminal:

```bash
cd c:\Users\Shreyas\OneDrive\Desktop\portfolio

git config --global user.email "shreyasraut0007@gmail.com"
git config --global user.name "Shreyas Raut"

git add .
git commit -m "Initial portfolio website commit"
git branch -M main
git remote add origin https://github.com/shreyasraut0707/portfolio.git
git push -u origin main
```

**Your code is now on GitHub!** 🎉

---

## Step 4: Deploy on Vercel (The Easy Part!)

### Option A: Automatic Deployment (Recommended)

1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access GitHub
4. Click "New Project"
5. Select your `portfolio` repository
6. Vercel auto-detects build settings (it's already correct!)
7. Click "Deploy"

**Wait 1-2 minutes...**

**BOOM! 🎊 Your portfolio is LIVE!**

You'll get a URL like: `https://portfolio-shreyas-raut.vercel.app`

---

## Step 5: Share Your Portfolio!

Your portfolio is now online! Share it everywhere:

### 📋 Where to Share:

- **LinkedIn Profile:** Add to "Headline" and "About"
- **Email:** "Check out my portfolio: [your-url]"
- **GitHub Profile:** Add link to README
- **Twitter/X:** Tweet it!
- **WhatsApp/Facebook:** Send to friends
- **Resume/CV:** Add the URL

### 📝 Example Messages:

```
"Check out my AI & Data Science portfolio: https://portfolio-shreyas-raut.vercel.app"

"I've built a professional portfolio showcasing my projects and skills.
Visit: https://portfolio-shreyas-raut.vercel.app"
```

---

## Step 6: Get a Custom Domain (Optional but Cool!)

### What is a Custom Domain?

Instead of `portfolio-shreyas-raut.vercel.app`, have `shreyas-portfolio.com`

### How to Get One:

1. **Buy a domain** from:

   - GoDaddy.com (~$10-15/year)
   - Namecheap.com (~$8-10/year)
   - Google Domains (~$12/year)

2. **Connect to Vercel:**
   - Go to Vercel Dashboard
   - Select your portfolio project
   - Go to "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS setup instructions

**Now your URL is:** `https://shreyas-portfolio.com` 🌟

---

## Quick Command Reference

```bash
# First time setup
git config --global user.email "your-email@gmail.com"
git config --global user.name "Your Name"

# Every time you make changes
git add .
git commit -m "Your message"
git push

# Build locally to test
npm run build

# Run locally
npm run dev

# View production version
npm run preview
```

---

## Troubleshooting

### "Git is not recognized"

- Install Git from https://git-scm.com/download/win

### "npm is not recognized"

- Install Node.js from https://nodejs.org/

### "GitHub authentication failed"

- Create a personal access token: https://github.com/settings/tokens
- Use token instead of password

### "Vercel build failed"

- Check that `npm run build` works locally first
- Make sure all files are committed to GitHub

---

## ✅ Final Checklist

- [ ] GitHub account created
- [ ] Code pushed to GitHub repository
- [ ] Vercel account connected with GitHub
- [ ] Portfolio deployed on Vercel
- [ ] Got your live URL
- [ ] Shared URL with friends/family
- [ ] Added URL to LinkedIn profile
- [ ] Added URL to GitHub profile
- [ ] (Optional) Purchased custom domain

---

## Your Portfolio URLs

### Free URLs (Instant):

- https://portfolio-shreyas-raut.vercel.app (Vercel)
- https://shreyas-raut-portfolio.netlify.app (Netlify - if you use it)

### Custom Domain (Optional):

- https://shreyas-portfolio.com
- https://shreyas-raut.dev
- https://shreyas.dev

---

## 📱 Test Your Portfolio

After deployment, test on:

- **Desktop:** Open in Chrome/Firefox
- **Mobile:** Open on your phone
- **Tablet:** Test responsiveness
- **Check all links:** GitHub, LinkedIn, Email

---

## 🆘 Need Help?

1. **Vercel Docs:** https://vercel.com/docs
2. **GitHub Help:** https://docs.github.com
3. **Stack Overflow:** Search your error

---

## 🎉 Congratulations!

Your portfolio is now online and ready to impress!

**Share it with confidence:**

- Recruiters
- Companies
- Colleagues
- Friends & Family

---

**Questions? Stuck on a step? Reach out for help! Good luck! 🚀**
