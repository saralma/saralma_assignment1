// Listen for the DOMContentLoaded event to ensure the HTML is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the current index of the slide to be displayed
    let currentIndex = 0;
    // Select all elements with the class 'slide' and store them in the 'slides' NodeList
    const slides = document.querySelectorAll('.slide');
    // Select all elements with the class 'dot' and store them in the 'dots' NodeList
    const dots = document.querySelectorAll('.dot');

    // Function to display the slide corresponding to the given index and update the active dot
    function showSlide(index) {
        // Loop through all slides and display only the one that matches the current index
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        // Update the active state of dots to reflect the current slide
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Function to move to the next slide
    function nextSlide() {
        // Update the current index to the next slide, wrapping around if at the end
        currentIndex = (currentIndex + 1) % slides.length;
        // Display the new current slide
        showSlide(currentIndex);
    }

    // Function to move to the previous slide
    function prevSlide() {
        // Update the current index to the previous slide, wrapping around if at the beginning
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        // Display the new current slide
        showSlide(currentIndex);
    }

    // Initialize the carousel by displaying the first slide
    showSlide(currentIndex);

    // Add click event listeners to each dot for navigation
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            // Display the slide corresponding to the clicked dot
            showSlide(i);
            // Update the current index to match the clicked dot
            currentIndex = i;
        });
    });
});
