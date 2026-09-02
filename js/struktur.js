// ============================================
// DATA STRUKTUR (Placeholder - Ganti dengan data asli)
// ============================================
const strukturData = [
    { id: 1, name: '[Nama Struktur 1]', position: 'Ketua Yayasan', image: 'https://picsum.photos/seed/struktur1/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 2, name: '[Nama Struktur 2]', position: 'Sekretaris', image: 'https://picsum.photos/seed/struktur2/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 3, name: '[Nama Struktur 3]', position: 'Bendahara', image: 'https://picsum.photos/seed/struktur3/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 4, name: '[Nama Struktur 4]', position: 'Kepala SMP', image: 'https://picsum.photos/seed/struktur4/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 5, name: '[Nama Struktur 5]', position: 'Kepala MA', image: 'https://picsum.photos/seed/struktur5/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 6, name: '[Nama Struktur 6]', position: 'Wakil Kepala', image: 'https://picsum.photos/seed/struktur6/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 7, name: '[Nama Struktur 7]', position: 'Guru', image: 'https://picsum.photos/seed/struktur7/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 8, name: '[Nama Struktur 8]', position: 'Guru', image: 'https://picsum.photos/seed/struktur8/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 9, name: '[Nama Struktur 9]', position: 'Guru', image: 'https://picsum.photos/seed/struktur9/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 10, name: '[Nama Struktur 10]', position: 'Guru', image: 'https://picsum.photos/seed/struktur10/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 11, name: '[Nama Struktur 11]', position: 'Staf Administrasi', image: 'https://picsum.photos/seed/struktur11/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 12, name: '[Nama Struktur 12]', position: 'Staf Administrasi', image: 'https://picsum.photos/seed/struktur12/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 13, name: '[Nama Struktur 13]', position: 'Staf Perpustakaan', image: 'https://picsum.photos/seed/struktur13/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 14, name: '[Nama Struktur 14]', position: 'Staf Perpustakaan', image: 'https://picsum.photos/seed/struktur14/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 15, name: '[Nama Struktur 14]', position: 'Staf Perpustakaan', image: 'https://picsum.photos/seed/struktur14/400/400', desc: '[Deskripsi singkat tugas dan peran.]' },
    { id: 16, name: '[Nama Struktur 14]', position: 'Staf Perpustakaan', image: 'https://picsum.photos/seed/struktur14/400/400', desc: '[Deskripsi singkat tugas dan peran.]' }
];

// ============================================
// VARIABEL
// ============================================
const STRUKTUR_PER_HALAMAN = 8; // Ubah dari 6 menjadi 8

// ============================================
// RENDER KARTU STRUKTUR
// ============================================
function renderStrukturCard(struktur) {
    return `
        <div class="struktur-card fade-up stagger-child">
            <div class="struktur-card-image">
                <img src="${struktur.image}" alt="${struktur.name}" />
            </div>
            <div class="struktur-card-content">
                <h3>${struktur.name}</h3>
                <p class="struktur-jabatan">${struktur.position}</p>
                <p class="struktur-bio">${struktur.desc}</p>
            </div>
        </div>
    `;
}

// ============================================
// PAGINATION
// ============================================
function renderStrukturPagination(totalStruktur, currentPage) {
    const totalHalaman = Math.ceil(totalStruktur / STRUKTUR_PER_HALAMAN);
    const paginationContainer = document.getElementById('strukturPagination');
    
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
        btn.addEventListener('click', function() {
            const page = this.dataset.page;
            let newPage = currentPage;

            if (page === 'prev') newPage = Math.max(1, currentPage - 1);
            else if (page === 'next') newPage = Math.min(totalHalaman, currentPage + 1);
            else newPage = parseInt(page);

            if (newPage !== currentPage) {
                renderStrukturPage(newPage);
                document.querySelector('.struktur-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============================================
// RENDER HALAMAN STRUKTUR
// ============================================
function renderStrukturPage(page = 1) {
    const grid = document.getElementById('strukturGrid');
    if (!grid) return;

    const start = (page - 1) * STRUKTUR_PER_HALAMAN;
    const end = start + STRUKTUR_PER_HALAMAN;
    const strukturHalaman = strukturData.slice(start, end);

    grid.innerHTML = strukturHalaman.map(struktur => renderStrukturCard(struktur)).join('');

    // Re-trigger animasi
    setTimeout(() => {
        document.querySelectorAll('.fade-up, .stagger-child').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);

    renderStrukturPagination(strukturData.length, page);
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const isStrukturPage = document.getElementById('strukturGrid') !== null;
    if (isStrukturPage) {
        renderStrukturPage(1);
        console.log('Halaman Struktur Organisasi siap!');
    }
});