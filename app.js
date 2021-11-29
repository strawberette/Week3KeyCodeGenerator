const intro = document.getElementById("intro");
const container = document.getElementById("container");
const keyCode = document.getElementById("keyCode");
const eventKey = document.getElementById("eventKey");
const eventCode = document.getElementById("eventCode");
const eventWhich = document.getElementById("eventWhich");
const keyNumber = document.getElementById("keyNumber");
const keyEvent = document.getElementById("keyEvent");
const codeEvent = document.getElementById("codeEvent");
const whichEvent = document.getElementById("whichEvent");
const heartContainer =document.getElementById("heartContainer");
container.style.display = "none";
document.addEventListener("keypress", (input) => {
    heartContainer.style.marginTop = 0;
    intro.style.display = "none";
    keyCode.style.display = "flex";
    container.style.display = "flex";
    keyNumber.textContent = input.keyCode;
    keyEvent.textContent = input.key;
    codeEvent.textContent = input.code;
    whichEvent.textContent = input.which;
} );
