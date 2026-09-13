// ============================================
// BERITA — Data, Render, Filter Kategori, Pagination
// File: js/berita.js
// ============================================
// Digunakan di 4 halaman:
//   1. index.html         → highlight (3) + terbaru (5)
//   2. berita.html        → grid + filter kategori + pagination
//   3. detail-berita.html → detail berita via ?id=xxx
// ============================================

// ============================================
// 1. DATA KATEGORI (Master Kategori)
// ============================================
// 'semua' adalah pseudo-kategori untuk reset filter.
// Di backend nanti, ini jadi tabel `kategori_berita`.
// ============================================
const kategoriData = [
    { id: 'semua', nama: 'Semua', slug: 'semua' },
    { id: 1, nama: 'Kegiatan Yayasan', slug: 'kegiatan-yayasan' },
    { id: 2, nama: 'Prestasi Siswa', slug: 'prestasi-siswa' },
    { id: 3, nama: 'Pengumuman', slug: 'pengumuman' },
    { id: 4, nama: 'Prestasi Yayasan', slug: 'prestasi-yayasan' }
];

// ============================================
// 2. DATA BERITA (Dummy — Ganti dengan API)
// ============================================
// Field:
//   - id          : number (unique)
//   - title       : string
//   - categoryId  : number (FK ke kategoriData)
//   - date        : string (format bebas, nanti ISO date di backend)
//   - image       : string (URL / path upload)
//   - excerpt     : string (ringkasan singkat untuk card)
//   - isFeatured  : boolean (max 3 di sistem)
//   - content     : string (HTML lengkap)
// ============================================
const beritaData = [
    {
        id: 1,
        title: '[Judul Berita 01]',
        categoryId: 1,
        date: '[Tanggal 01]',
        image: 'https://picsum.photos/seed/news1/800/500',
        excerpt: '[Ringkasan singkat berita 01. Placeholder ini akan diganti dengan konten asli nantinya.]',
        isFeatured: true,
        content: `
            <p>Paragraf pertama dari berita 01. Di sini nanti akan diisi dengan konten berita yang sebenarnya.</p>
            <p>Paragraf kedua menjelaskan lebih detail tentang kegiatan atau informasi yang disampaikan.</p>
            <h2>Subjudul Berita 01</h2>
            <p>Paragraf ketiga dengan informasi tambahan yang relevan.</p>
            <ul>
                <li>Poin penting pertama</li>
                <li>Poin penting kedua</li>
                <li>Poin penting ketiga</li>
            </ul>
            <p>Paragraf penutup dari berita 01.</p>
        `
    },
    {
        id: 2,
        title: '[Judul Berita 02]',
        categoryId: 2,
        date: '[Tanggal 02]',
        image: 'https://picsum.photos/seed/news2/800/500',
        excerpt: '[Ringkasan singkat berita 02. Placeholder ini akan diganti dengan konten asli nantinya.]',
        isFeatured: true,
        content: `
            <p>Paragraf pertama dari berita 02. Konten ini bersifat placeholder.</p>
            <p>Paragraf kedua dengan informasi lebih lanjut.</p>
            <h2>Subjudul Berita 02</h2>
            <p>Paragraf ketiga dengan detail tambahan.</p>
            <p>Paragraf penutup dari berita 02.</p>
        `
    },
    {
        id: 3,
        title: '[Judul Berita 03]',
        categoryId: 3,
        date: '[Tanggal 03]',
        image: 'https://picsum.photos/seed/news3/800/500',
        excerpt: '[Ringkasan singkat berita 03. Placeholder ini akan diganti dengan konten asli nantinya.]',
        isFeatured: true,
        content: `
            <p>Paragraf pertama dari berita 03. Placeholder untuk konten berita.</p>
            <p>Paragraf kedua dengan informasi tambahan.</p>
            <h2>Subjudul Berita 03</h2>
            <p>Paragraf ketiga dengan detail lebih lanjut.</p>
            <p>Paragraf penutup dari berita 03.</p>
        `
    },
    {
        id: 4,
        title: '[Judul Berita 04]',
        categoryId: 1,
        date: '[Tanggal 04]',
        image: 'https://picsum.photos/seed/news4/800/500',
        excerpt: '[Ringkasan singkat berita 04. Placeholder ini akan diganti dengan konten asli nantinya.]',
        content: `
            <p>Paragraf pertama dari berita 04. Konten placeholder.</p>
            <p>Paragraf kedua dengan informasi lebih lanjut.</p>
            <h2>Subjudul Berita 04</h2>
            <p>Paragraf ketiga dengan detail tambahan.</p>
            <p>Paragraf penutup dari berita 04.</p>
        `
    },
    {
        id: 5,
        title: '[Judul Berita 05]',
        categoryId: 2,
        date: '[Tanggal 05]',
        image: 'https://picsum.photos/seed/news5/800/500',
        excerpt: '[Ringkasan singkat berita 05. Placeholder ini akan diganti dengan konten asli nantinya.]',
        content: `
            <p>Paragraf pertama dari berita 05. Placeholder untuk konten.</p>
            <p>Paragraf kedua dengan informasi tambahan.</p>
            <h2>Subjudul Berita 05</h2>
            <p>Paragraf ketiga dengan detail lebih lanjut.</p>
            <p>Paragraf penutup dari berita 05.</p>
        `
    },
    {
        id: 6,
        title: '[Judul Berita 06]',
        categoryId: 3,
        date: '[Tanggal 06]',
        image: 'https://picsum.photos/seed/news6/800/500',
        excerpt: '[Ringkasan singkat berita 06. Placeholder ini akan diganti dengan konten asli nantinya.]',
        content: `
            <p>Paragraf pertama dari berita 06. Konten placeholder.</p>
            <p>Paragraf kedua dengan informasi lebih lanjut.</p>
            <h2>Subjudul Berita 06</h2>
            <p>Paragraf ketiga dengan detail tambahan.</p>
            <p>Paragraf penutup dari berita 06.</p>
        `
    },
    {
        id: 7,
        title: '[Judul Berita 07]',
        categoryId: 1,
        date: '[Tanggal 07]',
        image: 'https://picsum.photos/seed/news7/800/500',
        excerpt: '[Ringkasan singkat berita 07. Placeholder ini akan diganti dengan konten asli nantinya.]',
        content: `
            <p>Paragraf pertama dari berita 07. Placeholder untuk konten.</p>
            <p>Paragraf kedua dengan informasi tambahan.</p>
            <h2>Subjudul Berita 07</h2>
            <p>Paragraf ketiga dengan detail lebih lanjut.</p>
            <p>Paragraf penutup dari berita 07.</p>
        `
    },
    {
        id: 8,
        title: '[Judul Berita 08]',
        categoryId: 2,
        date: '[Tanggal 08]',
        image: 'https://picsum.photos/seed/news8/800/500',
        excerpt: '[Ringkasan singkat berita 08. Placeholder ini akan diganti dengan konten asli nantinya.]',
        content: `
            <p>Paragraf pertama dari berita 08. Konten placeholder.</p>
            <p>Paragraf kedua dengan informasi lebih lanjut.</p>
            <h2>Subjudul Berita 08</h2>
            <p>Paragraf ketiga dengan detail tambahan.</p>
            <p>Paragraf penutup dari berita 08.</p>
        `
    },
    {
        id: 9,
        title: '[Judul Berita 09]',
        categoryId: 3,
        date: '[Tanggal 09]',
        image: 'https://picsum.photos/seed/news9/800/500',
        excerpt: '[Ringkasan singkat berita 09. Placeholder ini akan diganti dengan konten asli nantinya.]',
        content: `
            <p>Paragraf pertama dari berita 09. Placeholder untuk konten.</p>
            <p>Paragraf kedua dengan informasi tambahan.</p>
            <h2>Subjudul Berita 09</h2>
            <p>Paragraf ketiga dengan detail lebih lanjut.</p>
            <p>Paragraf penutup dari berita 09.</p>
        `
    },
    {
        id: 10,
        title: '[Judul Berita 10]',
        categoryId: 4,
        date: '[Tanggal 10]',
        image: 'https://picsum.photos/seed/news10/800/500',
        excerpt: '[Ringkasan singkat berita 10. Placeholder ini akan diganti dengan konten asli nantinya.]',
        content: `
            <p>Paragraf pertama dari berita 10. Konten placeholder.</p>
            <p>Paragraf kedua dengan informasi lebih lanjut.</p>
            <h2>Subjudul Berita 10</h2>
            <p>Paragraf ketiga dengan detail tambahan.</p>
            <p>Paragraf penutup dari berita 10.</p>
        `
    },
    {
        id: 11,
        title: '[Judul Berita 11]',
        categoryId: 4,
        date: '[Tanggal 11]',
        image: 'https://picsum.photos/seed/news11/800/500',
        excerpt: '[Ringkasan singkat berita 11. Placeholder ini akan diganti dengan konten asli nantinya.]',
        content: `
            <p>Paragraf pertama dari berita 11. Placeholder untuk konten.</p>
            <p>Paragraf kedua dengan informasi tambahan.</p>
            <h2>Subjudul Berita 11</h2>
            <p>Paragraf ketiga dengan detail lebih lanjut.</p>
            <p>Paragraf penutup dari berita 11.</p>
        `
    },
    {
        id: 12,
        title: '[Judul Berita 12]',
        categoryId: 4,
        date: '[Tanggal 12]',
        image: 'https://picsum.photos/seed/news12/800/500',
        excerpt: '[Ringkasan singkat berita 12. Placeholder ini akan diganti dengan konten asli nantinya.]',
        content: `
            <p>Paragraf pertama dari berita 12. Konten placeholder.</p>
            <p>Paragraf kedua dengan informasi lebih lanjut.</p>
            <h2>Subjudul Berita 12</h2>
            <p>Paragraf ketiga dengan detail tambahan.</p>
            <p>Paragraf penutup dari berita 12.</p>
        `
    }
];

// ============================================
// 3. KONFIGURASI
// ============================================
const BERITA_PER_HALAMAN = 9;         // Halaman berita.html — grid 3×3
const BERITA_TERBARU_BERANDA = 5;     // Beranda — 5 terbaru
const BERITA_HIGHLIGHT_BERANDA = 3;   // Beranda — 3 highlight (max)

// ============================================
// 4. HELPER: Kategori
// ============================================

// Ambil kategori dari URL (?kategori=xxx), default 'semua'
function getKategoriFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('kategori') || 'semua';
}

// Cari kategori berdasarkan id
function getKategoriById(id) {
    return kategoriData.find(k => k.id === id) || null;
}

// Cari kategori berdasarkan slug
function getKategoriBySlug(slug) {
    return kategoriData.find(k => k.slug === slug) || null;
}

// Filter berita berdasarkan slug kategori
function getBeritaByKategori(slug) {
    if (!slug || slug === 'semua') return beritaData;
    const kategori = getKategoriBySlug(slug);
    if (!kategori || kategori.id === 'semua') return beritaData;
    return beritaData.filter(b => b.categoryId === kategori.id);
}

// ============================================
// 5. HELPER: Berita untuk Beranda
// ============================================

function getFeaturedBerita() {
    return beritaData
        .filter(b => b.isFeatured === true)
        .slice(0, BERITA_HIGHLIGHT_BERANDA);
}

function getLatestBerita(count) {
    // Asumsi: id lebih besar = lebih baru
    // Nanti di backend, pakai published_at DESC
    return [...beritaData]
        .sort((a, b) => b.id - a.id)
        .slice(0, count);
}

// ============================================
// 6. RENDER CARD BERITA
// ============================================

function renderBeritaCard(berita) {
    const kategori = getKategoriById(berita.categoryId);
    const kategoriNama = kategori ? kategori.nama : 'Tanpa Kategori';

    return `
        <article class="news-card fade-up stagger-child">
            <div class="news-card-image">
                <img 
                    src="${berita.image}" 
                    alt="${berita.title}"
                    loading="lazy"
                />
            </div>
            <div class="news-card-content">
                <div class="news-meta">
                    <span class="news-category">${kategoriNama}</span>
                    <span class="news-date">${berita.date}</span>
                </div>
                <h3>${berita.title}</h3>
                <p>${berita.excerpt}</p>
                <a href="detail-berita.html?id=${berita.id}" class="btn-news">
                    Baca Selengkapnya <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </article>
    `;
}

// ============================================
// 7. RENDER UNTUK BERANDA (index.html)
// ============================================

function renderFeaturedBerita(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const featured = getFeaturedBerita();
    if (featured.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 40px;">Belum ada berita highlight.</p>';
        return;
    }

    container.innerHTML = featured.map(berita => renderBeritaCard(berita)).join('');

    setTimeout(() => {
        container.querySelectorAll('.fade-up, .stagger-child').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

function renderLatestBerita(containerId, count = BERITA_TERBARU_BERANDA) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const latest = getLatestBerita(count);
    if (latest.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 40px;">Belum ada berita.</p>';
        return;
    }

    container.innerHTML = latest.map(berita => renderBeritaCard(berita)).join('');

    setTimeout(() => {
        container.querySelectorAll('.fade-up, .stagger-child').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

// ============================================
// 8. RENDER FILTER KATEGORI (berita.html)
// ============================================

function renderKategoriFilter() {
    const container = document.getElementById('kategoriFilter');
    if (!container) return;

    const currentSlug = getKategoriFromURL();

    container.innerHTML = kategoriData.map(k => {
        const isActive = k.slug === currentSlug;
        return `
            <button 
                type="button"
                class="kategori-pill ${isActive ? 'active' : ''}" 
                data-slug="${k.slug}"
            >
                ${k.nama}
            </button>
        `;
    }).join('');
}

function initKategoriFilter() {
    const container = document.getElementById('kategoriFilter');
    if (!container) return;

    // Event delegation — aman meskipun innerHTML di-render ulang
    container.addEventListener('click', function (e) {
        const pill = e.target.closest('.kategori-pill');
        if (!pill) return;

        const slug = pill.dataset.slug;
        const currentSlug = getKategoriFromURL();

        // Kalau klik kategori yang sama → skip
        if (slug === currentSlug) return;

        // Update URL tanpa reload (pakai History API)
        const newUrl = slug === 'semua'
            ? 'berita.html'
            : `berita.html?kategori=${slug}`;
        history.pushState({ kategori: slug }, '', newUrl);

        // Re-render filter (update active) + grid
        renderKategoriFilter();
        renderNewsPage(1);

        // Smooth scroll ke atas section berita
        const section = document.querySelector('.news-page');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // Handle tombol back/forward browser
    window.addEventListener('popstate', function () {
        renderKategoriFilter();
        renderNewsPage(1);
    });
}

// ============================================
// 9. PAGINATION (berita.html)
// ============================================

function renderPagination(totalBerita, currentPage) {
    const totalHalaman = Math.ceil(totalBerita / BERITA_PER_HALAMAN);
    const paginationContainer = document.getElementById('pagination');

    if (!paginationContainer) return;

    if (totalHalaman <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    let html = '';

    // Previous
    html += `<button class="page-btn prev-btn" data-page="prev" ${currentPage === 1 ? 'disabled' : ''} aria-label="Halaman Sebelumnya">
        <i class="fas fa-chevron-left"></i>
    </button>`;

    // Nomor halaman
    for (let i = 1; i <= totalHalaman; i++) {
        const active = i === currentPage ? 'active' : '';
        if (i === 1 || i === totalHalaman || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `<button class="page-btn ${active}" data-page="${i}">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span class="page-dots">…</span>`;
        }
    }

    // Next
    html += `<button class="page-btn next-btn" data-page="next" ${currentPage === totalHalaman ? 'disabled' : ''} aria-label="Halaman Berikutnya">
        <i class="fas fa-chevron-right"></i>
    </button>`;

    paginationContainer.innerHTML = html;

    // Event listener
    paginationContainer.querySelectorAll('.page-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', function () {
            const page = this.dataset.page;
            let newPage = currentPage;

            if (page === 'prev') newPage = Math.max(1, currentPage - 1);
            else if (page === 'next') newPage = Math.min(totalHalaman, currentPage + 1);
            else newPage = parseInt(page);

            if (newPage !== currentPage) {
                renderNewsPage(newPage);
                document.querySelector('.news-page').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============================================
// 10. RENDER HALAMAN BERITA (berita.html)
// ============================================

function renderNewsPage(page = 1) {
    const grid = document.getElementById('newsGrid');
    if (!grid) return;

    const kategoriSlug = getKategoriFromURL();
    const filteredBerita = getBeritaByKategori(kategoriSlug);

    const start = (page - 1) * BERITA_PER_HALAMAN;
    const end = start + BERITA_PER_HALAMAN;
    const beritaHalaman = filteredBerita.slice(start, end);

    if (beritaHalaman.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-newspaper" style="font-size: 2.5rem; color: var(--gray-light); margin-bottom: 16px; display: block;"></i>
                <h3 style="color: var(--dark-green); margin-bottom: 8px;">Belum Ada Berita</h3>
                <p style="color: var(--gray-medium);">Belum ada berita di kategori ini.</p>
            </div>
        `;
        const paginationContainer = document.getElementById('pagination');
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }

    grid.innerHTML = beritaHalaman.map(berita => renderBeritaCard(berita)).join('');

    setTimeout(() => {
        document.querySelectorAll('.fade-up, .stagger-child').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);

    renderPagination(filteredBerita.length, page);
}

// ============================================
// 11. RENDER DETAIL BERITA (detail-berita.html)
// ============================================

function renderDetailBerita() {
    const wrapper = document.getElementById('detailWrapper');
    if (!wrapper) return;

    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const berita = beritaData.find(b => b.id === id);

    if (!berita) {
        wrapper.innerHTML = `
            <div class="detail-not-found">
                <h2>Berita tidak ditemukan</h2>
                <p>Maaf, berita yang Anda cari tidak tersedia.</p>
                <a href="berita.html" class="btn-primary">Kembali ke Berita</a>
            </div>
        `;
        return;
    }

    const kategori = getKategoriById(berita.categoryId);
    const kategoriNama = kategori ? kategori.nama : 'Tanpa Kategori';

    wrapper.innerHTML = `
        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <ol>
                <li><a href="index.html">Home</a></li>
                <li><span class="separator"><i class="fas fa-chevron-right"></i></span></li>
                <li><a href="berita.html">Semua Berita</a></li>
                <li><span class="separator"><i class="fas fa-chevron-right"></i></span></li>
                <li aria-current="page"><span class="current">${berita.title}</span></li>
            </ol>
        </nav>

        <!-- Meta -->
        <div class="detail-meta">
            <span class="detail-category">${kategoriNama}</span>
            <span class="detail-date">${berita.date}</span>
        </div>

        <!-- Judul -->
        <h1 class="detail-title">${berita.title}</h1>

        <!-- Gambar -->
        <div class="detail-image">
            <img src="${berita.image}" alt="${berita.title}" />
        </div>

        <!-- Konten -->
        <div class="detail-content">
            ${berita.content}
        </div>

        <!-- Tombol Kembali -->
        <div class="detail-back">
            <a href="berita.html" class="btn-news">
                <i class="fas fa-arrow-left"></i> Kembali ke Berita
            </a>
        </div>
    `;
}

// ============================================
// 12. INIT — Deteksi Halaman
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const isBeritaPage = document.getElementById('newsGrid') !== null;
    const isDetailPage = document.getElementById('detailWrapper') !== null;
    const isHomePage = document.getElementById('highlightContainer') !== null 
                    || document.getElementById('latestContainer') !== null;

    if (isBeritaPage) {
        // Halaman berita.html
        renderKategoriFilter();
        initKategoriFilter();
        renderNewsPage(1);
        console.log('Halaman Berita siap!');
    } else if (isDetailPage) {
        // Halaman detail-berita.html
        renderDetailBerita();
        console.log('Halaman Detail Berita siap!');
    } else if (isHomePage) {
        // Halaman index.html
        renderFeaturedBerita('highlightContainer');
        renderLatestBerita('latestContainer', BERITA_TERBARU_BERANDA);
        console.log('Halaman Utama — Berita dimuat!');
    }
});