
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-anch')
    .forEach(link => {
        if (link.href.includes(`${activePage}`)) {
            link.classList.add('active');
        }
    });