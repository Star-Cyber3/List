const enter = document.querySelector('#textInput');
enter.addEventListener('keydown', addByEnter);
// add enter listener for the text input;

function addByEnter(evt) {
    // the function called when enter is pressed and text input is focused;
    if (evt.keyCode === 13) {
        // if the keycode is strictly equal to 13 (enter) call add();
        add();
    }
}

const settings = document.querySelector('#settings');
let onCheck = 0;
settings.addEventListener('click', setting);
// when settings is clicked, call setting();

function setting(evt) {
    const settingGroup0 = document.querySelector("#settingGroup");
    settingGroup0.style.display = "block";
    // make setting group visible;
    settings.removeEventListener('click', setting);
    // remove the event listener at setting;
    console.log("setting group opened");
    // log at the console;
}

function doneSetting() {
    // when done is pressed in the setting group, call this;
    const hr0 = document.querySelector("#hr0");
    hr0.style.display = "none";
    const hr1 = document.querySelector("#hr1")
    hr1.style.display = "none";
    // make lines 2 and 3 disappeer;
    const list = document.querySelector("#list").innerHTML
    const settingTab0 = document.querySelector("#settingTab0").value;
    // get settingTab0's value
    settings.addEventListener('click', setting);
    // re-add the click eventListener for setting;
    const settingGroup0 = document.querySelector("#settingGroup");
    const div = document.querySelectorAll(".editInput").parentNode;
    const div1 = document.querySelectorAll(".editInput1").parentNode;
    const checkedList = document.querySelector("#checkedList");
    if (settingTab0 == 0) {
        hr0.style.display = "block";
        hr1.style.display = "block";
      // if the value of settingTab0 is 0 (option 1), then do this;
      hr0.style.display = "block";
      hr1.style.display = "block";
      // make lines two and three reappear;
        if ((list !== undefined) && (list !== "")) {
            div.forEach(function(elm) {
                checkedList.appendChild(elm);
            });
        }
        if ((checkedList !== undefined) && (checkedList !== "")) {
            div1.forEach(function (elm) {
                list.appendChild(elm);
            });
        }
    }
    settingGroup0.style.display = "none";
    // set the settingGroup's display to none;
    onCheck = settingTab0;
    alert ('Settings Saved');
    console.log(onCheck);
    console.log ('setting group closed');
}

function add() {
    const val = document.querySelector('#textInput').value;
    if((val !== undefined) && (val !== "")) {
        let idNum;
        let list = document.querySelector("#list");
        let newDiv = document.createElement("DIV");
        newDiv.setAttribute("class", "textSettings");
        list.append(newDiv);
        let newCheck = document.createElement("INPUT");
        newCheck.setAttribute("type", "checkbox");
        newCheck.addEventListener("click", checked);
        newCheck.setAttribute("class", "check");
        newDiv.append(newCheck);
        let newEditInput = document.createElement("INPUT");
        newEditInput.setAttribute("class", "editInput1");
        newEditInput.value = val;
        newEditInput.addEventListener('input', input);
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

function input(evt) {
    if (evt.target.value == "") {
        evt.target.parentNode.remove();
    }
}

function checked(evt) {
    let ifChecked = evt.target.checked;
    let item = evt.target.parentNode;
    let input = item.getElementsByTagName("INPUT")[1];
    if (ifChecked == true) {
        if (onCheck == 0) {
            input.setAttribute("class", "editInput");
            let checkedList = document.querySelector("#checkedList");
            checkedList.appendChild(item);
        } else if (onCheck == 1) {
            item.setAttribute("class", "textSettings");
        }
    } else if (ifChecked == false) {
        if (onCheck == 0) {
            item.removeAttribute("class", "editInput");
            item.setAttribute("class", "editInput1");
            let list = document.querySelector("#list");
            list.appendChild(item);
        } else if (onCheck == 1) {
            item.removeAttribute("class", "editInput");
            item.setAttribute("class", "editInput1");
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
    const removeButton = evt.target.parentNode;
    removeButton.remove();
    const list = document.querySelector("#list").innerHTML;
    const checkedList = document.querySelector("#checkedList").innerHTML;
    if ((list == "") && (checkedList == "")) {
        const resetButton = document.querySelector("#reset");
        const disabled = resetButton.getAttribute("disabled");
        if (disabled == null) {
            resetButton.setAttribute("disabled", "");
        }
    }
}
