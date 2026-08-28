// ============================================
// NAVBAR & MOBILE MENU
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = navLinks.querySelectorAll('a');
    const dropdownParents = document.querySelectorAll('.dropdown > a');

    // --- 1. Toggle hamburger ---
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // --- 2. Toggle Dropdown di Mobile/Tablet ---
    dropdownParents.forEach(parent => {
        parent.addEventListener('click', function (e) {
            // Hanya aktif di mobile/tablet (sama dengan breakpoint responsive.css)
            if (window.innerWidth <= 992) {
                e.preventDefault(); // Mencegah lompat ke atas karena href="#"
                const parentLi = this.parentElement;
                
                // Tutup dropdown lain agar tidak terbuka bersamaan
                dropdownParents.forEach(other => {
                    if (other !== this) {
                        other.parentElement.classList.remove('open');
                    }
                });

                // Toggle class 'open' pada dropdown yang diklik
                parentLi.classList.toggle('open');
            }
        });
    });

    // --- 3. Tutup menu saat link diklik ---
    links.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            
            // Tutup juga semua dropdown saat link diklik
            dropdownParents.forEach(parent => {
                parent.parentElement.classList.remove('open');
            });
        });
    });

    // --- 4. Tutup menu klik di luar ---
    document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            
            // Tutup semua dropdown
            dropdownParents.forEach(parent => {
                parent.parentElement.classList.remove('open');
            });
        }
    });

    // --- 5. Efek scroll navbar ---
    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 6. PERBAIKAN: Tutup menu otomatis saat layar di-resize ke desktop ---
    window.addEventListener('resize', function () {
        if (window.innerWidth > 992) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            
            // Tutup semua dropdown
            dropdownParents.forEach(parent => {
                parent.parentElement.classList.remove('open');
            });
        }
    });

    // ============================================
    // HERO CAROUSEL
    // ============================================

    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById('dotsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    let intervalId = null;
    const AUTO_INTERVAL = 5000;

    // --- Buat dots ---
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function goToSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    function nextSlide() {
        goToSlide((currentIndex + 1) % slides.length);
    }

    function prevSlide() {
        goToSlide((currentIndex - 1 + slides.length) % slides.length);
    }

    nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
    prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });

    function startAutoSlide() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(nextSlide, AUTO_INTERVAL);
    }

    function resetAutoSlide() {
        clearInterval(intervalId);
        startAutoSlide();
    }

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
    carousel.addEventListener('mouseleave', startAutoSlide);

    goToSlide(0);
    startAutoSlide();

    // ============================================
    // TESTIMONI CAROUSEL
    // ============================================

    const testiTrack = document.getElementById('testimoniTrack');
    const testiPrev = document.getElementById('testiPrev');
    const testiNext = document.getElementById('testiNext');
    const testiDots = document.getElementById('testiDots');
    const testiItems = document.querySelectorAll('.testimoni-item');
    let testiIndex = 0;
    let testiIntervalId = null;

    if (testiTrack) {
        // Buat dots untuk testimoni
        testiItems.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToTestimoni(index));
            testiDots.appendChild(dot);
        });

        const testiDotsArray = testiDots.querySelectorAll('.dot');

        function goToTestimoni(index) {
            testiItems.forEach(item => item.style.transform = `translateX(-${index * 100}%)`);
            testiDotsArray.forEach(dot => dot.classList.remove('active'));
            testiDotsArray[index].classList.add('active');
            testiIndex = index;
        }

        function nextTestimoni() {
            goToTestimoni((testiIndex + 1) % testiItems.length);
        }

        function prevTestimoni() {
            goToTestimoni((testiIndex - 1 + testiItems.length) % testiItems.length);
        }

        testiNext.addEventListener('click', () => { nextTestimoni(); resetAutoTesti(); });
        testiPrev.addEventListener('click', () => { prevTestimoni(); resetAutoTesti(); });

        function startAutoTesti() {
            if (testiIntervalId) clearInterval(testiIntervalId);
            testiIntervalId = setInterval(nextTestimoni, 6000);
        }

        function resetAutoTesti() {
            clearInterval(testiIntervalId);
            startAutoTesti();
        }

        const testimoniCarousel = document.querySelector('.testimoni-carousel');
        testimoniCarousel.addEventListener('mouseenter', () => clearInterval(testiIntervalId));
        testimoniCarousel.addEventListener('mouseleave', startAutoTesti);

        goToTestimoni(0);
        startAutoTesti();
    }

    // ============================================
    // CONTACT FORM
    // ============================================

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim. (Simulasi)');
            this.reset();
        });
    }

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================

    const fadeElements = document.querySelectorAll('.fade-up');
    const staggerElements = document.querySelectorAll('.stagger-child');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                staggerObserver.unobserve(entry.target);
            }
        });
    }, { ...observerOptions, threshold: 0.1 });

    staggerElements.forEach(el => staggerObserver.observe(el));
});