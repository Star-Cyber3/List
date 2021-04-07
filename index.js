const enter = document.querySelector("#textInput");
enter.addEventListener('keydown', addByEnter);

function addByEnter(evt) {
    if (evt.keyCode === 13) {
        add();
    }
}

const settings = document.querySelector("#settings");
let onCheck = 0;
settings.addEventListener('click', setting);

function setting(evt) {
    const settingGroup0 = document.querySelector("#settingGroup");
    settingGroup0.style.display = "block";
    settings.removeEventListener('click', setting);
    console.log("setting group opened");
}

function doneSetting() {
    const hr0 = document.querySelector("#hr0");
    hr0.style.display = "none";
    const hr1 = document.querySelector("#hr1")
    hr1.style.display = "none";
    const list = document.querySelector("#list").innerHTML
    const settingTab0 = document.querySelector("#settingTab0").value;
    settings.addEventListener('click', setting);
    const settingGroup0 = document.querySelector("#settingGroup");
    const div = document.querySelectorAll(".textSettings");
    const checkedList = document.querySelector("#checkedList");
    if (settingTab0 == 0) {
      hr0.style.display = "block";
      hr1.style.display = "block";
        if ((list !== undefined) && (list !== "")) {
            div.forEach(function(elm) {
                checkedList.appendChild(elm);
            });
        }
    }
    settingGroup0.style.display = "none";
    onCheck = settingTab0;
    alert ("Settings Saved");
    console.log(onCheck);
    console.log ("setting group closed");
}

function add() {
    const val = document.querySelector('#textInput').value;
    if((val !== undefined) && (val !== "")) {
        let idNum;
        let list = document.querySelector("#list");
        let newDiv = document.createElement("DIV");
        newDiv.style.textAlign = "left";
        list.append(newDiv);
        let newCheck = document.createElement("INPUT");
        newCheck.setAttribute("type", "checkbox");
        newCheck.addEventListener("click", checked);
        newCheck.setAttribute("class", "check");
        newDiv.append(newCheck);
        let newSpan = document.createElement("SPAN");
        newSpan.addEventListener("click", edit);
        newSpan.textContent = val;
        newDiv.append(newSpan);
        let newEditInput = document.createElement("INPUT");
        newEditInput.setAttribute("class", "editInput");
        newEditInput.value = val;
        newEditInput.style.display = "none";
        newDiv.append(newEditInput);
        let newDeleteButton = document.createElement("SPAN");
        newDeleteButton.innerHTML = " &times";
        newDeleteButton.setAttribute("class", "removeLine");
        newDeleteButton.addEventListener('click', removeLine);
        newDiv.appendChild(newDeleteButton);
        document.querySelector('#textInput').value = "";
        const resetButton = document.querySelector("#reset");
        resetButton.removeAttribute("disabled", "");
        console.log("user input = " + val);
    } else {
        alert("Enter some text");
    }
}

let editInput;
let targetForEditing;

function edit(evt) {
    console.log("editing started");
    let div = evt.target.parentNode;
    let content = evt.target.textContent;
    targetForEditing = evt.target;
    targetForEditing.style.display = "none";
    editInput = div.getElementsByTagName("input")[1];
    editInput.style.display = "inline";
    editInput.textContent = content;
    editInput.addEventListener("keydown", finishEdit);
}

function finishEdit(evt) {
    if(evt.keyCode === 13) {
        console.log("done editing");
        console.log("new item text content = " + editInput.value);
        editInput.style.display = "none";
        targetForEditing.textContent = editInput.value;
        targetForEditing.style.display = "inline";
    }
}
                

function checked(evt) {
    let ifChecked = evt.target.checked;
    let item = evt.target.parentNode;
    if (ifChecked == true) {
        if (onCheck == 0) {
            item.setAttribute("class", "textSettings");
            let checkedList = document.querySelector("#checkedList");
            checkedList.appendChild(item);
        } else if (onCheck == 1) {
            item.setAttribute("class", "textSettings");
        }
    } else if (ifChecked == false) {
        if (onCheck == 0) {
            item.removeAttribute("class", "textSettings");
            let list = document.querySelector("#list");
            list.appendChild(item);
        } else if (onCheck == 1) {
            item.removeAttribute("class", "textSettings");
        }
    }
}

function reset() {
    let confirm1 = confirm("Continuing will erase everything from your list. This action is irreversible. Click OK to continue. ");
    if (confirm1 == true) {
        document.querySelector("#reset").setAttribute("disabled", "");
        document.querySelector("#list").innerHTML = "";
        document.querySelector("#checkedList").innerHTML = "";
    }
}

function removeLine(evt) {
    let removeButton = evt.target.parentNode;
    removeButton.remove();
}
