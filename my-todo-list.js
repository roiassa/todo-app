const done = document.querySelectorAll(".todo-change-action");
const remove = document.querySelectorAll(".todo-remove");
const vi = document.querySelectorAll(".check");

console.log(vi);


// localStorage.clear();

done.forEach(element => {
    element.addEventListener("click", checked);
})
remove.forEach(element => {
    element.addEventListener("click", removeItem);
})


function checked(event) {
    event.preventDefault();
    let checked = this.previousElementSibling;
    //with the while loop, we're trying to get to the 'check' icon.
    while (checked.getAttribute("class") === null || !checked.getAttribute("class").includes("check")) {
        checked = checked.previousElementSibling;
    }
    checked.style.display = "block";
    setStorage(vi);
}


function setStorage(nodeList) {
    const newArr = []
    nodeList.forEach((item, index) => {
        if (window.getComputedStyle(item).display === "block") {
            newArr.push(index);
        }
    })
    let stringifiedArr = JSON.stringify(newArr);
    localStorage.setItem("viList", stringifiedArr);
}

function readStorage(nodeList) {
    let getViList = localStorage.getItem("viList");
    let unstringfiedArr = JSON.parse(getViList);
    if (unstringfiedArr === null) {
        return;
    }
    nodeList.forEach((item, index) => {
        if (unstringfiedArr.includes(index)) {
            item.style.display = "block";
        }
    });
}

readStorage(vi);



function removeItem(event) {
    event.preventDefault();
    const toRemove = this.parentElement;
    toRemove.remove();
}
