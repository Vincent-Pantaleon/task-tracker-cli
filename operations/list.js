import fs from 'fs';

export const list = (status) => {
    try {
        const data = JSON.parse(fs.readFileSync("tasks.json", "utf-8"))

        let filtered;
        let label;

        if (status === 'done') {
            filtered = data.filter(item => item.status === "Done")
            label = "Completed Tasks"
        } else if (status === 'in-progress') {
            filtered = data.filter(item => item.status === "In Progress")
            label = "In Progress Tasks"
        } else if (status === 'todo') {
            filtered = data.filter(item => item.status === "Todo")
            label = "TODO"
        } else {
            filtered = data;
            label = "All Tasks"
        }

        if (filtered.length === 0) {
            console.log(`No ${label.toLowerCase()} found.`)
            return;
        }

        console.log(`${label}: \n`)
        console.log(filtered)

    } catch (err) {
        console.error(`Error: ${err.message}`)
    }
}