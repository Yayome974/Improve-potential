
    let lastScrollTop = 0;
    let menu = document.getElementById("menu");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
            menu.style.transform = "translateY(-100%)"; // Cache le menu
        } else {
            menu.style.transform = "translateY(0)"; // Affiche le menu
        }

        lastScrollTop = scrollTop;
    });

