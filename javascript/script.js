let diceButton = document.getElementById("dice-button-container")
diceButton.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(advice => {
        let adviceHeader = document.getElementById("advice-header")
        let adviceParagraph = document.getElementById("advice-paragraph")
        adviceHeader.innerHTML = `Advice #${advice.slip.id}`
        adviceParagraph.innerHTML = `&#8220${advice.slip.advice}&#8221`
    })
})