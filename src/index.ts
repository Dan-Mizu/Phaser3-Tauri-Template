// imports
import Phaser from "phaser";

// config
import config from "./config";

// scenes
import { Game } from "./scenes/Game";
import { Boot } from "./scenes/internal/Boot";
import { Load } from "./scenes/internal/Load";
import { Debug } from "./scenes/overlay/Debug";
import { Head } from "./scenes/internal/Head";

// Make sure to include all scenes here, keeping Boot at the top of the list.

new Phaser.Game(
	Object.assign(config, {
		scene: [
			Boot,
			Load,
			Head,
			Game,
			Debug,
		],
	})
);

// banner in console with project information
console.log(
	"%c" + config.title + " [" + config.version + "] ",
	"background-color:white; color:green; font-size:16px; font-weight: bold;"
);
