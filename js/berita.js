// ============================================
// DATA BERITA (12 placeholder)
// ============================================

const beritaData = [
    {
        id: 1,
        title: '[Judul Berita 01]',
        category: '[Kegiatan Yayasan]',
        date: '[Tanggal 01]',
        image: 'https://picsum.photos/seed/news1/800/500',
        excerpt: '[Ringkasan singkat berita 01. Placeholder ini akan diganti dengan konten asli nantinya.]',
        isFeatured: true, // Penanda berita highlight
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
        category: '[Kegiatan Yayasan]',
        date: '[Tanggal 02]',
        image: 'https://picsum.photos/seed/news2/800/500',
        excerpt: '[Ringkasan singkat berita 02. Placeholder ini akan diganti dengan konten asli nantinya.]',
        isFeatured: true, // Penanda berita highlight
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
        category: '[Kegiatan Yayasan]',
        date: '[Tanggal 03]',
        image: 'https://picsum.photos/seed/news3/800/500',
        excerpt: '[Ringkasan singkat berita 03. Placeholder ini akan diganti dengan konten asli nantinya.]',
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
        category: '[Kegiatan Yayasan]',
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
        category: '[Kegiatan Yayasan]',
        date: '[Tanggal 05]',
        image: 'https://picsum.photos/seed/news5/800/500',
        excerpt: '[Ringkasan singkat berita 05. Placeholder ini akan diganti dengan konten asli nantinya.]',
        isFeatured: true, // Penanda berita highlight
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
        category: '[Kegiatan Yayasan]',
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
        category: '[Kegiatan Yayasan]',
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
        category: '[Kegiatan Yayasan]',
        date: '[Tanggal 08]',
        image: 'https://picsum.photos/seed/news8/800/500',
        excerpt: '[Ringkasan singkat berita 08. Placeholder ini akan diganti dengan konten asli nantinya.]',
        // PERUBAHAN: Properti isFeatured dihapus agar hanya 3 berita yang tampil di highlight
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
        category: '[Kegiatan Yayasan]',
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
        category: '[Kegiatan Yayasan]',
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
        category: '[Kegiatan Yayasan]',
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
        category: '[Kegiatan Yayasan]',
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
// VARIABLES
// ============================================

const BERITA_PER_HALAMAN = 6;

// ============================================
// FUNGSI HELPER (Untuk Index.html)
// ============================================

function getFeaturedBerita() {
    return beritaData.filter(berita => berita.isFeatured === true);
}

function getLatestBerita(count) {
    return [...beritaData].slice(0, count);
}

// Render berita highlight ke container
function renderFeaturedBerita(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const featured = getFeaturedBerita();
    container.innerHTML = featured.map(berita => renderBeritaCard(berita)).join('');
    
    // PERBAIKAN: Tambahkan class visible agar animasi muncul
    setTimeout(() => {
        container.querySelectorAll('.fade-up, .stagger-child').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

// Render berita terbaru ke container
function renderLatestBerita(containerId, count = 6) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const latest = getLatestBerita(count);
    container.innerHTML = latest.map(berita => renderBeritaCard(berita)).join('');
    
    // PERBAIKAN: Tambahkan class visible agar animasi muncul
    setTimeout(() => {
        container.querySelectorAll('.fade-up, .stagger-child').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

// ============================================
// FUNGSI RENDER CARD BERITA
// ============================================

function renderBeritaCard(berita) {
    return `
        <article class="news-card fade-up stagger-child">
            <div class="news-card-image">
                <img 
                    src="${berita.image}" 
                    alt="${berita.title}"
                />
            </div>
            <div class="news-card-content">
                <div class="news-meta">
                    <span class="news-category">${berita.category}</span>
                    <span class="news-date">${berita.date}</span>
                </div>
                <h3>${berita.title}</h3>
                <p>${berita.excerpt}</p>
                <a href="detail-berita.html?id=${berita.id}" class="btn-news">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
            </div>
        </article>
    `;
}

// ============================================
// FUNGSI PAGINATION (Untuk berita.html)
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
    
    // Tombol Previous
    html += `<button class="page-btn prev-btn" data-page="prev" ${currentPage === 1 ? 'disabled' : ''} aria-label="Halaman Sebelumnya">
        <i class="fas fa-chevron-left"></i>
    </button>`;

    // Tombol halaman
    for (let i = 1; i <= totalHalaman; i++) {
        const active = i === currentPage ? 'active' : '';
        
        // Tampilkan halaman pertama, terakhir, dan sekitar halaman aktif
        if (i === 1 || i === totalHalaman || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `<button class="page-btn ${active}" data-page="${i}">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span class="page-dots">…</span>`;
        }
    }

    // Tombol Next
    html += `<button class="page-btn next-btn" data-page="next" ${currentPage === totalHalaman ? 'disabled' : ''} aria-label="Halaman Berikutnya">
        <i class="fas fa-chevron-right"></i>
    </button>`;

    paginationContainer.innerHTML = html;

    // Event listener untuk tombol pagination
    paginationContainer.querySelectorAll('.page-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', function() {
            const page = this.dataset.page;
            let newPage = currentPage;

            if (page === 'prev') {
                newPage = Math.max(1, currentPage - 1);
            } else if (page === 'next') {
                newPage = Math.min(totalHalaman, currentPage + 1);
            } else {
                newPage = parseInt(page);
            }

            if (newPage !== currentPage) {
                renderNewsPage(newPage);
                // Scroll ke atas halaman berita
                document.querySelector('.news-page').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============================================
// FUNGSI RENDER HALAMAN BERITA (berita.html)
// ============================================

function renderNewsPage(page = 1) {
    const grid = document.getElementById('newsGrid');
    if (!grid) return;

    const start = (page - 1) * BERITA_PER_HALAMAN;
    const end = start + BERITA_PER_HALAMAN;
    const beritaHalaman = beritaData.slice(start, end);

    grid.innerHTML = beritaHalaman.map(berita => renderBeritaCard(berita)).join('');

    // Re-trigger animasi fade-up & stagger
    setTimeout(() => {
        document.querySelectorAll('.fade-up, .stagger-child').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);

    renderPagination(beritaData.length, page);
}

// ============================================
// FUNGSI RENDER DETAIL BERITA (detail-berita.html)
// ============================================

function renderDetailBerita() {
    const wrapper = document.getElementById('detailWrapper');
    if (!wrapper) return;

    // Ambil parameter id dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));

    // Cari berita berdasarkan id
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
            <span class="detail-category">${berita.category}</span>
            <span class="detail-date">${berita.date}</span>
        </div>

        <!-- Judul -->
        <h1 class="detail-title">${berita.title}</h1>

        <!-- Gambar -->
        <div class="detail-image">
            <img 
                src="${berita.image}" 
                alt="${berita.title}"
            />
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
// INIT (Deteksi Halaman)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Cek halaman mana yang sedang dibuka
    const isBeritaPage = document.getElementById('newsGrid') !== null;
    const isDetailPage = document.getElementById('detailWrapper') !== null;
    const isHomePage = document.getElementById('highlightContainer') !== null || document.getElementById('latestContainer') !== null;

    if (isBeritaPage) {
        // Halaman berita.html
        renderNewsPage(1);
        console.log('Halaman Berita siap!');
    } else if (isDetailPage) {
        // Halaman detail-berita.html
        renderDetailBerita();
        console.log('Halaman Detail Berita siap!');
    } else if (isHomePage) {
        // Halaman index.html - Integrasi berita dinamis
        renderFeaturedBerita('highlightContainer');
        renderLatestBerita('latestContainer', 6);
        console.log('Halaman Utama - Berita dinamis dimuat!');
    }
});