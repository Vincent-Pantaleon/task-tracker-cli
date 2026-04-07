import fs from "fs";

export const DeleteTask = (id) => {
    try {
        const data = JSON.parse(fs.readFileSync("tasks.json", "utf-8"));

        const filteredData = data.filter(task => task.id !== Number(id));

        if (filteredData.length === data.length) {
            console.error(`Error: Task with ID ${id} not found.`);
            return;
        }

        fs.writeFileSync("tasks.json", JSON.stringify(filteredData, null, 2));
        console.log(`Task ${id} deleted successfully.`);

    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
};