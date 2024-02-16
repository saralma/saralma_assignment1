

document.addEventListener('DOMContentLoaded', function() {

    let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
    
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
    
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }
    
        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }
    
        // Initialize the first slide
        showSlide(currentIndex);
    
    
        // Click event for navigation dots
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                showSlide(i);
                currentIndex = i;
            });
        });
    
    });