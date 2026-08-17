// ============================================
// NAVBAR & MOBILE MENU
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = navLinks.querySelectorAll('a');

    // --- 1. Toggle hamburger ---
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // --- 2. Tutup menu saat link diklik ---
    links.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    // --- 3. Tutup menu klik di luar ---
    document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        }
    });

    // --- 4. Efek scroll navbar ---
    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ============================================
    // CAROUSEL
    // ============================================

    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById('dotsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    let intervalId = null;
    const AUTO_INTERVAL = 5000; // 5 detik

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

    // --- Fungsi pindah slide ---
    function goToSlide(index) {
        // Hapus active dari semua slide & dot
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Set active
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    // --- Next / Prev ---
    function nextSlide() {
        const next = (currentIndex + 1) % slides.length;
        goToSlide(next);
    }

    function prevSlide() {
        const prev = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(prev);
    }

    nextBtn.addEventListener('click', function () {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', function () {
        prevSlide();
        resetAutoSlide();
    });

    // --- Auto slide ---
    function startAutoSlide() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(nextSlide, AUTO_INTERVAL);
    }

    function resetAutoSlide() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        startAutoSlide();
    }

    // Hentikan auto slide saat hover (opsional)
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', function () {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    });
    carousel.addEventListener('mouseleave', startAutoSlide);

    // --- Inisialisasi ---
    goToSlide(0);
    startAutoSlide();

    // ============================================
    // CONTACT FORM (frontend only)
    // ============================================

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim. (Simulasi frontend)');
            this.reset();
        });
    }

    // ============================================
    // SCROLL ANIMATIONS (Intersection Observer)
    // ============================================

    // Pilih semua elemen yang akan dianimasi
    const fadeElements = document.querySelectorAll('.fade-up');
    const staggerElements = document.querySelectorAll('.stagger-child');

    // Konfigurasi observer
    const observerOptions = {
        threshold: 0.15, // 15% elemen terlihat baru trigger
        rootMargin: '0px 0px -50px 0px' // sedikit offset agar lebih smooth
    };

    // Observer untuk fade-up
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing setelah muncul agar performa lebih baik
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });

    // Observer untuk stagger-child
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                staggerObserver.unobserve(entry.target);
            }
        });
    }, { ...observerOptions, threshold: 0.1 });

    staggerElements.forEach(el => {
        staggerObserver.observe(el);
    });

    console.log('Navbar, Carousel, Contact Form, & Animations siap!');
});