import fs from "fs";

export class fileSystem{
    readArgs(){
        return process.argv.slice(2);
    }

    parse(args){
        const filePath = args[0]
        const show = (args[1] == "show-all")
        let data = fs.readFileSync(filePath, "utf8");
        data = data.split("\n").map((line) => line.replace(/\r/g, ''));
        data = data.map((line) => line.split(""))
        return [show, data];
    }

    writeOutput(data){
        data = data.map((row) => row.join("")).join("\n") + "\n";
        console.log(data)
        return data
    }
}