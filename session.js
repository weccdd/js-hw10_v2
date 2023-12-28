let session = JSON.parse(localStorage.getItem(`session`)) || [];
console.log(session);
let sessionBlock = document.getElementById(`sessionList`);
session.forEach(sessions  => {
    const sessionElement = document.createElement(`div`)
    sessionElement.classList.add(`session_element`)
    sessionElement.textContent =`Дата та час відвідування: ${sessions.timestamp}`
    sessionBlock.appendChild(sessionElement)
})
