import { Game } from "./src/tetris.js";
import { fileSystem } from "./src/fileSystem.js";
import { Main } from "./src/main.js";

(() => {
    const fs = new fileSystem;
    const game = new Game;
    const main = new Main(fs, game)
    main.run()
  })();
