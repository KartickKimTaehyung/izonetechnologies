document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const offcanvas = document.querySelector('#offcanvasSidebar');

    toggler.addEventListener('click', () => {
        new bootstrap.Offcanvas(offcanvas).toggle();
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const offcanvas = document.querySelector('#offcanvasSidebar');

    toggler.addEventListener('click', () => {
        new bootstrap.Offcanvas(offcanvas).toggle();
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const offcanvas = document.querySelector('#offcanvasSidebar');

    toggler.addEventListener('click', () => {
        new bootstrap.Offcanvas(offcanvas).toggle();
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const offcanvas = document.querySelector('#offcanvasSidebar');

    toggler.addEventListener('click', () => {
        new bootstrap.Offcanvas(offcanvas).toggle();
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const offcanvas = document.querySelector('#offcanvasSidebar');

    toggler.addEventListener('click', () => {
        new bootstrap.Offcanvas(offcanvas).toggle();
    });
});







document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const offcanvas = document.querySelector('#offcanvasSidebar');

    toggler.addEventListener('click', () => {
        new bootstrap.Offcanvas(offcanvas).toggle();
    });
});






document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const offcanvas = document.querySelector('#offcanvasSidebar');

    toggler.addEventListener('click', () => {
        new bootstrap.Offcanvas(offcanvas).toggle();
    });
});








document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const offcanvas = document.querySelector('#offcanvasSidebar');
    const backToTop = document.getElementById('back-to-top');

    // Toggle offcanvas
    toggler.addEventListener('click', () => {
        new bootstrap.Offcanvas(offcanvas).toggle();
    });

    // Back to top functionality
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
