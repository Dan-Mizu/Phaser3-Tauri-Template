// imports
import Phaser from "phaser";
import WebFont from "webfontloader";

export class Load extends Phaser.Scene {
	animQueue: {
		texture: string;
		anims: {
			[key: string]: {
				auto?: boolean;
				frameRate?: number;
				frames: {
					start: number;
					end?: number;
				};
			};
		};
	}[] = [];

	constructor() {
		super({
			key: "Load",
			pack: {
				files: [
					{
						type: "json",
						key: "textures",
						url: "data/textures.json",
					},
					{
						type: "json",
						key: "audio",
						url: "data/audio.json",
					},
					{
						type: "json",
						key: "fonts",
						url: "data/fonts.json",
					},
					{
						type: "json",
						key: "lang.en_us",
						url: "lang/en_us.json",
					},
				],
			},
		});
	}

	preload() {
		// load textures/spritesheets
		let textures = this.cache.json.get("textures");
		for (const key in textures) {
			// image
			if (typeof textures[key] === "string")
				this.load.image(key, textures[key]);
			// spritesheet
			else {
				this.load.spritesheet(key, textures[key].spritesheet, {
					frameWidth: textures[key].frameWidth
						? textures[key].frameWidth
						: undefined,
					frameHeight: textures[key].frameHeight
						? textures[key].frameHeight
						: undefined,
					spacing: textures[key].spacing
						? textures[key].spacing
						: undefined,
				});

				// queue anims for loading
				if (textures[key])
					this.animQueue.push({
						texture: key,
						anims: textures[key].anims,
					});
			}
		}

		// load audio
		let audio = this.cache.json.get("audio");
		for (const key in audio) {
			this.load.audio(key, audio[key]);
		}

		// load fonts
		WebFont.load(this.cache.json.get("fonts"));
	}

	create() {
		// create anims
		this.animQueue.forEach((element) => {
			for (const key in element.anims) {
				// create anim
				this.anims.create({
					key: element.texture + "_" + key,
					frames: this.anims.generateFrameNumbers(element.texture, {
						start: element.anims[key].frames.start,
						end: element.anims[key].frames.end
							? element.anims[key].frames.end
							: element.anims[key].frames.start,
					}),
					frameRate: element.anims[key].frameRate
						? element.anims[key].frameRate
						: 0,
					repeat: element.anims[key].auto ? -1 : 0,
				});
			}
		});

		// start game
		this.scene.start("Head");
	}
}
