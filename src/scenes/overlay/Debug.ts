// scenes
import { Game } from "../Game";

export class Debug extends Phaser.Scene {
	sceneGame!: Game;
	debugText!: Phaser.GameObjects.Text;

	constructor() {
		super({ key: "Debug" });
	}

	init(sceneGame: Game) {
		// save values
		this.sceneGame = sceneGame;
	}

	preload() {}

	create() {
		// init debug info text
		this.debugText = this.add
			.text(0, 0, "", {
				fontSize: "32px",
				fontFamily: "Roboto"
			})
			.setScrollFactor(0);

		// enable debug lines
		this.sceneGame.physics.world.drawDebug = true;
	}

	update() {
		// get actual mouse position
		let pointer = this.sceneGame.input.activePointer;

		// update debug
		this.debugText.setText([
			"FPS: " + this.game.loop.actualFps.toFixed(2),
			"Mouse Pos: (" + pointer.worldX.toFixed(2) + ", " + pointer.worldY.toFixed(2) + ")",
		]);
	}
}
