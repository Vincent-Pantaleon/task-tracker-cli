import fs from 'fs'

export const UpdateTask = (id, newTask) => {
    if (!newTask || newTask.trim() === "") {
        console.error("Error: Task description cannot be empty.");
        return;
    }

    try {
        const now = new Date()
        const data = JSON.parse(fs.readFileSync("tasks.json", "utf-8"))

        const specificData = data.find(task => task.id === Number(id))

        if (!specificData) {
            console.error(`Error: Task with ID ${id} not found.`);
            return;
        }

        specificData.description = newTask.trim();
        specificData.updatedAt = now.toISOString();

        fs.writeFileSync("tasks.json", JSON.stringify(data, null, 2));
        console.log(`Task updated successfully: (ID: ${id})`)

    } catch (err) {
        console.error(`Error: ${err.message}`)
    }
}