
// inputSearchValueGlobal = "";
// let filteredNotes = []
// var notes = [
//     //example
//     {
//         taskName: "1",
//         taskDetails: "Tavor kindergarten, Kfar-Saba",
//         dueDate: "20/04/24",
//         dueTime: "14:30",
//     },
//     {
//         taskName: "2",
//         taskDetails: "Tavor kindergarten, Kfar-Saba",
//         dueDate: "20/04/24",
//         dueTime: "15:30",
//     },
//     {
//         taskName: "3",
//         taskDetails: "Tavor kindergarten, Kfar-Saba",
//         dueDate: "20/04/24",
//         dueTime: "18:30",
//     },
//     {
//         taskName: "4",
//         taskDetails: "Tavor kindergarten, Kfar-Saba",
//         dueDate: "20/04/24",
//         dueTime: "14:30",
//     },
//     {
//         taskName: "5",
//         taskDetails: "Tavor kindergarten, Kfar-Saba",
//         dueDate: "20/04/24",
//         dueTime: "14:30",
//     },
//     {
//         taskName: "6",
//         taskDetails: "Tavor kindergarten, Kfar-Saba",
//         dueDate: "20/04/24",
//         dueTime: "14:30",
//     },
//     {
//         taskName: "7",
//         taskDetails: "Tavor kindergarten, Kfar-Saba",
//         dueDate: "20/04/24",
//         dueTime: "14:30",
//     }


// ]
// let notes = []

// localStorage.setItem("notes", JSON.stringify(notes));

let notes = JSON.parse(localStorage.getItem("notes")) || [];


if (!localStorage.getItem("notes")) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function init() {

    const formField = document.getElementById("fieldset")
    const notesListDiv = document.getElementById("notesList")

    const storedNotes = localStorage.getItem("notes"); //
    notes = storedNotes ? JSON.parse(storedNotes) : [];

    const buttonCreateNote = document.createElement("button")
    buttonCreateNote.innerText = "add note"
    buttonCreateNote.classList.add("btn", "btn-success", "save")

    buttonCreateNote.addEventListener("click", function (event) {
        event.preventDefault()
        const taskName = document.getElementById("taskName")
        const details = document.getElementById("details")
        const date = document.getElementById("date")
        const time = document.getElementById("time")
        console.log(taskName.value, details.value, date.value, time.value)
        if (taskName.value === "" || details.value === "") {
            return;
        }

        let newNote = {
            taskName: taskName.value,
            taskDetails: details.value,
            dueDate: date.value,
            dueTime: time.value
        }
        notes.push(newNote)
        localStorage.setItem("notes", JSON.stringify(notes));
        draw(notes)


    })

    const buttonResetForm = document.createElement("button")
    buttonResetForm.innerText = "reset"
    buttonResetForm.classList.add("btn", "btn-danger")
    buttonResetForm.addEventListener("click", function (event) {
        event.preventDefault()
        taskName.value = ""
        details.value = ""
        date.value = ""
        time.value = ""
    })


    formField.append(buttonCreateNote, buttonResetForm)
    draw(notes)
}

function clearNotes() {
    document.getElementById("notesList").innerHTML = ""
}

function draw(notesData) {
    clearNotes()
    for (let index = 0; index < notesData.length; index++) {
        const currentNoteUI = getSingleNoteUI(notesData[index], index); //drawin a single note
        document.getElementById("notesList").append(currentNoteUI);//push inside the note list div the UI peace.
    }
}

function getSingleNoteUI(noteData, index) {
    if (typeof noteData !== 'object') return;

    const notesListDiv = document.getElementById("notesList")

    const noteContainerDiv = document.createElement("div"); //creating a container for each note
    const id = `note_${index}`
    noteContainerDiv.id = id;
    noteContainerDiv.className = "notesContainerDiv"; //adding a class for the container



    const i = document.createElement("i"); //adding the pin element
    i.className = "pin"; //adding a class for the pin

    const blockquote = document.createElement("blockquote"); //a conainer for the content of the note
    blockquote.classList.add("note", "yellow");



    //what will be written inside the container

    const taskName = document.createElement("h2")
    taskName.innerText = noteData.taskName

    const details = document.createElement("h4")
    details.innerText = noteData.taskDetails
    details.className = "newNoteDetails"

    
    const date = document.createElement("h4")
    date.innerText = noteData.dueDate
    
    const time = document.createElement("h4")
    time.innerText = noteData.dueTime
    
    const dateTimeDiv = document.createElement("div")
    dateTimeDiv.className = "dateTimeDiv"
    dateTimeDiv.append(date, time)

    const delButton = document.createElement("button")
    delButton.classList.add("btn", "btn-danger", "deleteButton")
    // delButton.innerText = "🗑️"
    delButton.setAttribute("id", `deletButton_${index}`)
    delButton.addEventListener("click", function (event) { 
        event.preventDefault();
        const noteIndex = parseInt(id.replace("note_", ""));
        if (!isNaN(noteIndex)) {
            notes.splice(noteIndex, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            draw(notes);
        }
        });
    

    //appending:

    blockquote.append(delButton, taskName, details, dateTimeDiv)
    noteContainerDiv.append(i, blockquote)
    notesListDiv.append(noteContainerDiv)

    // console.log(noteContainerDiv)
    return noteContainerDiv
}


init();
