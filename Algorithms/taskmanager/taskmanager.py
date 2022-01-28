from os import system, name
import json

jsonfile = open('./tasks.json', 'r')
jsondata = jsonfile.read()

newList = json.loads(jsondata)


class Task:
    def __init__(self, name, done):
        self.name = name
        self.done = done

tasks = []

for i in range(len(newList)):
    task1 = newList[i].get('Task')
    name_task = task1.get('Name')
    done_task = task1.get('Done')
    new_task = Task(name_task,done_task)
    tasks.append(new_task)

def save_data(tasks):
    data = []
    for i in range(len(tasks)):
        task1 = tasks[i]
        object = {}
        subobject = object['Task'] = {}
        subobject['Name'] = tasks[i].name
        subobject['Done'] = tasks[i].done
        data.append(object)
    with open('./tasks.json', 'w') as fp:
        json.dump(data, fp)

def clear():
   if name == 'nt':
      _ = system('cls')
   else:
      _ = system('clear')

def unknown():
    print("Unknown choice")

def show_tasks():
    clear()
    for task in tasks:
        print('\n----------------------------------------\n' + str(tasks.index(task) + 1) + " " + str(task.name) + "            " + str(task.done) + "\n")
    
def go_back ():
    answerback = input("\n1. To go back to the menu\n2. To Exit\n")
    if answerback == "1":
        clear()
        task_manager()
    elif answerback == "2":
        clear()
        quit()
    else:
        unknown()

def add_task(task):
    task = Task(task,"")
    tasks.append(task)
    save_data(tasks)

def ask_task():
    new_task = input("Write your new task\n\n")
    add_task(new_task)
    show_tasks()
    answer_task = input("Would you like to write a new task?\n\n")
    if answer_task == "yes":
        clear()
        show_tasks()
        ask_task()
    elif answer_task == "no":
        clear()
        task_manager()
    else:
        unknown()
        ask_task()

def delete_task(i):
    tasks.pop(i)

def ask_remove():
    which_task = input("Which task would you like to delete? (Use numbers)\n\n")
    which_task = int(which_task) - 1
    delete_task(which_task)
    show_tasks()
    save_data(tasks)
    answer_delete = input("Would you like to delete another one? yes or no\n\n")
    if answer_delete == "yes":
        clear()
        ask_remove()
    elif answer_delete == "no":
        clear()
        task_manager()
    else:
        unknown()
        ask_remove()

def ask_mark():
    which_task_mark = input("Which task would you like to mark as done? (Use numbers)\n\n")
    tasks[int(which_task_mark) - 1].done = "done"
    show_tasks()
    save_data(tasks)
    answer_mark = input("Would you like to mark another one as done? yes or no\n\n")
    if answer_mark == "yes":
        clear()
        show_tasks()
        ask_mark()
    elif answer_mark == "no":
        clear()
        task_manager()
    else:
        unknown()
        ask_mark()

def task_manager() :
    choice = input("Welcome to your task manager, Press:\n1. to see all your tasks\n2. to add a task\n3. to delete a task\n4. to mark a task as done\n5. to Exit the task manager\n\n")
    if choice == "1":
        show_tasks()
        go_back()
    elif choice == "2":
        show_tasks()
        ask_task()
    elif choice == "3":
        show_tasks()
        ask_remove()
    elif choice == "4":
        show_tasks()
        ask_mark()
    elif choice == "5":
        quit()
    else:
        unknown()
        task_manager()


task_manager()    