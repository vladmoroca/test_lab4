export class Main{
    constructor(fs, Game){
        this.fs = fs;
        this.game = Game
    }

    run(){
      const data = this.fs.parse(this.fs.readArgs())
      this.game.init(data)
      this.game.run()
      return this.fs.writeOutput(this.game.getField())
    }
}