import { fileSystem } from "../src/fileSystem.js";

describe("fileSystem class", () => {
    let fs;
  
    beforeEach(() => {
      fs = new fileSystem();
    });
  
    describe("readArgs method", () => {
      it("should return command line arguments excluding node and script path", () => {
        const mockArgs = ["arg1", "arg2", "arg3"];
        process.argv = ["node", "script.js", ...mockArgs];
        expect(fs.readArgs()).toEqual(mockArgs);
      });
    });
    
    describe("parse method", () => {
        it("should parse file content into a 2D array", () => {
          const filePath = ["./tests/example.txt"]; // Assuming "example.txt" exists with appropriate content
          const expectedData = [
            ["#", "#", "#"],
            [".", ".", "."],
            ["p", ".", "p"],
          ];
          expect(fs.parse(filePath)).toEqual(expectedData);
        });
      });

    describe("writeOutput method", () => {
      it("should log the formatted data to the console", () => {
        const mockData = [
          ["#", "#", "#"],
          [".", ".", "."],
          ["p", ".", "p"],
        ];
        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
        fs.writeOutput(mockData);
        expect(consoleSpy).toHaveBeenCalledWith("###\n...\np.p\n");
      });
  
      it("should return the formatted data as a string", () => {
        const mockData = [
          ["#", "#", "#"],
          [".", ".", "."],
          ["p", ".", "p"],
        ];
        const formattedOutput = "###\n...\np.p\n";
        expect(fs.writeOutput(mockData)).toEqual(formattedOutput);
      });
    });
  });