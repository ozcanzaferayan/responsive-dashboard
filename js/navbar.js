var mini = true;
document.getElementById('expander').addEventListener('click', toggleSidebar);
document.getElementsByClassName('navbar-nav')[0].addEventListener('click', changeTab);

function toggleSidebar() {
    if (mini) {
        console.log("opening sidebar");
        document.getElementsByTagName("body")[0].className = 'navbar-expanded';
        mini = false;
    } else {
        console.log("closing sidebar");
        document.getElementsByTagName("body")[0].className = 'navbar-shrinked';
        mini = true;
    }
}

function changeTab() {
    let target = arguments[0].target;
    let tagName = target.tagName;
    let liElement;
    if (tagName === "I" || tagName === "SPAN") {
        liElement = target.parentElement.parentElement;
    } else if (tagName === "A") {
        liElement = target.parentElement;
    } else {
        return;
    }
    [...liElement.parentElement.children].forEach(x => x.className = "");
    liElement.classList.add('active');
}