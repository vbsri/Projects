document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const links = document.querySelectorAll('nav a');

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent the default anchor click behavior
            event.preventDefault();

            // Get the target section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
