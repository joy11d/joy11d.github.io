# 🎓 Academic Portfolio & Research Website
### **MD Sanaul Haque Joy** | Mechanical Engineering, CUET
*Ph.D. Candidate & Researcher in Physics-Informed Machine Learning & Clean Energy Systems*

---

## 🌟 Overview

A modern, responsive, high-performance academic portfolio webpage built for **MD Sanaul Haque Joy**. Showcases research in Physics-Informed Neural Networks (PI-GRU), Battery Remaining Useful Life (RUL) prediction, mechanical modeling (CSWA), numerical algorithms (MATLAB), and academic milestones from Ideal School, Notre Dame College, and CUET.

---

## 🚀 Instant Local Preview

To view your portfolio on your computer right now:

1. Double-click **`index.html`** inside this folder:
   ```text
   C:\Users\User\Downloads\battery-rul-prediction\academic-portfolio\index.html
   ```
2. Or run this command in PowerShell:
   ```powershell
   Start-Process "C:\Users\User\Downloads\battery-rul-prediction\academic-portfolio\index.html"
   ```

---

## 🌐 Deploy to GitHub Pages (Live URL: `joy11d.github.io`)

Because your GitHub username is **`joy11d`**, you can host this website completely free at **`https://joy11d.github.io`** in just 3 steps:

### Step 1: Create the Repository on GitHub
1. Log into your GitHub account ([github.com/joy11d](https://github.com/joy11d)).
2. Click **New Repository**.
3. Name the repository exactly:
   ```text
   joy11d.github.io
   ```
4. Set the repository visibility to **Public** and click **Create repository**.

### Step 2: Upload Your Portfolio Files
Upload all files from the `academic-portfolio/` directory to your new `joy11d.github.io` repository:
- `index.html`
- `style.css`
- `script.js`
- `assets/` folder (with `avatar.jpg`, `lobo_final_comparison.png`, etc.)

*If you use Git in your terminal:*
```bash
cd "C:\Users\User\Downloads\battery-rul-prediction\academic-portfolio"
git init
git add .
git commit -m "Launch MD Sanaul Haque Joy academic portfolio"
git branch -M main
git remote add origin https://github.com/joy11d/joy11d.github.io.git
git push -u origin main
```

### Step 3: Turn on GitHub Pages
1. Go to your repository **Settings** > **Pages** (on the left menu).
2. Under **Build and deployment > Source**, select **Deploy from a branch**.
3. Under **Branch**, select **`main`** and folder **`/ (root)`**, then click **Save**.
4. In about 30–60 seconds, your website will be live worldwide at:
   👉 **`https://joy11d.github.io`**

---

## 📄 Adding Your Resume / CV PDF
To enable the 1-click **"Download Full CV"** button:
1. Export your latest CV or resume as a PDF.
2. Rename the file to `cv.pdf`.
3. Place it in the `assets/` folder (`academic-portfolio/assets/cv.pdf`).
4. In `index.html`, set the link to `href="assets/cv.pdf"`.

---

## 📁 File Structure

```text
academic-portfolio/
│
├── index.html           # Main portfolio webpage customized for MD Sanaul Haque Joy
├── style.css            # Dark/light design system with modern academic aesthetics
├── script.js            # Interactive theme toggle, BibTeX citations, and search filters
├── README.md            # Deployment guide for joy11d.github.io
└── assets/
    ├── avatar.jpg       # Profile portrait photo
    ├── lobo_final_comparison.png      # 14-fold LOBO cross-validation plot
    ├── model_comparison.png           # Comparative baseline model metrics
    ├── feature_importance_lobo.png    # Permutation feature importance chart
    ├── pi_gru_scatter.png             # Trajectory scatter plot
    └── rul_trajectory.png             # Battery degradation curve
```
