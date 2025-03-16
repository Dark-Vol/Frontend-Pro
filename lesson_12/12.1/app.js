let storedLink = "";

function setLink() {
    const userInput = prompt("Введіть посилання:", "https://github.com/Dark-Vol");
    if (userInput && isValidURL(userInput)) {
        storedLink = userInput;
        alert("Посилання збережено!");
    } else {
        alert("Некоректне посилання!");
    }
}

function redirect() {
    if (storedLink) {
        window.location.href = storedLink;
    } else {
        alert("Спочатку введіть посилання!");
    }
}

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

document.getElementById("setLinkBtn").addEventListener("click", setLink);
document.getElementById("redirectBtn").addEventListener("click", redirect);
