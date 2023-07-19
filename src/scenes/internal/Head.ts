// imports
import Phaser from "phaser";

// internal
import { Core } from "./Core";

// Global background scene that acts as a manager for current scenes and stores useful information that should persist between them.

export class Head extends Phaser.Scene {
	// scenes
	sceneMain!: Core;

	constructor() {
		super({ key: "Head" });
	}

	create() {
		// disable right-click context menu when game first launches
		(
			this.input.mouse as Phaser.Input.Mouse.MouseManager
		).disableContextMenu();

		// start menu scene
		this.scene.launch("Game", { sceneHead: this });
	}

	update() {}

	// restarts the game by refreshing the page
	restart() {
		location.reload();
	}
}
