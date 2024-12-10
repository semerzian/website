
This will open the app in your default web browser at `http://localhost:3000`.

## Deploying to GitHub Pages

1. **Set the Homepage in package.json**:
   Make sure the `homepage` field in your `package.json` is set to:
   ```json
   "homepage": "https://[your-github-username].github.io/[repository-name]"
   ```

2. **Install gh-pages**:
   If you haven't already, install the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add Deployment Scripts**:
   Add the following scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Deploy the App**:
   Run the following command to deploy your app to GitHub Pages:
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**:
   - Go to your GitHub repository settings.
   - Under the "Pages" section, set the source to the `gh-pages` branch.
   - Save the changes.

Your app should now be live at the URL specified in the `homepage` field of your `package.json`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.