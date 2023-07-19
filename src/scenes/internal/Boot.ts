// imports
import Phaser from "phaser";

// First scene. Put high priority stuff here. The rest can go in the Load scene.

export class Boot extends Phaser.Scene {
	constructor() {
		super({ key: "Boot" });
	}

	preload() {
		// file loading error
		this.load.on(
			"loaderror",
			() => {
				alert(
					`Error: Failed to load. Please refresh and/or report errors in console.`
				);
				this.game.destroy(true);
			},
			this
		);
	}

	create() {
		this.scene.start("Load");
	}
}
