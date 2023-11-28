export class Game {
    constructor(){
        this.gameEnd = false
        this.field = []
    }
    
    init(field){
        const keys = {
            "p":1,
            ".":1,
            "#":1
        }
        if(!field[1]) throw new Error("invalid input")
        if(field[0][0] != (field.length - 1) || field[0][2] != field[1].length){
            throw new Error("invalid input")
        }
        for(const row of field.slice(1)){
            for(const element of row){
                if(!keys[element]) throw new Error("invalid input")
            }
        }
        this.field = field
    }

    run() {
        while(!this.gameEnd){
          this.nextGeneration()
        }
    }

    getField() {
        return this.field
    }

    /*. 
    . порожній піксель
    p - піксель “підвішеної” фігури
    # - піксель “ландшафта”
    */
   
    collisionCheck(field, i, j){
        if(field[i+2]){
            field[i+2][j] == "#" ? this.gameEnd = true: false
        }
    }

    nextGeneration(){
      const nextMap = [...this.field];
      for (let i = this.field.length - 1; i > 0; i--) {
        for (let j = 0; j < this.field[1].length; j++) {
          if(this.field[i][j]  == "p"){
            if(this.field[i + 1]){
                this.collisionCheck(this.field, i,j)
                nextMap[i + 1][j] = "p"
                nextMap[i][j] = "."
            } else this.gameEnd = true
          }
        }
      }
      this.field = [...nextMap]
    }
}