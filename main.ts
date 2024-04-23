import inquirer from "inquirer";
import { todo } from "node:test";

let toDos:string[]= [];
let condition = true;

let chooseOption = async() =>{
   
    while(condition){
let option = await inquirer.prompt(
    [
        {
        name:"options",
        type:"list",
        message:"Select an option you want to do.",
        choices:["Add task","Delet task","view todo list","Exit"]
        }
    ]);

    if(option.options === "Add task"){
        await addtask();
    } 
    else if(option.options === "Delet task"){
        await delettask();
    }
    else if(option.options === "view todo list"){
        await viewToDoList();
        
    }
    else if(option.options === "Exit"){
        condition = false;
    }
    }
}
let addtask = async() => {
        let add = await inquirer.prompt(
            [
                {
                    name:"firstQuestion",
                    type:"input",
                    message:"Enter your new task:",
                }
        
               
            ]
        );
    
        toDos.push(add.firstQuestion);
        console.log(`\n ${add.firstQuestion} task add successfully in your toDo list.`);
}
let viewToDoList = () => {
    console.log(` \n Your task list \n`);

    toDos.forEach((task, index) => {
        console.log(`${index} : ${task}`);
    })
}
let delettask = async() =>{
    await viewToDoList()
    let indexTask = await inquirer.prompt(
        [
            {
                name:"index",
                type:"string",
                message:"Enter the index no. of the task you want to delet. "
            }
        ]
    );
    let deletedTask = toDos.splice(indexTask.index,1);
    console.log(`\n ${deletedTask} this task has been delet succesfully.`)
}


chooseOption();









