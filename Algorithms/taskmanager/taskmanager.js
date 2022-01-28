let readline = require("readline");

const fs = require('fs');
let data = fs.readFileSync('./tasks.json')

let tasks = JSON.parse(data);


let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const saveData = () => {
    let jsonData = JSON.stringify(tasks)
    fs.writeFile('./tasks.json', jsonData, ()=>{})
}

const goBack = () => {
    rl.question("\n1. To go back to the menu\n2. To Exit\n", (answerBack) => {
        if (answerBack === "1") {
            console.clear();
            taskManager();
        } else if (answerBack === "2") {
            rl.close();
        }
    })
}

const showTasks = () => {
    console.clear();
    for (let i = 0; i < tasks.length; i++) {
        console.log(`\n----------------------------------------\n${(i + 1)}. ${tasks[i].Task.Name}     ${tasks[i].Task.Done}\n`);
    }
} 

const addTask = (newElement) => {
    let newObject = {Task : {Name: newElement, Done: ""}}
    tasks.push(newObject)
    saveData();
}

const deleteTask = (index) => {
    tasks.splice(index,1)
}
const askTask = () => {
    rl.question("Write your new task\n\n", (newTask) => {
        addTask(newTask)
        showTasks();
        rl.question("Would you like to write a new task?\n\n", (answerTask) => {
            if (answerTask === "yes") {
                console.clear();
                askTask();
            } else {
                console.clear();
                taskManager();
            }
        })
        })
}

const askRemove = () => {
    rl.question("Which task would you like to delete? (Use numbers)\n\n", (whichTask) => {
        whichTask = whichTask - 1
        deleteTask(whichTask);
        showTasks();
        saveData();
        rl.question("Would you like to delete another one? yes or no\n\n", (answerDelete) => {
            if (answerDelete === "yes") {
                askRemove();
            } else {
                console.clear();
                taskManager();
            }
        })
        })   
}

const askMark = () => {
    showTasks();
    rl.question("Which task would you like to mark as done? (Use numbers)\n\n", (whichTaskMark) => {
        Object.defineProperty(tasks[whichTaskMark - 1].Task, 'Done', { value: "done", writable: true
          });
          showTasks();
          saveData();
          rl.question("Would you like to mark another one as done? yes or no\n\n", (answerMark) => {
            if (answerMark === "yes") {
                askMark();
            } else {
                console.clear();
                taskManager();
            }
        })
    })
}
const taskManager = () => {
    rl.question("Welcome to your task manager, Press:\n1. to see all your tasks\n2. to add a task\n3. to delete a task\n4. to mark a task as done\n5. to Exit the task manager\n\n", (choice) => {
        if (choice === "1") {
            showTasks();
            goBack();
        } else if (choice === "2") {
            showTasks();
            askTask();
        } else if (choice === "3") {
            showTasks();
            askRemove();        
        } else if (choice === "4") {
            askMark();
        } else if (choice === "5") {
            rl.close();
        }
    })
}

taskManager();