let input = prompt("what do you want to do");
const todoList = ["collect chicken list", "clean litter box"];

while (input !== "quite" && input !== "q") {
  if (input === "list") {
    console.log("***********************");
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i} : ${todoList[i]}`);
    }
    console.log("***********************");
  } else if (input === "new") {
    const newToDo = prompt("Ok, what is the new todo?");
    todoList.push(newToDo);
    console.log(`${newToDo} added to the list`);
  } else if (input === "delete") {
    const index = parseInt(
      prompt("ok, enter what do you want to delete? Give Index")
    );
    if (!Number.isNaN(index)) {
      todoList.splice(index, 1);
      console.log("Task deleted");
    } else {
      console.log("unknown index");
    }
  }

  input = prompt("what do you want to do");
}
console.log("OK quit the app");
