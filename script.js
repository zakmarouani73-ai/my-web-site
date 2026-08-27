const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
});


const interactive = document.querySelectorAll(
    "a, button, .project, .service, .circle-button, .contact-button"
);

interactive.forEach((element) => {

    element.addEventListener("mouseenter", () => {
        cursor.style.width = "55px";
        cursor.style.height = "55px";
    });

    element.addEventListener("mouseleave", () => {
        cursor.style.width = "30px";
        cursor.style.height = "30px";
    });

});


const revealElements = document.querySelectorAll(
    ".project, .service, .about-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.1
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});
