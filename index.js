import fs from 'fs'

import { AddTask } from './operations/add.js';
import { DeleteTask } from './operations/delete.js';
import { UpdateTask } from './operations/update.js';
/*
    The user should be able to:
        1. Add, Update, and Delete tasks
        2. Mark a task as in progress or done
        3. List all tasks
        4. List all tasks that are done
        5. List all tasks that are not done
        6. List all tasks that are in progress
*/
const args = process.argv.slice(2)

const operation = args[0]

const id = args[1] 
const task = args.slice([2]).join(" ")

if (!operation) {
    console.log("Usage: node index.js <operation> [id] [task]")
    process.exit(1)
}

console.log({ operation, id, task })

