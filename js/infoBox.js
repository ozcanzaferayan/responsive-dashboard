document.getElementsByClassName('info-box-container')[0].addEventListener('click', changeActive);

function changeActive() {
    let target = arguments[0].target;
    let className = target.className;
    let tagName = target.tagName;
    let infobox;
    if (tagName === "svg") {
        infobox = target.parentElement;
    } else if (tagName === "path") {
        infobox = target.parentElement.parentElement;
    } else if (className === "info-box-container") {
        return;
    } else if (className.includes("info-box")) {
        infobox = target;
    } else if (className === "value" || className === "header") {
        infobox = target.parentElement.parentElement;
    } else if (className === "info-content") {
        infobox = target.parentElement;
    } else {
        return;
    }
    [...infobox.parentElement.children].forEach(x => x.className = "info-box");
    infobox.classList.add('info-box');
    infobox.classList.add('active');
}