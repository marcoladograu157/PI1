document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 50) {
          
            navLinks.forEach(link => {
                link.style.opacity = "0";
                link.style.visibility = "hidden";
                link.style.transition = "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out"; //TESTE NÃO ROULOU 
            });
        } else {
            navLinks.forEach(link => {
                link.style.opacity = "1";
                link.style.visibility = "visible";
            });
        }

        lastScrollTop = scrollTop;
    });
});