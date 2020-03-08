const done = document.querySelectorAll(".todo-change-action");
const remove = document.querySelectorAll(".todo-remove");
const vi = document.querySelectorAll(".check");
const topDone = document.querySelectorAll(".top-done")
const listItems = document.querySelectorAll(".todo-item")



// localStorage.clear();

done.forEach(element => {
    element.addEventListener("click", checked);
})
remove.forEach(element => {
    element.addEventListener("click", removeItem);
})

// topDone.addEventListener("click", done)


function checked(event) {
    event.preventDefault();
    let checked = this.previousElementSibling;
    //with the while loop, we're trying to get to the 'check' icon.
    while (checked.getAttribute("class") === null || !checked.getAttribute("class").includes("check")) {
        checked = checked.previousElementSibling;
    }
    checked.style.display = "block";

    setStorageNodeList(vi);
}


function setStorageNodeList(nodeList) {
    const newArr = []
    nodeList.forEach((item, index) => {
        if (window.getComputedStyle(item).display === "block") {
            newArr.push(index);
        }
    }
    )
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
    // const removedArr = [];
    event.preventDefault();
    const toRemove = this.parentElement;
    toRemove.remove();
}
//     if (toRemove.remove()) {
//         removedArr.push(toRemove);
//         console.log(removedArr)
//     }
//     setStorageRemoved(removedArr);
// }

// function setStorageRemoved(removed) {
//     const newArr = []
//     removed.forEach((item, index) => {
//         if (window.onclick(item)) {
//             newArr.push(index);
//         }
//         let stringfiedArr = JSON.stringify(newArr);
//         localStorage.setItem('removedItem', stringfiedArr);
//     })

// }

// function readStorageRemoved(removed) {
//     let getRemoved = localStorage.getItem('removedItem');
//     let unstringfiedArr = JSON.parse(getRemoved);
//     if (unstringfiedArr === null) {
//         return;
//     }
//     removed.forEach((item, index) => {
//         if (unstringfiedArr.includes(index)) {
//             item.remove();
//         }
//     })
// }
