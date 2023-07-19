# **Phaser 3 Tauri Template**

Develop a web-based game using the Phaser game framework, and turn it into a fully cross-platform desktop application!

## **Languages**

-   [Typescript](https://www.typescriptlang.org/)
-   [Rust](https://www.rust-lang.org/)

## **Tools**

-   [Phaser 3](https://phaser.io/)
-   [Tauri](https://tauri.app/)
-   [Vite](https://vitejs.dev/)

### **Prerequisites**

Install [Rust](https://tauri.app/v1/guides/getting-started/prerequisites) and [Node.js/npm](https://nodejs.dev/en/learn/how-to-install-nodejs/).

### **Setup**

1. **Acquire Template**

Clone or press the "Use Template" button.

2. **Install Dependencies**

If using VSCode, run the "Install Dependencies" task using the Quick Open shortcut. The Keyboard Shortcut for Quick Open on your system can be found [here](https://code.visualstudio.com/docs/getstarted/keybindings). Or run `npm install` in the root directory within terminal.

3. **Develop!**

Now you can start creating your app! Check out the comments on the individual files within `/src/scenes/internal/` to learn more about the Phaser setup, or use your own Phaser setup. I also recommend testing if your install went well with the "Dev | Tauri" task in the Run and Debug tab if using VSCode, or by sending `npm run tauri dev` in console.

### **Next Steps**

If you are using VSCode, there are numerous tasks setup to make development easier.

- **Populate Project Information**

Look for instances of "Example Project" or "example_project" within the files and replace them with your project's information.

- **Generate App Icon**

You can automatically generate the Desktop App Icons for various platforms using a single .png file. Replace `icon.png` within `/src/assets/site/icon/` with your desired icon. Then, run the "Generate App Icon" task similarly to step 2 in Setup. It will automatically generate the icons and place them within the correct directory in `/src-tauri/`. You can also generate the Favicon for the web app by using the "Generate Favicon" task with the same `icon.png` file.

- **Development Preview**

You can use a web browser the majority of the time to develop your app with "Dev | Web" within the Run And Debug tab. But, you can also preview it as a Desktop app using "Dev | Tauri".

- **Build the App!**

Once you want to create the actual app executable, you can run the "Build" task using Quick Start. You should find the executable within the `/src-tauri/target/` directory once its all done.

### **Packages**

This template includes [RexRainbow's Phaser plugins](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/plugin-list/), which are so good that they should be used in every Phaser 3 project. 

It also includes [StoreJS](https://www.npmjs.com/package/storejs), which is an api to handle localStorage- a way browsers can store data locally that persists between sessions. In this example it's used to remember the state of the debug mode (Left Shift key to toggle): enabled or not. 

[WebFontLoader](https://developers.google.com/fonts/docs/webfont_loader) from Google is also included to easily implement fonts that work both within the browser and in Tauri's webview.

### **Credits**

Assets are pulled from [https://labs.phaser.io](https://labs.phaser.io). 

<hr>

<p align="center" style="display: flex; justify-content: center;">
  If this helped you out, consider helping&nbsp;<i>me</i>&nbsp;out. :)
</p>

<p align="center" style="display: flex; justify-content: center;">
  <a href="https://www.paypal.com/paypalme/DanMizu" target="_blank" style="padding: 1%">
    <img height="40rem" src="paypal-donate-button.webp" alt="Donations"/>
  </a>
</p>
