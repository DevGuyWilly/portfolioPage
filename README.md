# Wilson Dagah - Portfolio

A personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Deployment Guide (GitHub Pages)

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and create a new repository (e.g., `portfolio`).
2. Do not initialize with a README, .gitignore, or license (we already have them).

### Step 2: Push your code
Run the following commands in your terminal (inside this project folder):

```bash
# 1. Add your remote repository (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 2. Rename branch to main (if not already)
git branch -M main

# 3. Push to GitHub
git push -u origin main
```

### Step 3: Configure GitHub Pages
1. Go to your repository **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. That's it! The deployment workflow will automatically run.

### Step 4: Verify Deployment
1. Click on the **Actions** tab in your repository to see the build progress.
2. Once completed, your site will be live at `https://USERNAME.github.io/REPO_NAME`.

---

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## 📝 Features
- **Next.js App Router**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Dark Mode** support
- **Responsive Design** (Mobile & Desktop)

