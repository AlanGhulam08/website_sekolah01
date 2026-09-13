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
// Versi 2 — Handle query string dengan benar
// ============================================
document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // HELPER: Normalisasi URL jadi path lengkap + query
    // Contoh: "struktur-organisasi.html?unit=smp"
    // ============================================
    function getCurrentFullPath() {
        // Ambil pathname + search (query string), tanpa hash
        return window.location.pathname + window.location.search;
    }

    // ============================================
    // HELPER: Resolve href relatif jadi full path
    // Contoh: href="struktur-organisasi.html?unit=ma"
    //         → "/folder/struktur-organisasi.html?unit=ma"
    // ============================================
    function resolveHrefToFullPath(href) {
        // Buang hash dulu (kita tidak peduli anchor untuk bandingkan)
        const hrefWithoutHash = href.split('#')[0];
        if (hrefWithoutHash === '') return null; // link anchor murni (#section)

        try {
            // Pakai URL API untuk resolve relatif ke absolut
            const url = new URL(hrefWithoutHash, window.location.href);
            return url.pathname + url.search;
        } catch (e) {
            return null;
        }
    }

    // ============================================
    // HELPER: Cek apakah link adalah navigasi internal antar-halaman
    // Return TRUE = butuh page transition
    // Return FALSE = skip (anchor, mail, external, atau halaman yang sama)
    // ============================================
    function isInternalNavigation(href) {
        if (!href) return false;

        // Skip anchor murni di halaman yang sama (#section)
        if (href.startsWith('#')) return false;

        // Skip protokol khusus
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

        // Resolve href ke full path (pathname + search)
        const targetPath = resolveHrefToFullPath(href);
        if (!targetPath) return false;

        const currentPath = getCurrentFullPath();

        // ============================================
        // PERBANDINGAN URL LENGKAP (path + query)
        // ============================================
        // Kunci perbaikan: bandingkan pathname + search, bukan hanya pathname.
        //
        // Contoh:
        // - Current: /struktur-organisasi.html?unit=smp
        // - Target:  /struktur-organisasi.html?unit=ma
        //   → BEDA (query beda) → return true → page transition jalan ✅
        //
        // - Current: /struktur-organisasi.html
        // - Target:  /struktur-organisasi.html
        //   → SAMA → return false → skip transition (biar reload biasa)
        //
        // Catatan: kalau kamu ingin klik link ke halaman yang sama
        // tetap trigger reload dengan animasi, ubah jadi `return true`
        // di kondisi ini. Tapi saat ini kita skip agar tidak reload
        // halaman yang sedang dibuka (UX lebih baik).
        // ============================================
        if (targetPath === currentPath) {
            return false;
        }

        return true;
    }

    // ============================================
    // PASANG LISTENER KE SEMUA LINK
    // ============================================
    document.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener('click', function (e) {
            if (e.defaultPrevented) return;
            if (e.button !== 0) return;                                     // bukan klik kiri
            if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;   // buka tab baru
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

    // ============================================
    // TANGANI TOMBOL "BACK" BROWSER (bfcache restore)
    // ============================================
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