window.addEventListener("scroll" , function()
{
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 2);
});

/* <!-- serivicess section --> */
document.addEventListener('DOMContentLoaded', function() {
    // Get all service containers
    const serviceContainers = document.querySelectorAll('.service-container');
    
    serviceContainers.forEach(container => {
        // Find elements within each container
        const learnMoreBtn = container.querySelector('.learn-more-btn');
        const modalCloseBtn = container.querySelector('.modal-close-btn');
        const serviceModal = container.querySelector('.service-modal');
        
        // Add click event to Learn More button
        learnMoreBtn.addEventListener('click', () => {
            serviceModal.classList.add('active');
        });
        
        // Add click event to Close button
        modalCloseBtn.addEventListener('click', () => {
            serviceModal.classList.remove('active');
        });
        
        // Close modal when clicking outside content
        serviceModal.addEventListener('click', (e) => {
            if (e.target === serviceModal) {
                serviceModal.classList.remove('active');
            }
        });
    });
});

