// Write your code here!
const toBeremoved = document.getElementById("main")
main.remove();


// const header = document.getElementById("victory")
const newHeader = document.createElement("h1")
newHeader.id ="victory";
newHeader.innerHTML ="YOUR-NAME is the champion"
document.body.append(newHeader)
// const newHeader = document.createElement("h1");
// main.append("newHeader")
