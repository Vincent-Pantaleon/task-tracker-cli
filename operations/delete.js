import fs from "fs";

export const DeleteTask = (id) => {
    const data = JSON.parse(fs.readFileSync("tasks.json", "utf-8"));

    const filteredData = data.filter(task => task.id !== Number(id));

    if (filteredData.length === data.length) {
        console.log(`Task with id ${id} not found.`);
        return;
    }

    fs.writeFileSync("tasks.json", JSON.stringify(filteredData, null, 2), "utf-8");
    console.log(`Task ${id} deleted successfully.`);
};