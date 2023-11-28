import { Main } from "../src/main.js";


class FileSystemMock {
    constructor(args){
        this.args = args
    }
    readArgs(){
        return this.args
    }
    parse(args) {
      return args
    }

    writeOutput(data){
        return data
    }
}

class GameMock {
    constructor(){
        this.data = []
    }
    init(data){
        this.data = data
    }

    getField(){
        return this.data
    }

    run(){
        this.data = this.data.reverse()
    }
}

describe("use mock", () => {
    let fs, game, main;
    beforeEach(() => {
        fs = new FileSystemMock(['7', '', '8'])
        game = new GameMock()
        main = new Main(fs, game)
    });
    
    test("Simple run", () => {
        expect(main.run()).toEqual(['8', '', '7'])
      })
})