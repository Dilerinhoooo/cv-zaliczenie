document.addEventListener("DOMContentLoaded", () => {
    // Tryb ciemny/jasny
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode")
            ? "Przełącz Tryb Jasny"
            : "Przełącz Tryb Ciemny";
    });

    // Rozwijane sekcje
    const collapsibleHeaders = document.querySelectorAll(".collapsible");
    collapsibleHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            content.classList.toggle("visible");
        });
    });

    // Podświetlenie umiejętności
    const skills = document.querySelectorAll(".highlightable");
    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            console.log(`Podświetlono umiejętność: ${skill.textContent}`);
        });
    });
});