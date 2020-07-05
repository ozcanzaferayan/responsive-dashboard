document.getElementById('nav-toggle').addEventListener('click', toggleNav);

function toggleNav(e) {
    let target = e.currentTarget;
    let icon = target.firstChild;
    let classList = ['icofont-rounded-double-right', 'icofont-rounded-double-left'];
    let isShrinked = icon.classList.contains(classList[0]);
    icon.classList = '';
    icon.classList.add(isShrinked ? classList[1] : classList[0]);
    document.querySelectorAll('.navbar span')
        .forEach(x => {
            x.className = '';
            x.classList.add(isShrinked ? 'show' : 'hide')
        });

}