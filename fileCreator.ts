import fs from "fs";

const data: string ="Writes the reverse sentence.";
fs.writeFileSync("reverse.txt", data);
console.log("file written successfully!");

