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
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const parentLi = this.parentElement;
                dropdownParents.forEach(other => {
                    if (other !== this) {
                        other.parentElement.classList.remove('open');
                    }
                });
                parentLi.classList.toggle('open');
            }
        });
    });

    // --- 3. Tutup menu saat link diklik ---
    links.forEach(link => {
        link.addEventListener('click', function () {
            // Skip jika link adalah dropbtn → biarkan listener dropdown yang handle
            if (this.classList.contains('dropbtn')) return;

            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
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

    // --- 6. Tutup menu otomatis saat layar di-resize ke desktop ---
    window.addEventListener('resize', function () {
        if (window.innerWidth > 992) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            dropdownParents.forEach(parent => {
                parent.parentElement.classList.remove('open');
            });
        }
    });

    // ============================================
    // HERO CAROUSEL (Dengan Pengaman)
    // ============================================
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById('dotsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Hanya jalankan carousel jika elemen tersedia
    if (slides.length > 0 && dotsContainer && prevBtn && nextBtn) {
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
    }

    // ============================================
    // TESTIMONI CAROUSEL (Auto-slide Infinite + Floating Glass)
    // ============================================
    const testiTrack = document.getElementById('testimoniTrack');

    if (testiTrack) {
        const testiItems = testiTrack.querySelectorAll('.testimoni-item');
        const TOTAL = testiItems.length;
        const INTERVAL = 3000; // 3 detik per card
        let testiIndex = 0;
        let testiIntervalId = null;

        function goToTestimoni(index) {
            if (!testiItems[index]) return;

            const carousel = testiTrack.parentElement;
            const carouselWidth = carousel.offsetWidth;
            const item = testiItems[index];
            const itemWidth = item.offsetWidth;
            const itemCenter = item.offsetLeft + itemWidth / 2;
            const carouselCenter = carouselWidth / 2;
            const offset = -(itemCenter - carouselCenter);

            testiTrack.style.transform = `translateX(${offset}px)`;

            // Tandai card aktif
            testiItems.forEach((it, i) => {
                it.classList.toggle('active', i === index);
            });

            testiIndex = index;
        }

        function nextTestimoni() {
            // Infinite loop: setelah card terakhir → kembali ke card pertama
            const next = (testiIndex + 1) % TOTAL;
            goToTestimoni(next);
        }

        function startAutoTesti() {
            if (testiIntervalId) clearInterval(testiIntervalId);
            testiIntervalId = setInterval(nextTestimoni, INTERVAL);
        }

        function stopAutoTesti() {
            if (testiIntervalId) {
                clearInterval(testiIntervalId);
                testiIntervalId = null;
            }
        }

        // Pause saat hover
        const carouselEl = testiTrack.parentElement;
        carouselEl.addEventListener('mouseenter', stopAutoTesti);
        carouselEl.addEventListener('mouseleave', startAutoTesti);

        // Recalculate posisi saat resize
        let testiResizeTimer;
        window.addEventListener('resize', function () {
            clearTimeout(testiResizeTimer);
            testiResizeTimer = setTimeout(() => {
                goToTestimoni(testiIndex);
            }, 200);
        });

        // Init
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

// ============================================
// PAGE TRANSITION (SMOOTH NAVIGATION)
// Tambahan - tidak mengubah logic yang ada
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const currentFile = (window.location.pathname.split('/').pop() || 'index.html')
        .split('?')[0];

    // Cek apakah link adalah navigasi internal antar-halaman
    function isInternalNavigation(href) {
        if (!href) return false;
        if (href.startsWith('#')) return false;                // anchor di halaman yang sama
        if (href.startsWith('mailto:')) return false;
        if (href.startsWith('tel:')) return false;
        if (href.startsWith('javascript:')) return false;

        // URL eksternal → skip
        if (/^https?:\/\//i.test(href)) {
            try {
                const url = new URL(href);
                if (url.origin !== window.location.origin) return false;
            } catch (e) {
                return false;
            }
        }

        // Link ke halaman yang sama → skip (biar anchor internal tetap smooth)
        const [path] = href.split('#');
        if (path === '' || path === currentFile) return false;

        return true;
    }

    // Pasang listener ke semua link
    document.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener('click', function (e) {
            if (e.defaultPrevented) return;
            if (e.button !== 0) return;                         // bukan klik kiri
            if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return; // buka tab baru
            if (link.target === '_blank') return;
            if (link.hasAttribute('download')) return;

            const href = link.getAttribute('href');
            if (!isInternalNavigation(href)) return;

            e.preventDefault();
            document.body.classList.add('page-exit');

            // Tunggu animasi keluar selesai (300ms), lalu navigasi
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });

    // Tangani tombol "Back" browser (bfcache restore)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            document.body.classList.remove('page-exit');
            // Replay animasi masuk
            document.body.style.animation = 'none';
            void document.body.offsetHeight; // paksa reflow
            document.body.style.animation = '';
        }
    });
});