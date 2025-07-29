const messages = [
    "But I packed snacks!",
    "There will be dragons!",
    "You get to wear a cape!",
    "Think of the treasure!",
    "Adventure awaits!",
    "You can't say no to this!",
    "I'll be sad if you don't...",
    "Come on, it'll be fun!",
    "Just one little quest?",
    "Say yes already!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
