import { Main } from "../src/main.js";
import { fileSystem } from "../src/fileSystem.js";
import { Game } from "../src/tetris.js"

jest.mock("../src/fileSystem.js", () => {
    return {
        fileSystem: jest.fn().mockImplementation(function(args) {
            this.args = args;
            return {
                readArgs: jest.fn(() => this.args),
                parse: jest.fn((args) => args),
                writeOutput: jest.fn((args) => args),
            };
        }),
    };
});

jest.mock("../src/tetris.js", () => {
    return {
        Game: jest.fn().mockImplementation(function() {
            this.data = [];
            return {
                init: jest.fn( data => this.data = data),
                getField: jest.fn(() => this.data),
                run: jest.fn(() => this.data.reverse()),
            };
        }),
    };
});


describe("use mock", () => {
    let fs, game, main;
    beforeEach(() => {
        fs = new fileSystem(['7', '', '8'])
        game = new Game()
        main = new Main(fs, game)
    });
    
    test("Simple run", () => {
        expect(main.run()).toEqual(['8', '', '7'])
      })
})