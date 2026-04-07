import fs from 'fs'

export const UpdateTask = (id, newTask) => {
    const now = new Date()
    
    const data = JSON.parse(fs.readFileSync("tasks.json", "utf-8"))
    
    const specificData = data.find(task => task.id === Number(id))

    specificData.description = newTask;
    specificData.updatedAt = now.toISOString();

    fs.writeFileSync("tasks.json", JSON.stringify(data, null, 2));

    console.log(`Task updated successfully: (ID: ${id})`)
}