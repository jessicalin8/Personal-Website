// Function to handle the intersection of elements
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('project-fade-in'); // Add the class to trigger the animation
            observer.unobserve(entry.target); // Stop observing once the animation is applied
        }
    });
}

// Create an observer instance
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5, // Trigger the animation when 20% of the element is visible
});

// Target all project containers
const projectContainers = document.querySelectorAll('.project-container');

// Start observing each project container
projectContainers.forEach(container => {
    observer.observe(container);
});


//About section animation
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".about-section");
// Create an observer instance
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this threshold value as needed
    };
// Create an observer instance
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("project-fade-in");
                observer.unobserve(entry.target); // Stop observing once animation is applied
            }
        });
    }, options);
// Start observing each project container
    sections.forEach((section) => {
        observer.observe(section);
    });
});
