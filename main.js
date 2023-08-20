document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.querySelector(".skills");
    const projectsSection = document.querySelector(".projects");
    const aboutSection = document.querySelector(".about");

    // Agrega la clase 'show' cuando la sección entre en el viewport
    function checkScroll() {
        const skillsPosition = skillsSection.getBoundingClientRect().top;
        const projectsPosition = projectsSection.getBoundingClientRect().top;
        const aboutPosition = aboutSection.getBoundingClientRect().top;

        if (skillsPosition < window.innerHeight) {
            skillsSection.classList.add("show");
        }

        if (projectsPosition < window.innerHeight) {
            projectsSection.classList.add("show");
        }

        if (aboutPosition < window.innerHeight) {
            aboutSection.classList.add("show"); // Agrega la clase a la sección "Sobre mí"
        }
    }

    // Llama a la función cuando se cargue la página y cuando se haga scroll
    checkScroll();
    window.addEventListener("scroll", checkScroll);
});