import { Game } from "../src/tetris.js";

describe("game logic correct work", () => {
    let game = new Game;
    const testField = [  ['7', '', '8'],
        ['.', '.', 'p', '.', '.', '.', '.', '.'],
        ['.', 'p', 'p', 'p', '.', '.', '.', '.'],
        ['.', '.', 'p', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '#', '.', '.', '.', '.', '#', '.'],
        ['#', '#', '.', '#', '#', '#', '#', '#']
    ]
  
    test("Game correct work", () => {
      game.init([false , testField])
      game.run()
      expect(game.field).toEqual([['7','', '8'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', 'p', '.', '.', '.', '.', '.'],
      ['.', 'p', 'p', 'p', '.', '.', '.', '.'],
      ['.', '#', 'p', '.', '.', '.', '#', '.'],
      ['#', '#', '.', '#', '#', '#', '#', '#']])
    })

    it("incorrect input reaction", () => {
        expect(() => {
            game.init([false, []]);
        }).toThrow("invalid input");
        expect(() => {
            game.init([  ['7', '', '9'],
            ['.', '.', 'p', '.', '.', '.', '.', '.'],
            ['.', 'p', 'p', 'p', '.', '.', '.', '.'],
            ['.', '.', 'p', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '#', '.', '.', '.', '.', '#', '.'],
            ['#', '#', '.', '#', '#', '#', '#', '#']
        ]);
        }).toThrow("invalid input");
        expect(() => {
            game.init([  ['7', '', '8'],
            ['.', '.', 'p', '.', '.', '.', '.', '.'],
            ['.', 'p', 'G', 'p', '.', '.', '.', '.'],
            ['.', '.', 'p', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '#', '.', '.', '.', '.', '#', '.'],
            ['#', '#', '.', '#', '#', '#', '#', '#']
        ]);
        }).toThrow("invalid input");
      });
    test("Game shows all steps", () => {
        game.init([true, testField]);
        game.run();
        expect(game.getField()).toEqual([
            ['7', '', '8'],
            ['.', '.', 'p', '.', '.', '.', '.', '.'],
            ['.', 'p', 'p', 'p', '.', '.', '.', '.'],
            ['.', '.', 'p', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '#', '.', '.', '.', '.', '#', '.'],
            ['#', '#', '.', '#', '#', '#', '#', '#'],
            ['\nGeneration: ', 1, '\n'],
            ['7', '', '8'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', 'p', '.', '.', '.', '.', '.'],
            ['.', 'p', 'p', 'p', '.', '.', '.', '.'],
            ['.', '.', 'p', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '#', '.', '.', '.', '.', '#', '.'],
            ['#', '#', '.', '#', '#', '#', '#', '#'],
            ['\nGeneration: ', 2, '\n'],
            ['7', '', '8'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', 'p', '.', '.', '.', '.', '.'],
            ['.', 'p', 'p', 'p', '.', '.', '.', '.'],
            ['.', '.', 'p', '.', '.', '.', '.', '.'],
            ['.', '#', '.', '.', '.', '.', '#', '.'],
            ['#', '#', '.', '#', '#', '#', '#', '#'],
            ['\nGeneration: ', 3, '\n'],
            ['7', '', '8'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', 'p', '.', '.', '.', '.', '.'],
            ['.', 'p', 'p', 'p', '.', '.', '.', '.'],
            ['.', '#', 'p', '.', '.', '.', '#', '.'],
            ['#', '#', '.', '#', '#', '#', '#', '#'],
            ['7', '', '8'],
            ['.', '.', 'p', '.', '.', '.', '.', '.'],
            ['.', 'p', 'p', 'p', '.', '.', '.', '.'],
            ['.', '.', 'p', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '#', '.', '.', '.', '.', '#', '.'],
            ['#', '#', '.', '#', '#', '#', '#', '#']
          ]);
      });
})