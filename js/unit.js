// ============================================
// DATA UNIT (Dummy - Ganti dengan data asli)
// Urutan: Pondok, SMP, MA, TPQ, LKSA
// ============================================
const unitData = [
    // ============================================
    // 1. PONDOK
    // ============================================
    {
        id: 'pondok',
        logo: 'assets/logo/Pondok.png',
        nama: "Pondok Pesantren dan Madrasah AL-Qur'an Darul Falah",
        deskripsi: "Pondok Pesantren dan Madrasah AL-Qur'an Darul Falah berkomitmen mencetak generasi penghafal Al-Qur'an yang berakhlak mulia, berilmu, dan mengamalkan nilai-nilai keislaman dalam kehidupan sehari-hari.",
        banner: {
            gambar: 'https://picsum.photos/seed/banner-pondok/1600/500',
            alt: 'Banner Promosi Pondok Pesantren Darul Falah'
        },
        visi: "Menjadi pondok pesantren unggul yang melahirkan generasi Qur'ani, berakhlak mulia, dan berdaya saing global.",
        misi: [
            "Menyelenggarakan pendidikan tahfidz dan tahsin Al-Qur'an secara intensif dan terstruktur.",
            "Membentuk karakter santri yang berakhlak mulia dan berjiwa mandiri.",
            "Mengintegrasikan ilmu agama dan ilmu umum dalam kurikulum pesantren.",
            "Menjalin kerjasama dengan berbagai lembaga pendidikan untuk peningkatan mutu."
        ],
        kepalaSekolah: {
            nama: '[Nama Pengasuh Pondok]',
            foto: 'assets/images/kepala-sekolah/kepala-sekolah.jpg',
            jabatan: "Pengasuh Pondok Pesantren dan Madrasah AL-Qur'an Darul Falah"
        },
        whatsapp: 'https://wa.me/6281234567890',
        videoUrl: 'https://www.youtube-nocookie.com/embed/VIDEO_ID_PONDOK',
        ppdb: {
            gelombang: [
                { periode: 'Januari - Maret', biaya: 'Rp100.000', linkForm: 'https://forms.google.com/CONTOH' },
                { periode: 'April - Mei', biaya: 'Rp150.000', linkForm: 'https://forms.google.com/CONTOH' },
                { periode: 'Juni - Juli', biaya: 'Rp200.000', linkForm: 'https://forms.google.com/CONTOH' }
            ]
        }
    },

    // ============================================
    // 2. SMP
    // ============================================
    {
        id: 'smp',
        logo: 'assets/logo/logo-smp.png',
        nama: 'SMP AL-Makin Islamic Krian',
        deskripsi: 'SMP AL-Makin Islamic Krian berkomitmen menghadirkan pendidikan Islam berkualitas yang memadukan kurikulum nasional dengan nilai-nilai keislaman.',
        banner: {
            gambar: 'https://picsum.photos/seed/banner-smp/1600/500',
            alt: 'Banner Promosi SMP AL-Makin Islamic Krian'
        },
        visi: 'Menjadi lembaga pendidikan Islam unggul yang mencetak generasi berakhlak mulia dan berprestasi.',
        misi: [
            'Menyelenggarakan pembelajaran aktif dan menyenangkan berbasis nilai Islam.',
            'Membentuk karakter peserta didik yang berakhlak mulia dan mandiri.',
            'Mengembangkan potensi akademik dan non-akademik peserta didik.',
            'Menjalin kemitraan dengan orang tua dan masyarakat untuk kemajuan sekolah.'
        ],
        kepalaSekolah: {
            nama: '[Nama Kepala SMP]',
            foto: 'assets/images/kepala-sekolah/kepala-sekolah.jpg',
            jabatan: 'Kepala SMP AL-Makin Islamic Krian'
        },
        whatsapp: 'https://wa.me/6281234567890',
        videoUrl: 'https://www.youtube-nocookie.com/embed/VIDEO_ID_SMP',
        ppdb: {
            gelombang: [
                { periode: 'Januari - Maret', biaya: 'Rp100.000', linkForm: 'https://forms.google.com/CONTOH' },
                { periode: 'April - Mei', biaya: 'Rp150.000', linkForm: 'https://forms.google.com/CONTOH' },
                { periode: 'Juni - Juli', biaya: 'Rp200.000', linkForm: 'https://forms.google.com/CONTOH' }
            ]
        }
    },

    // ============================================
    // 3. MA
    // ============================================
    {
        id: 'ma',
        logo: 'assets/logo/logo-ma.png',
        nama: 'Madrasah Diniyah Takmiliyah Darul Falah AL-Mubarok',
        deskripsi: 'Madrasah Diniyah Takmiliyah Darul Falah AL-Mubarok menyelenggarakan pendidikan keagamaan dengan pendalaman ilmu agama dan pengetahuan umum untuk mencetak generasi yang berilmu dan berakhlak mulia.',
        banner: {
            gambar: 'https://picsum.photos/seed/banner-ma/1600/500',
            alt: 'Banner Promosi Madrasah Diniyah Takmiliyah Darul Falah AL-Mubarok'
        },
        visi: 'Menjadi madrasah diniyah unggul yang mencetak generasi berilmu, beriman, dan berakhlak mulia.',
        misi: [
            'Menyelenggarakan pendidikan agama dan umum secara seimbang.',
            'Membentuk peserta didik yang berakhlak mulia dan berwawasan global.',
            'Mengembangkan potensi akademik dan keagamaan peserta didik.',
            'Menjalin kerjasama dengan berbagai lembaga pendidikan untuk peningkatan mutu.'
        ],
        kepalaSekolah: {
            nama: '[Nama Kepala Madrasah]',
            foto: 'assets/images/kepala-sekolah/kepala-sekolah.jpg',
            jabatan: 'Kepala Madrasah Diniyah Takmiliyah Darul Falah AL-Mubarok'
        },
        whatsapp: 'https://wa.me/6281234567890',
        videoUrl: 'https://www.youtube-nocookie.com/embed/VIDEO_ID_MA',
        ppdb: {
            gelombang: [
                { periode: 'Januari - Maret', biaya: 'Rp100.000', linkForm: 'https://forms.google.com/CONTOH' },
                { periode: 'April - Mei', biaya: 'Rp150.000', linkForm: 'https://forms.google.com/CONTOH' },
                { periode: 'Juni - Juli', biaya: 'Rp200.000', linkForm: 'https://forms.google.com/CONTOH' }
            ]
        }
    },

    // ============================================
    // 4. TPQ
    // ============================================
    {
        id: 'tpq',
        logo: 'assets/logo/TPQ.png',
        nama: 'TPQ Darul Falah AL-Mubarok',
        deskripsi: "TPQ Darul Falah AL-Mubarok berkomitmen mendidik anak-anak sejak dini dalam membaca, menghafal, dan memahami Al-Qur'an dengan metode yang menyenangkan dan mudah dipahami.",
        banner: {
            gambar: 'https://picsum.photos/seed/banner-tpq/1600/500',
            alt: 'Banner Promosi TPQ Darul Falah AL-Mubarok'
        },
        visi: "Menjadi lembaga pendidikan Al-Qur'an yang unggul dalam mencetak generasi Qur'ani sejak dini.",
        misi: [
            "Menyelenggarakan pembelajaran baca tulis Al-Qur'an dengan metode yang efektif dan menyenangkan.",
            "Membiasakan anak-anak membaca dan menghafal Al-Qur'an sejak dini.",
            "Menanamkan akhlak mulia dan nilai-nilai keislaman pada anak.",
            "Menciptakan lingkungan belajar yang nyaman, aman, dan islami."
        ],
        kepalaSekolah: {
            nama: '[Nama Kepala TPQ]',
            foto: 'assets/images/kepala-sekolah/kepala-sekolah.jpg',
            jabatan: 'Kepala TPQ Darul Falah AL-Mubarok'
        },
        whatsapp: 'https://wa.me/6281234567890',
        videoUrl: 'https://www.youtube-nocookie.com/embed/VIDEO_ID_TPQ',
        ppdb: {
            gelombang: [
                { periode: 'Januari - Maret', biaya: 'Rp100.000', linkForm: 'https://forms.google.com/CONTOH' },
                { periode: 'April - Mei', biaya: 'Rp150.000', linkForm: 'https://forms.google.com/CONTOH' },
                { periode: 'Juni - Juli', biaya: 'Rp200.000', linkForm: 'https://forms.google.com/CONTOH' }
            ]
        }
    },

    // ============================================
    // 5. LKSA
    // ============================================
    {
        id: 'lksa',
        logo: 'https://via.placeholder.com/100?text=Logo',
        nama: 'Lembaga Kesejahteraan Sosial Anak AT-Thoyyibun',
        deskripsi: 'Lembaga Kesejahteraan Sosial Anak AT-Thoyyibun hadir untuk memberikan perlindungan, pengasuhan, dan pendidikan bagi anak-anak yatim, piatu, dan dhuafa agar tumbuh menjadi generasi yang mandiri dan berakhlak mulia.',
        banner: {
            gambar: 'https://picsum.photos/seed/banner-lksa/1600/500',
            alt: 'Banner Promosi LKSA AT-Thoyyibun'
        },
        visi: 'Menjadi lembaga kesejahteraan sosial anak yang unggul dalam memberikan pengasuhan, pendidikan, dan pembinaan bagi anak-anak yang membutuhkan.',
        misi: [
            'Memberikan pengasuhan dan perlindungan bagi anak-anak yatim, piatu, dan dhuafa.',
            'Menyelenggarakan pendidikan formal dan non-formal bagi anak asuh.',
            'Membentuk karakter anak yang mandiri, berakhlak mulia, dan berdaya saing.',
            'Menjalin kemitraan dengan berbagai pihak untuk kesejahteraan anak asuh.'
        ],
        kepalaSekolah: {
            nama: '[Nama Ketua LKSA]',
            foto: 'assets/images/kepala-sekolah/kepala-sekolah.jpg',
            jabatan: 'Ketua LKSA (Lembaga Kesejahteraan Sosial Anak) AT-Thoyyibun'
        },
        whatsapp: 'https://wa.me/6281234567890',
        videoUrl: 'https://www.youtube-nocookie.com/embed/VIDEO_ID_LKSA',
        ppdb: {
            gelombang: [
                { periode: 'Januari - Maret', biaya: 'Rp100.000', linkForm: 'https://forms.google.com/CONTOH' },
                { periode: 'April - Mei', biaya: 'Rp150.000', linkForm: 'https://forms.google.com/CONTOH' },
                { periode: 'Juni - Juli', biaya: 'Rp200.000', linkForm: 'https://forms.google.com/CONTOH' }
            ]
        }
    }
];

// ============================================
// LOGIKA RENDER
// ============================================
function renderUnitPage() {
    const params = new URLSearchParams(window.location.search);
    const unitId = params.get('unit') || 'pondok';
    const unit = unitData.find(u => u.id === unitId);

    const container = document.getElementById('unitContent');
    if (!container) return;

    if (!unit) {
        container.innerHTML = `
            <div class="container" style="padding-top: 140px; text-align: center;">
                <h2>Unit Tidak Ditemukan</h2>
                <p>Silakan pilih unit yang valid.</p>
                <a href="unit.html?unit=pondok" class="btn-primary">Lihat Pondok</a>
            </div>
        `;
        return;
    }

    let misiHtml = '';
    unit.misi.forEach((misi, index) => {
        misiHtml += `
            <div class="mission-item stagger-child">
                <span class="mission-number">0${index + 1}</span>
                <h4>Misi ${index + 1}</h4>
                <p>${misi}</p>
            </div>
        `;
    });

    let ppdbHtml = '';
    unit.ppdb.gelombang.forEach((gel, index) => {
        ppdbHtml += `
            <div class="ppdb-card stagger-child">
                <h4>Gelombang ${index + 1}</h4>
                <p><strong>Periode:</strong> ${gel.periode}</p>
                <p><strong>Biaya:</strong> ${gel.biaya}</p>
                <a href="${gel.linkForm}" target="_blank" class="btn-primary">Daftar Sekarang</a>
            </div>
        `;
    });

    // ============================================
    // BANNER SECTION (Opsional — hanya render jika ada data banner)
    // ============================================
    let bannerHtml = '';
    if (unit.banner && unit.banner.gambar) {
        bannerHtml = `
            <section class="unit-banner-section">
                <div class="container">
                    <div class="unit-banner-wrapper fade-up">
                        <img 
                            src="${unit.banner.gambar}" 
                            alt="${unit.banner.alt || 'Banner Promosi ' + unit.nama}" 
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        `;
    }

    container.innerHTML = `
        <!-- Header Unit -->
        <section class="unit-header">
            <div class="container">
                <img src="${unit.logo}" alt="Logo ${unit.nama}" class="unit-logo" />
                <h1>${unit.nama}</h1>
            </div>
        </section>

        <!-- Profil Unit -->
        <section class="unit-profile">
            <div class="container">
                <div class="unit-description">
                    <p>${unit.deskripsi}</p>
                </div>
            </div>
        </section>

        <!-- Banner Promosi (BARU) -->
        ${bannerHtml}

        <!-- Visi & Misi -->
        <section class="vision-section">
            <div class="container">
                <div class="section-head center">
                    <span class="section-tag">Visi & Misi</span>
                    <h2 class="section-title">Tujuan <span>Pendidikan</span></h2>
                </div>
                <div class="vision-grid">
                    <div class="vision-card">
                        <div class="vision-label">Visi</div>
                        <blockquote>${unit.visi}</blockquote>
                    </div>
                    <div class="mission-grid">
                        ${misiHtml}
                    </div>
                </div>
            </div>
        </section>

        <!-- Kepala Sekolah -->
        <section class="profile-section">
            <div class="container">
                <div class="profile-grid fade-up">
                    <div class="profile-image">
                        <img src="${unit.kepalaSekolah.foto}" alt="${unit.kepalaSekolah.nama}" />
                    </div>
                    <div class="profile-content">
                        <span class="section-tag">Kepala Sekolah</span>
                        <h2>${unit.kepalaSekolah.nama}</h2>
                        <p class="sambutan">${unit.kepalaSekolah.jabatan}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Video Profile -->
        <section class="unit-video-section">
            <div class="container">
                <div class="section-head center">
                    <span class="section-tag">Video Profil</span>
                    <h2 class="section-title">Mengenal <span>Kami</span></h2>
                    <p>Tonton video profil singkat untuk memahami visi, misi, dan kegiatan sekolah kami</p>
                </div>
                <div class="unit-video-wrapper fade-up">
                    <iframe src="${unit.videoUrl}" title="Video Profil ${unit.nama}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>
        </section>

        <!-- PPDB -->
        <section class="ppdb-section">
            <div class="container">
                <div class="section-head center">
                    <span class="section-tag">PPDB</span>
                    <h2 class="section-title">Pendaftaran <span>Peserta Didik Baru</span></h2>
                    <p class="section-sub">Pilih gelombang dan klik tombol daftar untuk mengisi formulir online.</p>
                </div>
                <div class="ppdb-grid">
                    ${ppdbHtml}
                </div>
                <div style="text-align: center; margin-top: 40px;">
                    <a href="${unit.whatsapp}" target="_blank" class="btn-whatsapp fade-up" style="display: inline-flex; justify-content: center;">
                        <i class="fab fa-whatsapp"></i> Hubungi WhatsApp Sekolah
                    </a>
                </div>
            </div>
        </section>
    `;

    // ============================================
    // RE-TRIGGER ANIMASI (SAMA SEPERTI INDEX.HTML)
    // ============================================
    // Karena elemen dirender setelah halaman dimuat, kita buat observer baru
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
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const isUnitPage = document.getElementById('unitContent') !== null;
    if (isUnitPage) {
        renderUnitPage();
        console.log('Halaman Unit Pendidikan dimuat!');
    }
});