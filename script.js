function showProjects() {
    const section = document.getElementById("projects");

    if (section.classList.contains("hidden")) {
        section.classList.remove("hidden");

        setTimeout(() => {
            section.classList.add("show");
        }, 50);

        section.scrollIntoView({ behavior: "smooth" });
    }
}
