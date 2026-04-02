# Upload this app to GitHub

## Put these files in the repository root
- index.html
- styles.css
- app.js
- questions.js
- README.md
- UPLOAD-TO-GITHUB.md

Do not put these inside another folder if you want the simplest GitHub Pages setup.

## Recommended repository name
cissp-trap-answer-trainer

## Fastest GitHub web upload
1. Create a new repository.
2. Leave it empty.
3. Click **Add file** > **Upload files**.
4. Drag all files from this folder into the browser window.
5. Commit directly to the `main` branch.

## Turn on GitHub Pages
1. Open the repository.
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose branch: `main`.
5. Choose folder: `/ (root)`.
6. Save.

## Result
GitHub will publish the site at a URL similar to:
https://YOUR-USERNAME.github.io/cissp-trap-answer-trainer/

## Important
If you upload a folder that contains these files inside another folder, GitHub Pages will not find `index.html` at the expected root level.
