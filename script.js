const texts = ["Deepak Electronics", "The Weighing Scale Solution", "Sale & Service"];
let index = 0;
let displayText = "";
let charIndex = 0;
let deleting = false;

function animateText() {
    if (!deleting) {
        displayText = texts[index].slice(0, charIndex);
        charIndex++;
        if (charIndex > texts[index].length) {
            deleting = true;
            setTimeout(animateText, 500);
            return;
        }
    } else {
        displayText = texts[index].slice(0, charIndex);
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            index = (index + 1) % texts.length;
        }
    }
    document.getElementById("display").innerText = displayText;
    setTimeout(animateText, 200);
}

animateText();