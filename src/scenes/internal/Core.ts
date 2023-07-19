// imports
import Phaser from "phaser";

// types
import { sceneData } from "../../types/global";

// internal
import { Head } from "./Head";

// Doesn't run on it's own. All main scenes extend from this scene. Put common functionality here.

export class Core extends Phaser.Scene {
	sceneHead!: Head;

	constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
		super(config);
	}

	init(data: sceneData) {
		// save head scene
		this.sceneHead = data.sceneHead;

		// save as current main scene
		data.sceneHead.sceneMain = this;
	}

	preload() {
		// turn off default debug lines when game first launches
		this.physics.world.drawDebug = false;

		// reset average fps
		this.game.loop.resetDelta();
	}

	changeScene(
		scene: string,
		data?: sceneData
	) {
		// stop scene
		this.scene.stop();

		// start next scene
		this.scene.start(scene, data);
	}
}
