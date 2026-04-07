import fs from 'fs'

import { AddTask } from './operations/add.js';
import { DeleteTask } from './operations/delete.js';
import { UpdateTask } from './operations/update.js';
import { list } from './operations/list.js';

/*
    The user should be able to:
        1. Add, Update, and Delete tasks
        2. Mark a task as in progress or done
        3. List all tasks
        4. List all tasks that are done
        5. List all tasks that are not done
        6. List all tasks that are in progress

    Sample Usage: 
        # Adding a new task
        task-cli add "Buy groceries"
        # Output: Task added successfully (ID: 1)

        # Updating and deleting tasks
        task-cli update 1 "Buy groceries and cook dinner"
        task-cli delete 1

        # Marking a task as in progress or done
        task-cli mark-in-progress 1
        task-cli mark-done 1

        # Listing all tasks
        task-cli list

        # Listing tasks by status
        task-cli list done
        task-cli list todo
        task-cli list in-progress
*/

const args = process.argv.slice(2)

const operation = args[0]

if (!operation) {
    console.log("Usage: node index.js <operation> [id] [task]")
    process.exit(1)
}

switch (operation) {
    case "add":
        AddTask(args[1])
        break;

    case "update":
        UpdateTask(args[1], args[2])
        break;

    case "delete":
        DeleteTask(args[1])
        break;

    case "list":
        list()
        break;

    default:
        console.log(`Error: such command as ${operation}`)
        break;
}