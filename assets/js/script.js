/* ==========================================================
   SCROLL REVEAL & COUNTER ANIMATION
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const observerOptions = {
        threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                // 1. Animasi Fade-up untuk card
                entry.target.classList.add("show");

                // 2. Counter Logic
                if (entry.target.classList.contains("stat-item")) {
                    const numberEl = entry.target.querySelector(".stat-number");
                    if (numberEl && !numberEl.dataset.animated) {
                        numberEl.dataset.animated = "true";
                        animateCounter(numberEl);
                    }
                }

            }
        });
    }, observerOptions);

        // Observe Semua element
    document.querySelectorAll(".about-image, .about-content, .highlight-card, .stat-item, .service-item, .contact-wrapper").forEach(el => {
        observer.observe(el);
    });

});

/* ==========================================================
   FUNCTION: ANIMATE COUNTER
========================================================== */

function animateCounter(element) {
    const target = parseInt(element.getAttribute("data-target"));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateNumber = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.ceil(current);
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = target;
        }
    };

    updateNumber();
}

/* ==========================================================
   DATA BERITA GLOBAL (untuk semua halaman)
========================================================== */
const allNewsData = [
    {
        id: 1,
        title: "SMP Suka Maju Juara Olimpiade Sains",
        image: "assets/images/placeholders/news1.jpg",
        content: "Alhamdulillah, siswa SMP Suka Maju berhasil meraih juara pertama dalam Olimpiade Sains tingkat provinsi. Prestasi ini membuktikan dedikasi siswa dan bimbingan guru yang luar biasa.",
        fullBody: `<p>Alhamdulillah, siswa SMP Suka Maju berhasil meraih juara pertama dalam Olimpiade Sains tingkat provinsi. Prestasi ini membuktikan dedikasi siswa dan bimbingan guru yang luar biasa.</p>
                   <p>Lomba ini diikuti oleh lebih dari 100 sekolah dari seluruh provinsi. Tim SMP Suka Maju yang terdiri dari 3 siswa berhasil mengalahkan peserta lain dengan skor sempurna di babak final.</p>
                   <p>Kepala Sekolah, Ahmad Zaki, S.Pd., M.Pd., menyampaikan rasa bangga dan terima kasih kepada guru pembimbing serta orang tua yang telah mendukung penuh. "Ini adalah bukti bahwa dengan kerja keras dan doa, prestasi gemilang bisa diraih," ujarnya.</p>
                   <p>Ke depan, SMP Suka Maju akan terus membina siswa di bidang sains dan teknologi agar mampu bersaing di tingkat nasional maupun internasional.</p>`,
        date: "29 Juli 2026"
    },
    {
        id: 2,
        title: "Kunjungan Edukasi ke Museum",
        image: "assets/images/placeholders/news2.jpg",
        content: "Seluruh siswa kelas 8 mengikuti kegiatan kunjungan edukasi ke Museum Sejarah. Kegiatan ini bertujuan menambah wawasan siswa mengenai sejarah perjuangan bangsa.",
        fullBody: `<p>Seluruh siswa kelas 8 mengikuti kegiatan kunjungan edukasi ke Museum Sejarah. Kegiatan ini bertujuan menambah wawasan siswa mengenai sejarah perjuangan bangsa.</p>
                   <p>Museum ini menyimpan berbagai koleksi benda bersejarah dari masa penjajahan hingga kemerdekaan. Siswa sangat antusias mendengarkan penjelasan dari pemandu museum.</p>
                   <p>Kegiatan ini diharapkan dapat menumbuhkan rasa cinta tanah air dan menghargai jasa para pahlawan.</p>`,
        date: "25 Juli 2026"
    },
    {
        id: 3,
        title: "Peringatan Hari Pahlawan",
        image: "assets/images/placeholders/news3.jpg",
        content: "SMP Suka Maju mengadakan upacara bendera dan lomba pidato dalam rangka memperingati Hari Pahlawan. Siswa sangat antusias mengikuti setiap rangkaian acara.",
        fullBody: `<p>SMP Suka Maju mengadakan upacara bendera dan lomba pidato dalam rangka memperingati Hari Pahlawan. Siswa sangat antusias mengikuti setiap rangkaian acara.</p>
                   <p>Lomba pidato dimenangkan oleh siswa kelas 9 dengan tema "Semangat Pahlawan untuk Masa Depan".</p>
                   <p>Kegiatan ini bertujuan menumbuhkan jiwa nasionalisme dan menghargai jasa para pahlawan.</p>`,
        date: "20 Juli 2026"
    },
    {
        id: 4,
        title: "Kegiatan Ekstrakurikuler",
        image: "assets/images/placeholders/news4.jpg",
        content: "Berbagai kegiatan ekstrakurikuler seperti Pramuka, PMR, dan Basket kembali aktif. Ini adalah wadah pengembangan bakat dan minat siswa di luar jam pelajaran.",
        fullBody: `<p>Berbagai kegiatan ekstrakurikuler seperti Pramuka, PMR, dan Basket kembali aktif. Ini adalah wadah pengembangan bakat dan minat siswa di luar jam pelajaran.</p>
                   <p>Pramuka mengadakan latihan rutin setiap hari Jumat, PMR mengadakan pelatihan pertolongan pertama, dan Basket mengadakan pertandingan persahabatan dengan sekolah lain.</p>
                   <p>Kegiatan ekstrakurikuler sangat penting untuk mengembangkan soft skill siswa.</p>`,
        date: "15 Juli 2026"
    },
    {
        id: 5,
        title: "Kunjungan ke Panti Asuhan",
        image: "assets/images/placeholders/news1.jpg",
        content: "Siswa-siswi SMP Suka Maju melakukan bakti sosial dan kunjungan ke panti asuhan untuk berbagi kebahagiaan menjelang hari raya.",
        fullBody: `<p>Siswa-siswi SMP Suka Maju melakukan bakti sosial dan kunjungan ke panti asuhan untuk berbagi kebahagiaan menjelang hari raya.</p>
                   <p>Mereka membawa paket sembako, mainan, dan bingkisan untuk anak-anak panti asuhan. Kegiatan ini bertujuan menumbuhkan rasa peduli terhadap sesama.</p>`,
        date: "10 Juli 2026"
    },
    {
        id: 6,
        title: "Workshop Digital untuk Guru",
        image: "assets/images/placeholders/news2.jpg",
        content: "Para guru mengikuti workshop pengembangan media pembelajaran digital untuk meningkatkan kualitas mengajar di era teknologi.",
        fullBody: `<p>Para guru mengikuti workshop pengembangan media pembelajaran digital untuk meningkatkan kualitas mengajar di era teknologi.</p>
                   <p>Workshop ini diisi oleh narasumber dari Kementerian Pendidikan dan berlangsung selama 3 hari.</p>
                   <p>Diharapkan dengan workshop ini, guru dapat membuat materi pembelajaran yang lebih menarik dan interaktif.</p>`,
        date: "05 Juli 2026"
    },
    {
        id: 7,
        title: "Lomba Pidato Bahasa Inggris",
        image: "assets/images/placeholders/news3.jpg",
        content: "Siswa SMP Suka Maju mengikuti lomba pidato Bahasa Inggris tingkat kabupaten dan berhasil meraih juara harapan 1.",
        fullBody: `<p>Siswa SMP Suka Maju mengikuti lomba pidato Bahasa Inggris tingkat kabupaten dan berhasil meraih juara harapan 1.</p>
                   <p>Lomba ini diikuti oleh puluhan peserta dari berbagai sekolah. Siswa kami menunjukkan kemampuan berbahasa Inggris yang baik dan percaya diri.</p>`,
        date: "28 Juni 2026"
    },
    {
        id: 8,
        title: "Kegiatan Outbound Siswa",
        image: "assets/images/placeholders/news4.jpg",
        content: "Kegiatan outbound diadakan untuk meningkatkan kebersamaan dan kerjasama antar siswa kelas 7 di awal tahun ajaran baru.",
        fullBody: `<p>Kegiatan outbound diadakan untuk meningkatkan kebersamaan dan kerjasama antar siswa kelas 7 di awal tahun ajaran baru.</p>
                   <p>Berbagai permainan dan tantangan fisik dilalui dengan penuh semangat. Siswa belajar saling membantu dan berkomunikasi dengan baik.</p>`,
        date: "20 Juni 2026"
    },
    {
        id: 9,
        title: "SMP Suka Maju Raih Adiwiyata",
        image: "assets/images/placeholders/news1.jpg",
        content: "SMP Suka Maju berhasil meraih penghargaan Adiwiyata tingkat provinsi atas kepedulian terhadap lingkungan hidup.",
        fullBody: `<p>SMP Suka Maju berhasil meraih penghargaan Adiwiyata tingkat provinsi atas kepedulian terhadap lingkungan hidup.</p>
                   <p>Penghargaan ini diberikan atas program penghijauan, pengelolaan sampah, dan edukasi lingkungan yang berkelanjutan.</p>`,
        date: "15 Juni 2026"
    },
    {
        id: 10,
        title: "Pentas Seni Akhir Tahun",
        image: "assets/images/placeholders/news2.jpg",
        content: "Pentas seni akhir tahun menampilkan berbagai bakat siswa dalam bidang seni tari, musik, dan teater. Acara berlangsung meriah.",
        fullBody: `<p>Pentas seni akhir tahun menampilkan berbagai bakat siswa dalam bidang seni tari, musik, dan teater. Acara berlangsung meriah.</p>
                   <p>Ratusan orang tua dan masyarakat hadir menyaksikan penampilan siswa. Ini menjadi ajang apresiasi bagi siswa berbakat.</p>`,
        date: "10 Juni 2026"
    },
    {
        id: 11,
        title: "Pendaftaran Peserta Didik Baru",
        image: "assets/images/placeholders/news3.jpg",
        content: "Pendaftaran peserta didik baru tahun ajaran 2026/2027 telah dibuka. Silakan daftarkan putra/putri Anda segera.",
        fullBody: `<p>Pendaftaran peserta didik baru tahun ajaran 2026/2027 telah dibuka. Silakan daftarkan putra/putri Anda segera.</p>
                   <p>Pendaftaran dilakukan secara online melalui website resmi sekolah. Kuota terbatas, jangan lewatkan kesempatan ini.</p>`,
        date: "01 Juni 2026"
    },
    {
        id: 12,
        title: "Kegiatan Bakti Sosial",
        image: "assets/images/placeholders/news4.jpg",
        content: "SMP Suka Maju mengadakan bakti sosial di lingkungan sekitar sekolah sebagai bentuk kepedulian terhadap masyarakat.",
        fullBody: `<p>SMP Suka Maju mengadakan bakti sosial di lingkungan sekitar sekolah sebagai bentuk kepedulian terhadap masyarakat.</p>
                   <p>Kegiatan berupa pembagian sembako, pemeriksaan kesehatan gratis, dan kerja bakti membersihkan lingkungan.</p>`,
        date: "25 Mei 2026"
    }
];

/* ==========================================================
   FUNGSI UNTUK BERITA.HTML (PAGINATION DINAMIS)
========================================================== */
if (document.querySelector('.berita-grid-dinamis')) {
    const itemsPerPage = 6;
    let currentPage = 1;
    const totalPages = Math.ceil(allNewsData.length / itemsPerPage);

    function renderBerita(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageData = allNewsData.slice(start, end);

        const grid = document.getElementById('berita-grid-dinamis');
        grid.innerHTML = '';

        pageData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'berita-card';
            card.innerHTML = `
                <div class="berita-img">
                    <img src="${item.image}" alt="${item.title}">
                    <span class="berita-date">${item.date}</span>
                </div>
                <div class="berita-content">
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                    <a href="detail-berita.html?id=${item.id}" class="btn-berita">Baca Selengkapnya →</a>
                </div>
            `;
            grid.appendChild(card);
        });

        renderPaginationBerita(page);
    }

    function renderPaginationBerita(page) {
        const container = document.getElementById('pagination-berita');
        let html = '<ul>';

        // Prev
        html += `
            <li>
                <a href="#" class="prev ${page === 1 ? 'disabled' : ''}" aria-label="Halaman sebelumnya">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </a>
            </li>
        `;

        // Nomor halaman
        for (let i = 1; i <= totalPages; i++) {
            if (i === page) {
                html += `<li><a href="#" class="active">${i}</a></li>`;
            } else if (
                i === 1 ||
                i === totalPages ||
                (i >= page - 1 && i <= page + 1)
            ) {
                html += `<li><a href="#">${i}</a></li>`;
            } else if (i === page - 2 || i === page + 2) {
                html += `<li><span class="dots">...</span></li>`;
            }
        }

        // Next
        html += `
            <li>
                <a href="#" class="next ${page === totalPages ? 'disabled' : ''}" aria-label="Halaman berikutnya">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </a>
            </li>
        `;

        html += '</ul>';
        container.innerHTML = html;

        // Event listener
        container.querySelectorAll('li a:not(.active):not(.disabled)').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const text = link.textContent.trim();
                if (text === '' || link.classList.contains('prev') || link.classList.contains('next')) {
                    const isPrev = link.classList.contains('prev');
                    const newPage = isPrev ? currentPage - 1 : currentPage + 1;
                    if (newPage >= 1 && newPage <= totalPages) {
                        currentPage = newPage;
                        renderBerita(currentPage);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                } else {
                    const num = parseInt(text);
                    if (!isNaN(num) && num !== currentPage) {
                        currentPage = num;
                        renderBerita(currentPage);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }
            });
        });
    }

    renderBerita(currentPage);
}