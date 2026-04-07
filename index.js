import fs from 'fs'

import { AddTask } from './operations/add.js';
import { DeleteTask } from './operations/delete.js';
import { UpdateTask } from './operations/update.js';
import { list } from './operations/list.js';
import { MarkAsDone } from './operations/mark-done.js';
import { MarkInProgress } from './operations/mark-in-progress.js';

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
        list(args[1])
        break;

    case "mark-done": 
        MarkAsDone(args[1])
        break;

    case "mark-in-progress":
        MarkInProgress(args[1])
        break;

    default:
        console.log(`Error: no such command as ${operation}`)
        break;
}