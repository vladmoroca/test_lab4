export class Game {
    constructor(){
        this.gameEnd = false
        this.field = []
        this.generation = 0
        this.show_all = false
        this.step_history = []
    }
    
    init(args){
        const field = args[0]
        this.show_all = args[1]
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
        this.step_history.push(...(this.field.map(row => [...row])))
    }

    getField() {
        if(this.show_all){
            return this.step_history
        } else return this.field
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
      this.generation++
      const nextMap = this.field.map(row => [...row]);;
      this.step_history.push(...(nextMap.map(row => [...row])));
      this.step_history.push(["\nGeneration: ", this.generation, "\n"]);
      for (let i = nextMap.length - 1; i > 0; i--) {
        for (let j = 0; j < nextMap[1].length; j++) {
          if(this.field[i][j]  == "p"){
            if(this.field[i + 1]){
                this.collisionCheck(this.field, i,j)
                nextMap[i + 1][j] = "p"
                nextMap[i][j] = "."
            } else this.gameEnd = true
          }
        }
      }
      this.field = nextMap.concat([])
    }
}