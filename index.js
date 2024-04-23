
inputSearchValueGlobal = "";
var notes = [
    //example
    {
        taskName: "pickUp my nephew",
        priority: "high",
        taskDetails: "Tavor kindergarten, Kfar-Saba",
        dueDate: "20/04/24",
        dueTime: "14:30"
    },
    {
        taskName: "pickUp my nephew",
        priority: "high",
        taskDetails: "Tavor kindergarten, Kfar-Saba",
        dueDate: "20/04/24",
        dueTime: "14:30"
    },
    {
        taskName: "pickUp my nephew",
        priority: "high",
        taskDetails: "Tavor kindergarten, Kfar-Saba",
        dueDate: "20/04/24",
        dueTime: "14:30"
    },
    {
        taskName: "pickUp my nephew",
        priority: "high",
        taskDetails: "Tavor kindergarten, Kfar-Saba",
        dueDate: "20/04/24",
        dueTime: "14:30"
    },
    {
        taskName: "pickUp my nephew",
        priority: "high",
        taskDetails: "Tavor kindergarten, Kfar-Saba",
        dueDate: "20/04/24",
        dueTime: "14:30"
    },
    {
        taskName: "pickUp my nephew",
        priority: "high",
        taskDetails: "Tavor kindergarten, Kfar-Saba",
        dueDate: "20/04/24",
        dueTime: "14:30"
    },
    {
        taskName: "pickUp my nephew",
        priority: "high",
        taskDetails: "Tavor kindergarten, Kfar-Saba",
        dueDate: "20/04/24",
        dueTime: "14:30"
    }


]


function init() {
    var notesListDiv = document.getElementById("notesList")

    for (let index = 0; index < notes.length; index++) {
        const currentNote = notes[index]; //dealing with one note at a time
        const noteContainerDiv = document.createElement("div"); //creating a container for each note
        noteContainerDiv.id = `note_${index}`
        noteContainerDiv.className = "notesContainerDiv"; //adding a class for the container

        const i = document.createElement("i"); //adding the pin element
        i.className = "pin"; //adding a class for the pin

        const blockquote = document.createElement("blockquote"); //a conainer for the content of the note
        blockquote.classList.add("note", "yellow");
       
        //what will be written inside the container

        const taskName = document.createElement("h2")
        taskName.innerText = currentNote.taskName

        const priority = document.createElement("h3")
        priority.innerText = currentNote.priority

        const details = document.createElement("h4")
        details.innerText = currentNote.taskDetails

        const date = document.createElement("h4")
        date.innerText = currentNote.dueDate

        const time = document.createElement("h4")
        time.innerText = currentNote.dueTime

        const delButton = document.createElement("button")
        delButton.classList.add("btn", "btn-danger")
        delButton.innerText = "🗑️"

        const selectButton = document.createElement("button")
        selectButton.classList.add("btn", "btn-success")
        selectButton.innerText = "select"
        selectButton.addEventListener("click", function () {
            blockquote.style.background = "pink"
        })

        //appending:
        
        blockquote.append(taskName, priority, details, date, time, delButton, selectButton)
        noteContainerDiv.append(i, blockquote)
        notesListDiv.append(noteContainerDiv)
    }
    console.log(notesListDiv)
}


function getSingleNoteByProp(prop, value) { //serch
    return notes.find(currentNote =>
        currentNote[prop.toLowerCase()].toLowerCase() === value.toLowerCase())
}

function getSingleNoteByHighPriority(priority, notesArray) { //filter by priority
    if (!Array.isArray(notesArray)) return;
    return notesArray.filter(function (currentNote) { return currentNote.priority.value > priority.value })
}

function deleteNoteByName(name, notesArray) { //delete single note
    if (typeof name !== 'string') return;
    if (!Array.isArray(notesArray)) return;
    var taskName = name.toLowerCase()
    var indexToDelete = notesArray.findIndex(function (currentNote) { return currentNote.taskName.toLowerCase() === taskName })
    if (indexToDelete > -1) {
        notesArray.splice(indexToDelete, 1)
    }
}

function draw() { }

function addNewNote() { }

function deleteAllNotes() { }

function searchNote() { }

function resetSearchResult() { }

function selectNote() { }

function deleteSelectedNotes() { }

init();
console.log(notes)