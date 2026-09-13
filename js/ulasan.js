// ============================================
// ULASAN — Data, Render, Modal & Form Logic
// File: js/ulasan.js
// ============================================
// Digunakan di 3 halaman:
//   1. index.html         → carousel 5 ulasan featured
//   2. ulasan.html        → grid semua ulasan + pagination + modal
//   3. tulis-ulasan.html  → form submit ulasan
// ============================================

// ============================================
// 1. DATA DUMMY ULASAN (nanti diganti API)
// ============================================
const ulasanData = [
    {
        id: 1,
        nama: 'Ahmad Fauzi Rahman',
        email: 'ahmad.fauzi@email.com',
        peran: 'Alumni',
        rating: 5,
        komentar: 'Alhamdulillah, saya sangat bersyukur pernah menimba ilmu di yayasan ini. Para guru sangat perhatian dan ilmu yang diajarkan benar-benar bermanfaat hingga saya bisa melanjutkan pendidikan ke jenjang yang lebih tinggi.',
        foto: null,
        isFeatured: true,
        isApproved: true,
        tanggal: '2026-01-15'
    },
    {
        id: 2,
        nama: 'Siti Aminah',
        email: 'siti.aminah@email.com',
        peran: 'Orang Tua Siswa',
        rating: 5,
        komentar: 'Anak saya sangat senang sekolah di sini. Selain ilmu akademik, akhlak dan karakter anak juga terbentuk dengan baik. Terima kasih Yayasan At Thoyyibun.',
        foto: null,
        isFeatured: true,
        isApproved: true,
        tanggal: '2026-01-20'
    },
    {
        id: 3,
        nama: 'Muhammad Rizki',
        email: 'rizki.m@email.com',
        peran: 'Murid',
        rating: 5,
        komentar: 'Belajar di sini menyenangkan. Guru-gurunya ramah, fasilitasnya lengkap, dan saya punya banyak teman yang baik.',
        foto: null,
        isFeatured: true,
        isApproved: true,
        tanggal: '2026-01-25'
    },
    {
        id: 4,
        nama: 'Hj. Nur Hidayah',
        email: 'nur.hidayah@email.com',
        peran: 'Masyarakat Umum',
        rating: 5,
        komentar: 'Sebagai warga sekitar, saya melihat langsung kontribusi positif yayasan ini untuk masyarakat. Kegiatan sosialnya sangat aktif dan bermanfaat.',
        foto: null,
        isFeatured: true,
        isApproved: true,
        tanggal: '2026-02-01'
    },
    {
        id: 5,
        nama: 'Abdul Karim',
        email: 'abdul.karim@email.com',
        peran: 'Alumni',
        rating: 5,
        komentar: 'Yayasan ini adalah tempat terbaik untuk membentuk karakter generasi muda. Saya bangga pernah menjadi bagian dari sini.',
        foto: null,
        isFeatured: true,
        isApproved: true,
        tanggal: '2026-02-05'
    },
    {
        id: 6,
        nama: 'Fatimah Zahra',
        email: 'fatimah.z@email.com',
        peran: 'Orang Tua Siswa',
        rating: 4,
        komentar: 'Kualitas pendidikan bagus. Hanya saja mungkin perlu tambahan kegiatan ekstrakurikuler agar anak lebih berkembang.',
        foto: null,
        isFeatured: false,
        isApproved: true,
        tanggal: '2026-02-10'
    },
    {
        id: 7,
        nama: 'Hasan Basri',
        email: 'hasan.basri@email.com',
        peran: 'Masyarakat Umum',
        rating: 5,
        komentar: 'Program sosial yayasan sangat membantu warga kurang mampu. Semoga terus berjalan dan semakin sukses.',
        foto: null,
        isFeatured: false,
        isApproved: true,
        tanggal: '2026-02-12'
    },
    {
        id: 8,
        nama: 'Aisyah Putri',
        email: 'aisyah.p@email.com',
        peran: 'Murid',
        rating: 5,
        komentar: 'Sekolah favorit saya! Guru-gurunya sabar dan menyenangkan dalam mengajar.',
        foto: null,
        isFeatured: false,
        isApproved: true,
        tanggal: '2026-02-15'
    },
    {
        id: 9,
        nama: 'Umar Abdullah',
        email: 'umar.a@email.com',
        peran: 'Alumni',
        rating: 5,
        komentar: 'Terima kasih atas semua ilmu dan bimbingan. Semoga yayasan semakin maju dan berkah.',
        foto: null,
        isFeatured: false,
        isApproved: true,
        tanggal: '2026-02-18'
    },
    {
        id: 10,
        nama: 'Khadijah Salsabila',
        email: 'khadijah.s@email.com',
        peran: 'Orang Tua Siswa',
        rating: 5,
        komentar: 'Lingkungan belajar yang islami dan nyaman. Anak saya jadi lebih rajin sholat dan mengaji.',
        foto: null,
        isFeatured: false,
        isApproved: true,
        tanggal: '2026-02-20'
    },
    {
        id: 11,
        nama: 'Yusuf Maulana',
        email: 'yusuf.m@email.com',
        peran: 'Masyarakat Umum',
        rating: 4,
        komentar: 'Semoga yayasan terus berkembang dan bisa menampung lebih banyak siswa berprestasi.',
        foto: null,
        isFeatured: false,
        isApproved: true,
        tanggal: '2026-02-22'
    },
    {
        id: 12,
        nama: 'Maryam Hanifah',
        email: 'maryam.h@email.com',
        peran: 'Murid',
        rating: 5,
        komentar: 'Senang bisa sekolah di sini. Banyak kegiatan bermanfaat dan pelajaran yang menyenangkan.',
        foto: null,
        isFeatured: false,
        isApproved: true,
        tanggal: '2026-02-25'
    },
    {
        id: 13,
        nama: 'Ibrahim Khalil',
        email: 'ibrahim.k@email.com',
        peran: 'Alumni',
        rating: 5,
        komentar: 'Alumni di sini selalu diingat dan dibimbing. Saya sangat menghargai itu.',
        foto: null,
        isFeatured: false,
        isApproved: true,
        tanggal: '2026-03-01'
    },
    {
        id: 14,
        nama: 'Zainab Fauziah',
        email: 'zainab.f@email.com',
        peran: 'Orang Tua Siswa',
        rating: 5,
        komentar: 'Pendidikan agama dan umum seimbang. Anak saya tumbuh menjadi pribadi yang lebih baik.',
        foto: null,
        isFeatured: false,
        isApproved: true,
        tanggal: '2026-03-05'
    },
    {
        id: 15,
        nama: 'Salman Alfarisi',
        email: 'salman.a@email.com',
        peran: 'Murid',
        rating: 5,
        komentar: 'Belajar di sini seru! Banyak kegiatan positif dan guru-gurunya keren.',
        foto: null,
        isFeatured: false,
        isApproved: true,
        tanggal: '2026-03-08'
    }
];

// ============================================
// 2. KONFIGURASI
// ============================================
const ULASAN_PER_HALAMAN = 12;
const ULASAN_FEATURED_HOMEPAGE = 5;

// ============================================
// 3. HELPER FUNCTIONS
// ============================================

// Ambil inisial nama (max 2 huruf)
function getInitials(nama) {
    if (!nama) return '?';
    const words = nama.trim().split(/\s+/);
    if (words.length === 1) {
        return words[0].substring(0, 2).toUpperCase();
    }
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

// Format tanggal: "2026-01-15" → "15 Januari 2026"
function formatTanggal(dateStr) {
    const bulan = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return `${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`;
}

// Render bintang HTML
function renderBintang(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += i <= rating
            ? '<i class="fas fa-star"></i>'
            : '<i class="far fa-star"></i>';
    }
    return html;
}

// Render avatar (foto atau inisial)
function renderAvatar(ulasan, size = 'normal') {
    const initials = getInitials(ulasan.nama);
    if (ulasan.foto) {
        return `<img src="${ulasan.foto}" alt="${ulasan.nama}" />`;
    }
    return `<span class="${size === 'modal' ? 'ulasan-modal-initials' : 'ulasan-avatar-initials'}">${initials}</span>`;
}

// Ambil ulasan approved + featured untuk homepage
function getFeaturedUlasan() {
    return ulasanData
        .filter(u => u.isApproved && u.isFeatured)
        .slice(0, ULASAN_FEATURED_HOMEPAGE);
}

// Ambil semua ulasan approved untuk halaman ulasan
function getAllApprovedUlasan() {
    return ulasanData.filter(u => u.isApproved === true);
}

// ============================================
// 4. RENDER CARD ULASAN (untuk grid ulasan.html)
// ============================================
function renderUlasanCard(ulasan) {
    return `
        <div class="ulasan-card" data-id="${ulasan.id}">
            <div class="ulasan-card-header">
                <div class="ulasan-avatar">
                    ${renderAvatar(ulasan)}
                </div>
                <div class="ulasan-card-meta">
                    <h4>${ulasan.nama}</h4>
                    <span class="peran">${ulasan.peran}</span>
                </div>
            </div>
            <div class="bintang">${renderBintang(ulasan.rating)}</div>
            <p class="komentar">"${ulasan.komentar}"</p>
            <div class="ulasan-card-footer">
                <span class="tanggal">
                    <i class="far fa-calendar"></i> ${formatTanggal(ulasan.tanggal)}
                </span>
                <button class="btn-ulasan" data-id="${ulasan.id}" type="button">
                    <i class="fas fa-book-open"></i> Ulasan
                </button>
            </div>
        </div>
    `;
}

// ============================================
// 5. RENDER CAROUSEL DI HOMEPAGE (index.html)
// ============================================
function renderUlasanHomepage() {
    const track = document.getElementById('ulasanTrack');
    if (!track) return;

    const featured = getFeaturedUlasan();
    if (featured.length === 0) {
        track.innerHTML = '<p style="text-align: center; width: 100%;">Belum ada ulasan.</p>';
        return;
    }

    track.innerHTML = featured.map(u => `
        <div class="testimoni-item">
            <div class="testimoni-card">
                <div class="avatar-wrapper">
                    ${renderAvatar(u)}
                </div>
                <h4>${u.nama}</h4>
                <span class="peran">${u.peran}</span>
                <div class="bintang">${renderBintang(u.rating)}</div>
                <p>"${u.komentar}"</p>
            </div>
        </div>
    `).join('');

    // Inisialisasi carousel (auto-slide infinite)
    initHomepageCarousel(track);
}

function initHomepageCarousel(track) {
    const items = track.querySelectorAll('.testimoni-item');
    const TOTAL = items.length;
    const INTERVAL = 4000;
    let index = 0;
    let intervalId = null;

    function goTo(i) {
        if (!items[i]) return;
        const carousel = track.parentElement;
        const carouselWidth = carousel.offsetWidth;
        const item = items[i];
        const itemWidth = item.offsetWidth;
        const itemCenter = item.offsetLeft + itemWidth / 2;
        const carouselCenter = carouselWidth / 2;
        const offset = -(itemCenter - carouselCenter);
        track.style.transform = `translateX(${offset}px)`;
        items.forEach((it, idx) => it.classList.toggle('active', idx === i));
        index = i;
    }

    function next() {
        goTo((index + 1) % TOTAL);
    }

    function start() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(next, INTERVAL);
    }

    function stop() {
        if (intervalId) clearInterval(intervalId);
    }

    const carousel = track.parentElement;
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => goTo(index), 200);
    });

    goTo(0);
    start();
}

// ============================================
// 6. RENDER GRID DI HALAMAN ulasan.html
// ============================================
function renderUlasanPage(page = 1) {
    const grid = document.getElementById('ulasanGrid');
    if (!grid) return;

    const allUlasan = getAllApprovedUlasan();
    const totalHalaman = Math.ceil(allUlasan.length / ULASAN_PER_HALAMAN);
    const start = (page - 1) * ULASAN_PER_HALAMAN;
    const end = start + ULASAN_PER_HALAMAN;
    const ulasanHalaman = allUlasan.slice(start, end);

    if (ulasanHalaman.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 40px;">Belum ada ulasan.</p>';
        return;
    }

    grid.innerHTML = ulasanHalaman.map(u => renderUlasanCard(u)).join('');

    renderUlasanPagination(allUlasan.length, page);

    // Pasang listener ke tombol "Ulasan" (buka modal)
    grid.querySelectorAll('.btn-ulasan').forEach(btn => {
        btn.addEventListener('click', function () {
            const id = parseInt(this.dataset.id);
            openUlasanModal(id);
        });
    });
}

function renderUlasanPagination(total, currentPage) {
    const container = document.getElementById('ulasanPagination');
    if (!container) return;

    const totalHalaman = Math.ceil(total / ULASAN_PER_HALAMAN);
    if (totalHalaman <= 1) {
        container.innerHTML = '';
        return;
    }

    let html = '';
    html += `<button class="page-btn prev-btn" data-page="prev" ${currentPage === 1 ? 'disabled' : ''} aria-label="Sebelumnya">
        <i class="fas fa-chevron-left"></i>
    </button>`;

    for (let i = 1; i <= totalHalaman; i++) {
        const active = i === currentPage ? 'active' : '';
        if (i === 1 || i === totalHalaman || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `<button class="page-btn ${active}" data-page="${i}">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span class="page-dots">…</span>`;
        }
    }

    html += `<button class="page-btn next-btn" data-page="next" ${currentPage === totalHalaman ? 'disabled' : ''} aria-label="Berikutnya">
        <i class="fas fa-chevron-right"></i>
    </button>`;

    container.innerHTML = html;

    container.querySelectorAll('.page-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', function () {
            const page = this.dataset.page;
            let newPage = currentPage;
            if (page === 'prev') newPage = Math.max(1, currentPage - 1);
            else if (page === 'next') newPage = Math.min(totalHalaman, currentPage + 1);
            else newPage = parseInt(page);

            if (newPage !== currentPage) {
                renderUlasanPage(newPage);
                document.querySelector('.ulasan-page-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============================================
// 7. MODAL POPUP DETAIL ULASAN
// ============================================
function openUlasanModal(id) {
    const overlay = document.getElementById('ulasanModalOverlay');
    const content = document.getElementById('ulasanModalContent');
    if (!overlay || !content) return;

    const ulasan = ulasanData.find(u => u.id === id);
    if (!ulasan) return;

    content.innerHTML = `
        <div class="ulasan-modal-avatar">
            ${renderAvatar(ulasan, 'modal')}
        </div>
        <h3>${ulasan.nama}</h3>
        <span class="ulasan-modal-peran">${ulasan.peran}</span>
        <div class="ulasan-modal-bintang">${renderBintang(ulasan.rating)}</div>
        <div class="ulasan-modal-divider"></div>
        <p class="ulasan-modal-komentar">"${ulasan.komentar}"</p>
        <span class="ulasan-modal-tanggal">
            <i class="far fa-calendar"></i> ${formatTanggal(ulasan.tanggal)}
        </span>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeUlasanModal() {
    const overlay = document.getElementById('ulasanModalOverlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function initUlasanModal() {
    const overlay = document.getElementById('ulasanModalOverlay');
    const closeBtn = document.getElementById('ulasanModalClose');
    if (!overlay) return;

    // Klik tombol close
    if (closeBtn) {
        closeBtn.addEventListener('click', closeUlasanModal);
    }

    // Klik overlay (luar modal) → tutup
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeUlasanModal();
    });

    // Tekan ESC → tutup
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeUlasanModal();
        }
    });
}

// ============================================
// 8. FORM TULIS ULASAN (tulis-ulasan.html)
// ============================================
function initFormTulisUlasan() {
    const form = document.getElementById('formTulisUlasan');
    if (!form) return;

    // --- Star Rating Input ---
    const stars = document.querySelectorAll('#starRatingInput i');
    const ratingInput = document.getElementById('rating');

    stars.forEach(star => {
        star.addEventListener('mouseenter', function () {
            const val = parseInt(this.dataset.rating);
            stars.forEach((s, i) => {
                s.classList.toggle('hover', i < val);
            });
        });

        star.addEventListener('mouseleave', function () {
            stars.forEach(s => s.classList.remove('hover'));
        });

        star.addEventListener('click', function () {
            const val = parseInt(this.dataset.rating);
            ratingInput.value = val;
            stars.forEach((s, i) => {
                s.classList.toggle('active', i < val);
                if (i < val) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
            clearError('errorRating');
        });
    });

    // --- Upload Preview ---
    const fotoInput = document.getElementById('foto');
    const uploadPreview = document.getElementById('uploadPreview');

    if (uploadPreview) {
        uploadPreview.addEventListener('click', () => fotoInput.click());
    }

    if (fotoInput) {
        fotoInput.addEventListener('change', function () {
            const file = this.files[0];
            if (!file) return;

            // Validasi ukuran max 2MB
            if (file.size > 2 * 1024 * 1024) {
                showError('errorFoto', 'Ukuran file maksimal 2MB.');
                this.value = '';
                return;
            }

            // Validasi tipe
            if (!file.type.startsWith('image/')) {
                showError('errorFoto', 'File harus berupa gambar (JPG/PNG).');
                this.value = '';
                return;
            }

            // Preview
            const reader = new FileReader();
            reader.onload = function (e) {
                uploadPreview.classList.add('has-image');
                uploadPreview.innerHTML = `<img src="${e.target.result}" alt="Preview" />`;
                clearError('errorFoto');
            };
            reader.readAsDataURL(file);
        });
    }

    // --- Character Counter ---
    const komentarInput = document.getElementById('komentar');
    const charCount = document.getElementById('charCount');

    if (komentarInput && charCount) {
        komentarInput.addEventListener('input', function () {
            const len = this.value.length;
            charCount.textContent = len;
            charCount.parentElement.classList.toggle('warning', len > 900);
        });
    }

    // --- Submit Handler ---
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset error
        clearAllErrors();

        // Validasi
        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const peran = document.getElementById('peran').value;
        const rating = parseInt(ratingInput.value);
        const komentar = komentarInput.value.trim();

        let isValid = true;

        if (nama.length < 3) {
            showError('errorNama', 'Nama minimal 3 karakter.');
            isValid = false;
        }

        if (!isValidEmail(email)) {
            showError('errorEmail', 'Format email tidak valid.');
            isValid = false;
        }

        // Cek duplikat email
        if (isEmailAlreadyUsed(email)) {
            showError('errorEmail', 'Email ini sudah pernah mengirim ulasan.');
            isValid = false;
        }

        if (!peran) {
            showError('errorPeran', 'Silakan pilih peran Anda.');
            isValid = false;
        }

        if (rating < 1 || rating > 5) {
            showError('errorRating', 'Silakan beri rating bintang.');
            isValid = false;
        }

        if (komentar.length < 20) {
            showError('errorKomentar', 'Ulasan minimal 20 karakter.');
            isValid = false;
        }

        if (komentar.length > 1000) {
            showError('errorKomentar', 'Ulasan maksimal 1000 karakter.');
            isValid = false;
        }

        // Cek reCAPTCHA
        if (typeof grecaptcha !== 'undefined') {
            const captchaResponse = grecaptcha.getResponse();
            if (!captchaResponse) {
                showError('errorCaptcha', 'Silakan centang "I\'m not a robot".');
                isValid = false;
            }
        }

        if (!isValid) {
            // Scroll ke error pertama
            const firstError = form.querySelector('.form-group.has-error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // === SIMULASI SUBMIT ===
        // Nanti diganti dengan fetch ke API Laravel
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';

        setTimeout(() => {
            alert('Terima kasih!\n\nUlasan Anda telah diterima dan akan ditinjau oleh admin sebelum ditampilkan.\n\n(Simulasi — nanti akan terhubung ke backend)');
            window.location.href = 'ulasan.html';
        }, 1500);
    });

    // --- Helper Error ---
    function showError(id, msg) {
        const el = document.getElementById(id);
        if (!el) return;
        el.textContent = msg;
        el.classList.add('show');
        el.closest('.form-group').classList.add('has-error');
    }

    function clearError(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.textContent = '';
        el.classList.remove('show');
        el.closest('.form-group').classList.remove('has-error');
    }

    function clearAllErrors() {
        form.querySelectorAll('.form-error').forEach(el => {
            el.textContent = '';
            el.classList.remove('show');
        });
        form.querySelectorAll('.form-group').forEach(el => {
            el.classList.remove('has-error');
        });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isEmailAlreadyUsed(email) {
        // Cek di data dummy + (nanti) API
        return ulasanData.some(u => u.email.toLowerCase() === email.toLowerCase());
    }
}

// ============================================
// 9. INIT — Deteksi Halaman
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    // Halaman index.html
    const isHomepage = document.getElementById('ulasanTrack') !== null;
    if (isHomepage) {
        renderUlasanHomepage();
        console.log('Ulasan homepage loaded!');
    }

    // Halaman ulasan.html
    const isUlasanPage = document.getElementById('ulasanGrid') !== null;
    if (isUlasanPage) {
        renderUlasanPage(1);
        initUlasanModal();
        console.log('Halaman Ulasan loaded!');
    }

    // Halaman tulis-ulasan.html
    const isTulisPage = document.getElementById('formTulisUlasan') !== null;
    if (isTulisPage) {
        initFormTulisUlasan();
        console.log('Form Tulis Ulasan loaded!');
    }
});