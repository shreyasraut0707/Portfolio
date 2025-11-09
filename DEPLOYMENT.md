# Portfolio Deployment Guide

## 🚀 Quick Deployment Options

Your portfolio can be deployed for FREE on one of these platforms:

### **Option 1: Vercel (RECOMMENDED - Easiest)**

Vercel is the company behind Next.js and is perfect for Vite projects.

#### Steps:

1. **Push to GitHub:**

   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   ```

   - Go to https://github.com/new
   - Create a new repository called `portfolio`
   - Push your code (copy commands from GitHub)

2. **Deploy on Vercel:**

   - Go to https://vercel.com
   - Click "Sign Up" → Choose "Continue with GitHub"
   - Authorize Vercel
   - Click "New Project"
   - Select your `portfolio` repository
   - Click "Deploy"
   - **Done!** Your site will be live at `https://portfolio-yourname.vercel.app`

3. **Add Custom Domain (Optional):**
   - Buy a domain from GoDaddy, Namecheap, or Google Domains
   - Go to Vercel Dashboard → Your Project → Settings → Domains
   - Add your custom domain
   - Update DNS settings (follow Vercel's instructions)

---

### **Option 2: Netlify (Also Great)**

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your GitHub repository
5. Netlify will auto-detect build settings
6. Click "Deploy"
7. Your site will be at `https://yourname.netlify.app`

---

### **Option 3: GitHub Pages (Free, but limited)**

1. Rename your repo to `yourusername.github.io`
2. Build the project: `npm run build`
3. Push to GitHub
4. Your site will be at `https://yourusername.github.io`

---

## 📋 Before Deploying - Checklist

- [ ] `npm run build` works without errors
- [ ] No broken links in your portfolio
- [ ] Profile image is correctly placed
- [ ] All content is accurate
- [ ] Responsive design looks good on mobile

---

## 🔧 Build Your Project First

```bash
npm run build
```

This creates an optimized `dist` folder for production.

---

## 💡 What's Your Domain Name?

**Popular options:**

- `yourusername.vercel.app` (Free)
- `yourusername.netlify.app` (Free)
- `shreyas-portfolio.com` (Paid, ~$10-15/year)
- `shreyasraut.dev` (Paid, ~$10/year)
- `shreyas-raut.in` (Paid, ~$5/year)

---

## 📱 Share Your Portfolio

Once deployed, share the link:

- LinkedIn: Add to your profile header
- Email: shreyas.portfolio.com
- Twitter/X: Tweet your portfolio
- Resume: Add portfolio link
- GitHub: README.md file

---

## 🆘 If You Need Help

Check the deployment platform's documentation:

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Pages: https://pages.github.com

---

## 🎯 Quick Summary

**Easiest Path:**

1. Install Git on your computer
2. Push code to GitHub
3. Connect GitHub to Vercel
4. Done! Share your Vercel URL

**Your Portfolio URL Examples:**

- `https://shreyas-portfolio.vercel.app` (Free)
- `https://shreyas-portfolio.com` (Custom domain - optional)
