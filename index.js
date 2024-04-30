let notes = JSON.parse(localStorage.getItem("notes")) || []; // getting notes array from my local storage or if there isnt one there setting a new empty array.


if (!localStorage.getItem("notes")) { //if you dont have a notes array in your LS then:
    localStorage.setItem("notes", JSON.stringify(notes)); //set a notes array in a local storage.
}

function init() { //start

    const formField = document.getElementById("fieldset"); //calling the containers
    const notesListDiv = document.getElementById("notesList");

    const storedNotes = localStorage.getItem("notes");// getting the notes from ls
    notes = storedNotes ? JSON.parse(storedNotes) : [];//if they exist put them in array

    const buttonCreateNote = document.createElement("button"); //add note button:
    buttonCreateNote.innerText = "add note";
    buttonCreateNote.classList.add("btn", "btn-success", "save");

    buttonCreateNote.addEventListener("click", function (event) { //add note event
        event.preventDefault(); //so it wont refresh my page
        const taskName = document.getElementById("taskName"); //calling the content:
        const details = document.getElementById("details");
        const date = document.getElementById("date");
        const time = document.getElementById("time");
        console.log(taskName.value, details.value, date.value, time.value); //check if work and delete later
        if (taskName.value === "" || details.value === "") { //make sure the user us not just clicking things
            return;
        }

        let newNote = { //assigning the content (is assigning the right word?? never mind)
            taskName: taskName.value,
            taskDetails: details.value,
            dueDate: date.value,
            dueTime: time.value
        }
        notes.push(newNote); //pushing to array
        localStorage.setItem("notes", JSON.stringify(notes)); //pushing to Ls
        draw(notes); //the big ending


    })

    const buttonResetForm = document.createElement("button"); //reset form:
    buttonResetForm.innerText = "reset";
    buttonResetForm.classList.add("btn", "btn-danger");
    buttonResetForm.addEventListener("click", function (event) {
        event.preventDefault();
        taskName.value = ""
        details.value = ""
        date.value = ""
        time.value = ""
    })


    formField.append(buttonCreateNote, buttonResetForm); //append to container
    draw(notes);
}

function clearNotes() { //for a fresh start
    document.getElementById("notesList").innerHTML = "";
}

function draw(notesData) {
    clearNotes();
    for (let index = 0; index < notesData.length; index++) {
        const currentNoteUI = getSingleNoteUI(notesData[index], index); //drawin a single note
        document.getElementById("notesList").append(currentNoteUI);//push inside the note list div the UI peace.
    }
}

function getSingleNoteUI(noteData, index) { //building my single note structure
    if (typeof noteData !== 'object') return; //just to make sure

    const notesListDiv = document.getElementById("notesList")//call the notes container

    const noteContainerDiv = document.createElement("div"); //creating a container for each note
    const id = `note_${index}`; //i want my notes to have id`s
    noteContainerDiv.id = id;
    noteContainerDiv.className = "notesContainerDiv"; //adding a class for the container



    const i = document.createElement("i"); //adding the pin element
    i.className = "pin"; //adding a class for the pin

    const blockquote = document.createElement("blockquote"); //a conainer for the content of the note
    blockquote.classList.add("note", "yellow");



    //what will be written inside the container

    const taskName = document.createElement("h2");
    taskName.innerText = noteData.taskName;

    const details = document.createElement("h4");
    details.innerText = noteData.taskDetails;
    details.className = "newNoteDetails";


    const date = document.createElement("h4");
    date.innerText = noteData.dueDate;

    const time = document.createElement("h4");
    time.innerText = noteData.dueTime;

    const dateTimeDiv = document.createElement("div"); //because they need to be in the left down corner
    dateTimeDiv.className = "dateTimeDiv";
    dateTimeDiv.append(date, time);

    const delButton = document.createElement("button"); //delete a single note button:
    delButton.classList.add("btn", "deleteButton");
    delButton.setAttribute("id", `deletButton_${index}`); //giving the button id
    delButton.addEventListener("click", function (event) {
        event.preventDefault();//stop refreshing my page!!!!
        const noteIndex = parseInt(id.replace("note_", ""));//finding the note that i want todek=let index`s
        if (!isNaN(noteIndex)) { //make sure the index is number and then:
            notes.splice(noteIndex, 1);//delete from array
            localStorage.setItem("notes", JSON.stringify(notes));//delete from LS
            draw(notes);//do the trick
        }
    });
    const spanElement = document.createElement("span");//to use the ugly icons you must put it in spam
    spanElement.classList.add("glyphicon", "glyphicon-remove");
    spanElement.setAttribute("aria-hidden", "true");
    delButton.appendChild(spanElement);//pushing the x icon to the button

    //appending:

    blockquote.append(delButton, taskName, details, dateTimeDiv);//to the note
    noteContainerDiv.append(i, blockquote);//to the note container
    notesListDiv.append(noteContainerDiv);//to the notes container

    // console.log(noteContainerDiv)
    return noteContainerDiv
}


init(); //start!
