// Write your code here!
const element = document.getElementById("main");
    element.parentNode.removeChild(element);

const newHeader = document.createElement("h1");
newHeader.id = 'victory'
newHeader.innerHTML = "YOUR-NAME is the champion"
document.head.append(newHeader);