
inputSearchValueGlobal = "";
let filteredNotes = []
var notes = [
    //example
    {
        taskName: "pickUp my nephew",
        priority: "high",
        taskDetails: "Tavor kindergarten, Kfar-Saba",
        dueDate: "20/04/24",
        dueTime: "14:30",
    },
    {
        taskName: "pickUp my nephew",
        priority: "high",
        taskDetails: "Tavor kindergarten, Kfar-Saba",
        dueDate: "20/04/24",
        dueTime: "15:30",
    },
    {
        taskName: "pickUp my nephew",
        priority: "high",
        taskDetails: "Tavor kindergarten, Kfar-Saba",
        dueDate: "20/04/24",
        dueTime: "18:30",
    },
    {
        taskName: "pickUp my nephew",
        priority: "high",
        taskDetails: "Tavor kindergarten, Kfar-Saba",
        dueDate: "20/04/24",
        dueTime: "14:30",
    },
    {
        taskName: "hello",
        priority: "high",
        taskDetails: "Tavor kindergarten, Kfar-Saba",
        dueDate: "20/04/24",
        dueTime: "14:30",
    },
    {
        taskName: "michal",
        priority: "high",
        taskDetails: "Tavor kindergarten, Kfar-Saba",
        dueDate: "20/04/24",
        dueTime: "14:30",
    },
    {
        taskName: "pickUp my nephew",
        priority: "high",
        taskDetails: "Tavor kindergarten, Kfar-Saba",
        dueDate: "20/04/24",
        dueTime: "14:30",
    }


]

function init() {
    // const notesListDiv = document.getElementById("notesList")
    // const searchButton = document.getElementById("searchButton")
    // searchButton.addEventListener("click", alert("hello"))
    draw(notes)
}

function search() {
    const searchInput = document.getElementById("searchInput")
    const searchValue = searchInput.value
    const filteredNotes = notes.filter(note => note.taskName.toLowerCase().includes(searchValue.toLowerCase()))
    console.log(filteredNotes)
    draw(filteredNotes)
    console.log(filteredNotes)
    // console.log("Search value:", searchValue);
    // console.log("Filtered notes:", newNoteArray);
}

function resetSearch() {
    const resetSearchButton = document.getElementById("resetSearchButton")
    resetSearchButton.addEventListener("click", function () {
        searchValue.innerText = "Search task by name..."
    })
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
    updateSelectedNotes(notesData.filter(notes => notes.isSelected === true))
}

function updateSelectedNotes(arrayOfSelectedBooks) {
    const selectedNotesContainer = document.getElementById("selectedNotesNumber");
    selectedNotesContainer.innerText = arrayOfSelectedBooks.length;
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

    const priority = document.createElement("h3")
    priority.innerText = noteData.priority

    const details = document.createElement("h4")
    details.innerText = noteData.taskDetails

    const date = document.createElement("h4")
    date.innerText = noteData.dueDate

    const time = document.createElement("h4")
    time.innerText = noteData.dueTime

    const delButton = document.createElement("button")
    delButton.classList.add("btn", "btn-danger")
    delButton.innerText = "🗑️"
    delButton.setAttribute("id", `deletButton_${index}`)
    delButton.addEventListener("click", function () { //find the id of the element you want to delete.
        const delIndex = parseInt(delButton.id.replace("deletButton_", ""));
        const noteIndex = parseInt(id.replace("note_", ""));
        if (!isNaN(delIndex) && !isNaN(noteIndex)) {
            const elementToDelete = document.getElementById(`note_${noteIndex}`);
            if (elementToDelete) {
                notes.splice(noteIndex, 1);
                draw(notes)
            }
        }
    });

    const selectButton = document.createElement("button")
    selectButton.classList.add("btn", "btn-primary")
    if (noteData.isSelected === true) {
        selectButton.innerText = "unselect"
        blockquote.style.background = "pink"
    } else {
        selectButton.innerText = "select"
        blockquote.style.background = "#eae672"
    }
    selectButton.addEventListener("click", function () {
        
        if (noteData.isSelected === true) {
            noteData.isSelected = false
        } else {
            noteData.isSelected = true
        }
        draw(notes)
    })

    //appending:

    blockquote.append(taskName, priority, details, date, time, delButton, selectButton)
    noteContainerDiv.append(i, blockquote)
    notesListDiv.append(noteContainerDiv)

    console.log(noteContainerDiv)
    return noteContainerDiv
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

function addNewNote() { }

function deleteAllNotes() { }

function searchNote() { }

function resetSearchResult() { }

function selectNote() { }

function deleteSelectedNotes() { }

init();
console.log(notes)