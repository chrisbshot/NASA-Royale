document.addEventListener("DOMContentLoaded", () => {
    // Function to switch text based on button type (previous or next)
    function showNextText(slideshowId) {
        const slideshow = document.getElementById(slideshowId);
        const texts = slideshow.querySelectorAll('.pricing-text');
        let currentIndex = Array.from(texts).findIndex(text => text.classList.contains('active-text'));

        texts[currentIndex].classList.remove('active-text');
        currentIndex = (currentIndex + 1) % texts.length;
        texts[currentIndex].classList.add('active-text');
    }

    function showPreviousText(slideshowId) {
        const slideshow = document.getElementById(slideshowId);
        const texts = slideshow.querySelectorAll('.pricing-text');
        let currentIndex = Array.from(texts).findIndex(text => text.classList.contains('active-text'));

        texts[currentIndex].classList.remove('active-text');
        currentIndex = (currentIndex - 1 + texts.length) % texts.length;
        texts[currentIndex].classList.add('active-text');
    }

    // Attach event listeners to the buttons
    document.querySelectorAll(".switch-text-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const slideshowId = event.target.closest(".text-slideshow").id;
            if (button.classList.contains('next')) {
                showNextText(slideshowId);
            } else if (button.classList.contains('previous')) {
                showPreviousText(slideshowId);
            }
        });
    });

    // Service Card Slideshow on Hover
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach(card => {
        const slider = card.querySelector(".slider .slides");
        let currentIndex = 0;
        const totalSlides = slider.querySelectorAll(".slide").length;
        let slideInterval;

        // Function to show the next slide
        const showNextSlide = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        // Start sliding on hover
        card.addEventListener("mouseenter", () => {
            slideInterval = setInterval(showNextSlide, 1500);
        });

        // Stop sliding when hover ends
        card.addEventListener("mouseleave", () => {
            clearInterval(slideInterval);
        });
    });

    // Hamburger Menu Toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sideMenu = document.getElementById('sideMenu');
    const navMenu = document.getElementById('navMenu');

    hamburgerMenu.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
    
});

