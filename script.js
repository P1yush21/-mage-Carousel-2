document.addEventListener('DOMContentLoaded', () => {
            // Initialize Swiper
            const swiper = new Swiper('.school-tour-slider', {
                // Main settings
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                loop: true,
                
                // Coverflow effect settings
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },

                // MODIFIED: Removed the lazy loading configuration
                
                // Pagination (Dots)
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },

                // Navigation (Arrows)
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // Responsive Breakpoints
                breakpoints: {
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 40 }
                },
                
                // Keyboard navigation for the slider
                keyboard: {
                    enabled: true,
                },
            });

            // --- Lightbox Functionality ---
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
            const closeBtn = document.querySelector('.close-btn');

            document.querySelector('.swiper-wrapper').addEventListener('click', (e) => {
                const slide = e.target.closest('.swiper-slide');
                // Only open lightbox for the currently active slide
                if (slide && slide.classList.contains('swiper-slide-active')) {
                    const img = slide.querySelector('img');
                    const captionElement = slide.querySelector('.image-caption');
                    const captionTitle = captionElement.querySelector('h2').textContent;
                    const captionDescription = captionElement.querySelector('p').textContent;

                    lightbox.style.display = 'flex';
                    // Use the standard 'src' attribute now
                    lightboxImg.src = img.src; 
                    lightboxImg.alt = img.alt;
                    lightboxCaption.innerHTML = `<h2>${captionTitle}</h2><p>${captionDescription}</p>`;
                }
            });

            const closeLightbox = () => {
                lightbox.style.display = 'none';
            };

            closeBtn.addEventListener('click', closeLightbox);

            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
            
             document.addEventListener('keydown', (e) => {
                 if (e.key === 'Escape' && lightbox.style.display === 'flex') {
                     closeLightbox();
                 }
             });
        });