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

//  <!-- portfolio/project Section -->

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick)
{
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard , i) =>{
    imgCard.addEventListener("click",() =>{
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) =>{
    portfolioCloseBtn.addEventListener("click", () =>{
        portfolioModals.forEach((portfolioModalView) =>{
            portfolioModalView.classList.remove("active");
        })
    })
})


//<!-- scroll to top button --> 
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active",this.window.scrollY > 500)
})

scrollTopBtn.addEventListener("click",()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop  = 0;
});


// Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section, .sub-section"); // Include sub-sections
    const navItems = document.querySelectorAll(".nav-items a");
    const scrollY = window.pageYOffset;
    let currentActive = null;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100; // Adjusted offset
        const sectionId = current.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentActive = sectionId;
        }
    });

    navItems.forEach(item => {
        item.classList.remove("active");
        const href = item.getAttribute("href");
        // Check both with and without hash to handle different href formats
        if (href === `#${currentActive}` || href === currentActive) {
            item.classList.add("active");
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('.nav-items a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Account for fixed header
                behavior: 'smooth'
            });
            
            // Update active class immediately
            document.querySelectorAll('.nav-items a').forEach(item => {
                item.classList.remove("active");
            });
            this.classList.add("active");
        }
    });
});

//dark/light mode
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click",() =>{
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme" , getCurrentTheme());
    localStorage.setItem("saved-icon" , getCurrentIcon());
});

const getCurrentTheme =() => document.body.classList.contains("dark-theme")? "dark" : "light";
const getCurrentIcon =() => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


// Responsive
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () =>{
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () =>{
    navigation.classList.remove("active");
});

navItems.forEach((navItem) =>{
    navItem.addEventListener("click" , () =>{
        navigation.classList.remove("active");
    })
})


//scroll reveal
 ScrollReveal({
    //  reset: true ,
     distance: '60px',
     duration:2500,
     delay:100
});

ScrollReveal().reveal('.home .info h2, .section-title-01 , .section-title-02',{delay:500, origin:'left'});
ScrollReveal().reveal('.home .info h3, .home .info p , .about-info .btn,services-description h3',{delay:600, origin:'right'});
ScrollReveal().reveal('.home .info .btn',{delay:700, origin:'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li',{delay:500, origin:'left' , interval:200});
ScrollReveal().reveal('.home-img , .about-img',{delay:500, origin:'bottom'});
ScrollReveal().reveal('.about .description, .contact-right',{delay:600, origin:'right'});
ScrollReveal().reveal('.about .professional-list li',{delay:500, origin:'right',interval:200});
ScrollReveal().reveal('.skills-description, services-description,.contact-card, contact-left h2',{delay:700, origin:'left'});
ScrollReveal().reveal('.experience-card, .service-card,.eduction,.portfolio .img-card',{delay:800, origin:'bottom',interval:200});
ScrollReveal().reveal('footer .group',{delay:500, origin:'top',interval:200});







