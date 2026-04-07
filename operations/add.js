import fs from "fs";

export const AddTask = (newTask) => {
    if (!newTask || newTask.trim() === "") {
        console.error("Error: Task description cannot be empty.");
        return;
    }

    try {
        const now = new Date();
        const data = JSON.parse(fs.readFileSync("tasks.json", "utf-8"));
        const maxID = data.length === 0 ? 0 : Math.max(...data.map(task => task.id));

        const newData = {
            id: maxID + 1,
            description: newTask.trim(),
            status: "Todo",
            createdAt: now.toISOString(),
            updatedAt: ""
        };

        data.push(newData);
        fs.writeFileSync("tasks.json", JSON.stringify(data, null, 2));
        console.log(`Task added successfully (ID: ${maxID + 1})`);

    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
};