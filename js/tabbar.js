document.getElementsByClassName('tab')[0].addEventListener('click', changeTab);
var activeTab = 'tabCharts';

function changeTab() {
    let target = arguments[0].target;
    let tagName = target.tagName;
    let liElement;
    if (tagName === "I" || tagName === "SPAN") {
        liElement = target.parentElement;
    } else if (tagName === "A") {
        liElement = target;
    } else {
        return;
    }

    [...liElement.parentElement.children].forEach(x => x.className = "");
    liElement.classList.add('active');

    let charts = document.querySelector('section[role="region"]');
    let aside = document.querySelector('aside');
    activeTab = liElement.id;
    if (activeTab === 'tabCreditCard') {
        charts.style.display = 'none';
        aside.style.display = 'initial';
    } else {
        aside.style.display = 'none';
        charts.style.display = 'initial';
    }
}