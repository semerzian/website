# Shannon R. Emerzian's Academic Website

This is a React-based academic website for Shannon R. Emerzian, showcasing education, experience, publications, and conference proceedings.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. This will also install npm (Node Package Manager) automatically, which includes `npx`.

### Installing Node.js and npm on macOS

**Using Homebrew (recommended)**:
   - If you don't have Homebrew installed, open your terminal and run:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
   - Once Homebrew is installed, you can install Node.js by running:
     ```bash
     brew install node
     ```

### Installing Dependencies

Navigate to the my-app directory and install the required dependencies:

```bash
npm install
```

### Running the Development Server

To start the development server, run:

```bash
npm start
```

This will open the app in your default web browser at `http://localhost:3000`.

## Deploying to GitHub Pages

Run the following command to deploy your app to GitHub Pages:
```bash
npm run deploy
```

### Updating info

To update the information in the website, edit the files in the `my-app/src/data` directory.

All of the content in the website is built off of this data.