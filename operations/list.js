import fs from 'fs';

export const list = () => {
    const data = JSON.parse(fs.readFileSync("tasks.json", "utf-8"))

    console.log("All Tasks: \n")
    console.log(data)
}