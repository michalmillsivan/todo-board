// function init() {
//     loadUserFormLS()
//     loadBackGround()
//     const colorPicker = document.getElementById("selectedColor")
//     colorPicker.addEventListener("change", (event) => {
//         document.body.style.background = event.target.value
//         localStorage.setItem("background", event.target.value)
//     })
//     const setUserNameButton = document.getElementById("setUserName")
//     setUserNameButton.addEventListener("click", () => {
//         const inputUserName = document.getElementById("userName").value;
//         if (inputUserName) {
//             localStorage.setItem("currentUserName", inputUserName);
//             draw(inputUserName)
//         }
//     })


// }

// function loadUserFormLS() {
//     const currentUserName = localStorage.getItem("currentUserName")
//     if (currentUserName) {
//         draw(currentUserName)
//     }
// }
// function loadBackGround() {
//     const background = localStorage.getItem("background")
//     if (background) {
//         document.body.style.background = background
//     }
// }

// function draw(userName) {
//     const helloUserHeader = document.getElementById("hiUserNameHeader")
//     helloUserHeader.innerText = `Hello ${userName}`
// }

// init();