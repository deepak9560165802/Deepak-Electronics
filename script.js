const texts = ["Deepak Electronics", "The Weighing Scale Solution", "Sale & Service"];
let index = 0;
let displayText = "";
let charIndex = 0;
let deleting = false;

let nav = document.querySelector(".nav");
let cross = document.querySelector("#cross");
let menu = document.querySelector("#menu");

//event listener to menu hamburger feature

menu.addEventListener("click",()=>{
    nav.style.left = "0%";
    cross.style.display = "block";
})

cross.addEventListener("click",()=>{
    nav.style.left = "100%";
    cross.style.display = "none";
})




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
