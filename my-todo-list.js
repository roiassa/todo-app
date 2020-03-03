const done = document.querySelectorAll(".todo-change-action");
const remove = document.querySelectorAll(".todo-remove")



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
    while(checked.getAttribute("class") === null ||!checked.getAttribute("class").includes("check")) {
        checked = checked.previousElementSibling;
    }
    checked.style.display = "block";
}

function removeItem(event) {
    event.preventDefault();
    const toRemove = this.parentElement;
    toRemove.remove();
}