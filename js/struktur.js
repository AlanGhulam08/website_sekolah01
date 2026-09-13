// ============================================
// STRUKTUR ORGANISASI — Logic Render
// File: js/struktur.js
// ============================================
// Bergantung pada: js/struktur-data.js
//   - strukturData → array staff dengan field unitId
//   - unitMeta     → metadata tiap unit
//
// Mendukung query param: ?unit=xxx
//   (tanpa param)     → Yayasan (Pusat)
//   ?unit=pondok      → Pondok
//   ?unit=smp         → SMP
//   ?unit=ma          → MA
//   ?unit=tpq         → TPQ
//   ?unit=lksa        → LKSA
// ============================================

// ============================================
// KONFIGURASI
// ============================================
const STRUKTUR_PER_HALAMAN = 8;

// ============================================
// HELPER: Ambil unit aktif dari URL
// Return: key unitMeta ('pusat', 'pondok', dll)
// ============================================
function getActiveUnitKey() {
    const params = new URLSearchParams(window.location.search);
    const unit = params.get('unit');

    // Tanpa param → pusat (Yayasan)
    if (!unit) return 'pusat';

    // Validasi: unit harus ada di unitMeta
    if (unitMeta[unit]) return unit;

    // Unit tidak valid → fallback ke pusat
    return 'pusat';
}

// ============================================
// HELPER: Cek apakah unit dari URL valid
// ============================================
function isUnitValid(unitKey) {
    if (unitKey === 'pusat') return true;
    const params = new URLSearchParams(window.location.search);
    const unit = params.get('unit');
    return unit === null || unitMeta[unit] !== undefined;
}

// ============================================
// HELPER: Filter data berdasarkan unitKey
// ============================================
function getStrukturByUnit(unitKey) {
    const meta = unitMeta[unitKey];
    if (!meta) return [];
    // unitId di data: null untuk pusat, string untuk unit lain
    return strukturData.filter(s => s.unitId === meta.id);
}

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
// UPDATE PAGE HEADER & BREADCRUMB (DINAMIS)
// ============================================
function updatePageHeader(unitKey) {
    const meta = unitMeta[unitKey];
    if (!meta) return;

    // Update <title> halaman
    document.title = `${meta.judulHeader} - YAYASAN PENDIDIKAN DAN SOSIAL AT THOYYIBUN`;

    // Update page-header (pakai id)
    const pageHeaderTitle = document.getElementById('pageHeaderTitle');
    const pageHeaderSubtitle = document.getElementById('pageHeaderSubtitle');

    if (pageHeaderTitle) pageHeaderTitle.textContent = meta.judulHeader;
    if (pageHeaderSubtitle) pageHeaderSubtitle.textContent = meta.subtitleHeader;

    // Update section-head (pakai id)
    const sectionTag = document.getElementById('sectionTag');
    const sectionTitle = document.getElementById('sectionTitle');
    const sectionSub = document.getElementById('sectionSub');

    if (sectionTag) sectionTag.textContent = meta.sectionTag;
    if (sectionTitle) sectionTitle.innerHTML = meta.sectionTitle;
    if (sectionSub) sectionSub.textContent = meta.sectionSub;

    // ============================================
    // UPDATE BREADCRUMB
    // ============================================
    const breadcrumbStrukturLink = document.getElementById('breadcrumbStrukturLink');
    const breadcrumbUnitSeparator = document.getElementById('breadcrumbUnitSeparator');
    const breadcrumbUnitLi = document.getElementById('breadcrumbUnitLi');
    const breadcrumbUnitCurrent = document.getElementById('breadcrumbUnitCurrent');

    if (unitKey === 'pusat') {
        // Kondisi Yayasan: Home > Struktur Organisasi
        if (breadcrumbStrukturLink) {
            breadcrumbStrukturLink.textContent = 'Struktur Organisasi';
            breadcrumbStrukturLink.removeAttribute('href');
            breadcrumbStrukturLink.classList.add('current');
            breadcrumbStrukturLink.style.pointerEvents = 'none';
            breadcrumbStrukturLink.style.color = 'var(--gray-dark)';
            breadcrumbStrukturLink.style.fontWeight = '600';
        }
        if (breadcrumbUnitSeparator) breadcrumbUnitSeparator.style.display = 'none';
        if (breadcrumbUnitLi) breadcrumbUnitLi.style.display = 'none';
    } else {
        // Kondisi Unit: Home > Struktur Organisasi > SMP
        if (breadcrumbStrukturLink) {
            breadcrumbStrukturLink.textContent = 'Struktur Organisasi';
            breadcrumbStrukturLink.setAttribute('href', 'struktur-organisasi.html');
            breadcrumbStrukturLink.classList.remove('current');
            breadcrumbStrukturLink.style.pointerEvents = '';
            breadcrumbStrukturLink.style.color = '';
            breadcrumbStrukturLink.style.fontWeight = '';
        }
        if (breadcrumbUnitSeparator) breadcrumbUnitSeparator.style.display = '';
        if (breadcrumbUnitLi) breadcrumbUnitLi.style.display = '';
        if (breadcrumbUnitCurrent) breadcrumbUnitCurrent.textContent = meta.labelBreadcrumb;
    }
}

// ============================================
// UPDATE ACTIVE STATE DI DROPDOWN NAVBAR
// ============================================
function updateNavbarActiveState(unitKey) {
    const dropdownContent = document.getElementById('strukturDropdownContent');
    if (!dropdownContent) return;

    // Hapus semua active
    dropdownContent.querySelectorAll('a').forEach(a => a.classList.remove('active'));

    // Tambah active ke item yang sesuai
    const activeLink = dropdownContent.querySelector(`a[data-unit="${unitKey}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// ============================================
// PAGINATION
// ============================================
function renderStrukturPagination(totalStruktur, currentPage) {
    const totalHalaman = Math.ceil(totalStruktur / STRUKTUR_PER_HALAMAN);
    const paginationContainer = document.getElementById('strukturPagination');

    if (!paginationContainer) return;

    // Kalau cuma 1 halaman → sembunyikan pagination
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

    const unitKey = getActiveUnitKey();
    const unitValid = isUnitValid(unitKey);

    // Update header & breadcrumb berdasarkan unit
    updatePageHeader(unitKey);

    // Update active state di dropdown navbar
    updateNavbarActiveState(unitKey);

    // Kalau unit tidak valid → tampilkan pesan
    if (!unitValid) {
        grid.innerHTML = `
            <div class="struktur-not-found" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <h2>Unit Tidak Ditemukan</h2>
                <p>Silakan pilih unit yang valid dari menu.</p>
                <a href="struktur-organisasi.html" class="btn-primary" style="margin-top: 20px;">Lihat Struktur Yayasan</a>
            </div>
        `;
        const paginationContainer = document.getElementById('strukturPagination');
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }

    // Filter data berdasarkan unit
    const filteredData = getStrukturByUnit(unitKey);

    // Kalau tidak ada data untuk unit ini
    if (filteredData.length === 0) {
        grid.innerHTML = `
            <div class="struktur-empty" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <h3>Belum Ada Data</h3>
                <p>Data struktur untuk unit ini belum tersedia.</p>
            </div>
        `;
        const paginationContainer = document.getElementById('strukturPagination');
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }

    // Slice data untuk halaman ini
    const start = (page - 1) * STRUKTUR_PER_HALAMAN;
    const end = start + STRUKTUR_PER_HALAMAN;
    const strukturHalaman = filteredData.slice(start, end);

    grid.innerHTML = strukturHalaman.map(struktur => renderStrukturCard(struktur)).join('');

    // Re-trigger animasi
    setTimeout(() => {
        document.querySelectorAll('.fade-up, .stagger-child').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);

    // Render pagination berdasarkan total data terfilter
    renderStrukturPagination(filteredData.length, page);
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const isStrukturPage = document.getElementById('strukturGrid') !== null;
    if (isStrukturPage) {
        renderStrukturPage(1);
        const unitKey = getActiveUnitKey();
        console.log(`Halaman Struktur Organisasi siap! Unit aktif: ${unitKey}`);
    }
});