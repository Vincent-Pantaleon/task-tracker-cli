import fs from 'fs';

export const MarkInProgress = (id) => {
    try {
        const now = new Date().toISOString()
        const data = JSON.parse(fs.readFileSync("tasks.json", "utf-8"))

        const specificData = data.find(item => item.id === Number(id))

        if (!specificData) {
            console.error(`Error: Task with ID ${id} not found.`)
            return;
        }

        if (specificData.status === "In Progress") {
            console.warn(`Task ${id} is already marked as in progress.`)
            return;
        }

        specificData.status = "In Progress"
        specificData.updatedAt = now

        fs.writeFileSync("tasks.json", JSON.stringify(data, null, 2));
        console.log(`Task status updated successfully: (id: ${id})`)

    } catch (err) {
        console.error(`Error: ${err.message}`)
    }
}