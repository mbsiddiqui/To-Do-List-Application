/* reading the fields */
var inputId = document.getElementById("userInput");
var inputValue;  /* input value */
var listId = document.getElementById("todoList");

/* declaring and initializing variables */
// var saveCounter = 0; /* to count save items */

/* function to add user input into the list */
function addToList() {
    /* clearing ul element */
    // console.log(listId.firstChild.nodeValue.toString())
    // if (listId.firstChild === "(No list item to display)"){
    //     listId.innerHTML = "";
    // }

    /* getting the current user input */
    inputValue = inputId.value;

    /* condition to not add empty items in the list */
    if (inputId.value) {
        /* saving the currently displayed input in list */

        /* adding 'li' item to the list as soon as user enter a task */
        var todoItem = document.createElement("li");
        var todoItemValue = document.createTextNode(inputValue);
        /* making 'text node' the child of 'li' */
        todoItem.appendChild(todoItemValue);
        /* giving a class for styling purpose */
        todoItem.setAttribute("class", "todoItem");
        /* making this 'li' child of 'ol' */
        listId.appendChild(todoItem);

        /* done button */
        var doneBtn = document.createElement("button");
        var doneText = document.createTextNode("Done");
        /* giving attributes to doneBtn */
        doneBtn.setAttribute("class", "todoItem");
        doneBtn.setAttribute("class", "doneBtn button");
        /* giving an 'onClick' event to the button */
        doneBtn.setAttribute("onClick", "doneItem(this)");
        doneBtn.appendChild(doneText);
        todoItem.appendChild(doneBtn);

        /* edit button */
        var editBtn = document.createElement("button");
        var editText = document.createTextNode("Edit");
        /* giving attributes to editBtn */
        editBtn.setAttribute("class", "todoItem");
        editBtn.setAttribute("class", "editBtn button");
        doneBtn.setAttribute("id", "editBtn");
        /* giving an 'onClick' event to the button */
        editBtn.setAttribute("onClick", "editItem(this)");
        editBtn.appendChild(editText);
        todoItem.appendChild(editBtn);

        /* delete button */
        var deleteBtn = document.createElement("button");
        var delText = document.createTextNode("Delete");
        /* giving attributes to deleteBtn */
        deleteBtn.setAttribute("class", "todoItem");
        deleteBtn.setAttribute("class", "deleteBtn button");
        /* giving an 'onClick' event to the button */
        deleteBtn.setAttribute("onClick", "delItem(this)");
        deleteBtn.appendChild(delText);
        todoItem.appendChild(deleteBtn);
    }
    /* if button is pressed without typing any task */
    else{
        /* disclaimer message */
        alert("Can't add empty task into the list. Try adding a non-empty task in the list.");
    }
    inputId.value = "";   /* clearing the input field */
}

/* function to strikethrough the item that are done */
function doneItem(e){
    e.parentNode.setAttribute("class", "doneTask todoItem");
    e.nextSibling.disabled = true;  /* to disable to 'editBtn' for items that are marked as 'done' */
}
/* function to edit a list item */
function editItem(e){
    /* editing the item from which "edit' event is fired" */
    /* setting the value of input field equal to the current item value, so user can edit it */
    inputId.value = e.parentNode.firstChild.nodeValue;
    /* removing item from current position */
    e.parentNode.remove();
}

/* function to delete an item from list */
function delItem(e){
    /* removing the item from which "delete' event is fired" */
    e.parentNode.remove();
}

/* function to clear the list */
function clearList() {
    inputId.value = "";     /* clear the input field */
    listId.innerHTML = "(No list item to display)";     /* clearing the list */
    saveCounter = 0;    /* re-setting the counter */
}