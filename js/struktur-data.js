// ============================================
// STRUKTUR DATA — Sumber Data Struktur Organisasi
// File: js/struktur-data.js
// ============================================
// Berisi:
// 1. unitMeta      → Metadata tiap unit (untuk page-header & breadcrumb)
// 2. strukturData  → Array staff dengan field unitId untuk filter
//
// unitId yang tersedia:
//   null      → Yayasan (Pusat)
//   'pondok'  → Pondok
//   'smp'     → SMP
//   'ma'      → MA
//   'tpq'     → TPQ
//   'lksa'    → LKSA
// ============================================

// ============================================
// 1. UNIT META
// Metadata untuk page-header & breadcrumb tiap unit
// ============================================
const unitMeta = {
    pusat: {
        id: null,
        nama: 'Yayasan',
        namaLengkap: 'Yayasan Pendidikan dan Sosial At Thoyyibun',
        judulHeader: 'Struktur Organisasi',
        subtitleHeader: 'Susunan pengurus dan struktur YAYASAN PENDIDIKAN DAN SOSIAL AT THOYYIBUN.',
        labelBreadcrumb: 'Yayasan (Pusat)',
        sectionTag: 'Tim Kami',
        sectionTitle: 'Dewan <span>Pengurus & Struktur</span>',
        sectionSub: 'Orang-orang yang berkomitmen memajukan pendidikan Islam.'
    },
    pondok: {
        id: 'pondok',
        nama: 'Pondok',
        namaLengkap: "Pondok Pesantren dan Madrasah AL-Qur'an Darul Falah",
        judulHeader: 'Struktur Pondok',
        subtitleHeader: "Susunan pengurus dan struktur Pondok Pesantren dan Madrasah AL-Qur'an Darul Falah.",
        labelBreadcrumb: 'Pondok',
        sectionTag: 'Tim Pondok',
        sectionTitle: 'Struktur <span>Pondok</span>',
        sectionSub: "Pengurus dan pengajar Pondok Pesantren dan Madrasah AL-Qur'an Darul Falah."
    },
    smp: {
        id: 'smp',
        nama: 'SMP',
        namaLengkap: 'SMP AL-Makin Islamic Krian',
        judulHeader: 'Struktur SMP',
        subtitleHeader: 'Susunan pengurus dan struktur SMP AL-Makin Islamic Krian.',
        labelBreadcrumb: 'SMP',
        sectionTag: 'Tim SMP',
        sectionTitle: 'Struktur <span>SMP</span>',
        sectionSub: 'Pengajar dan staf SMP AL-Makin Islamic Krian.'
    },
    ma: {
        id: 'ma',
        nama: 'MA',
        namaLengkap: 'Madrasah Diniyah Takmiliyah Darul Falah AL-Mubarok',
        judulHeader: 'Struktur MA',
        subtitleHeader: 'Susunan pengurus dan struktur Madrasah Diniyah Takmiliyah Darul Falah AL-Mubarok.',
        labelBreadcrumb: 'MA',
        sectionTag: 'Tim MA',
        sectionTitle: 'Struktur <span>MA</span>',
        sectionSub: 'Pengajar dan staf Madrasah Diniyah Takmiliyah Darul Falah AL-Mubarok.'
    },
    tpq: {
        id: 'tpq',
        nama: 'TPQ',
        namaLengkap: 'TPQ Darul Falah AL-Mubarok',
        judulHeader: 'Struktur TPQ',
        subtitleHeader: 'Susunan pengurus dan struktur TPQ Darul Falah AL-Mubarok.',
        labelBreadcrumb: 'TPQ',
        sectionTag: 'Tim TPQ',
        sectionTitle: 'Struktur <span>TPQ</span>',
        sectionSub: 'Pengajar dan staf TPQ Darul Falah AL-Mubarok.'
    },
    lksa: {
        id: 'lksa',
        nama: 'LKSA',
        namaLengkap: 'Lembaga Kesejahteraan Sosial Anak AT-Thoyyibun',
        judulHeader: 'Struktur LKSA',
        subtitleHeader: 'Susunan pengurus dan struktur Lembaga Kesejahteraan Sosial Anak AT-Thoyyibun.',
        labelBreadcrumb: 'LKSA',
        sectionTag: 'Tim LKSA',
        sectionTitle: 'Struktur <span>LKSA</span>',
        sectionSub: 'Pengurus dan pendamping Lembaga Kesejahteraan Sosial Anak AT-Thoyyibun.'
    }
};

// ============================================
// 2. STRUKTUR DATA
// Daftar staff dengan unitId sebagai filter
// Total: 43 data dummy (3 + 8 + 12 + 6 + 4 + 10)
// ============================================
const strukturData = [

    // ============================================
    // YAYASAN (PUSAT) — 3 orang
    // unitId: null
    // ============================================
    {
        id: 1,
        unitId: null,
        name: '[Nama Ketua Yayasan]',
        position: 'Ketua Yayasan',
        image: 'https://picsum.photos/seed/yayasan1/400/400',
        desc: 'Memimpin dan mengoordinasikan seluruh kegiatan yayasan.'
    },
    {
        id: 2,
        unitId: null,
        name: '[Nama Sekretaris Yayasan]',
        position: 'Sekretaris',
        image: 'https://picsum.photos/seed/yayasan2/400/400',
        desc: 'Mengelola administrasi dan surat-menyurat yayasan.'
    },
    {
        id: 3,
        unitId: null,
        name: '[Nama Bendahara Yayasan]',
        position: 'Bendahara',
        image: 'https://picsum.photos/seed/yayasan3/400/400',
        desc: 'Mengelola keuangan dan pembukuan yayasan.'
    },

    // ============================================
    // PONDOK — 8 orang (1 halaman penuh)
    // unitId: 'pondok'
    // ============================================
    {
        id: 4,
        unitId: 'pondok',
        name: '[Nama Pengasuh Pondok]',
        position: 'Pengasuh Pondok',
        image: 'https://picsum.photos/seed/pondok1/400/400',
        desc: 'Membimbing dan mengasuh santri Pondok Pesantren.'
    },
    {
        id: 5,
        unitId: 'pondok',
        name: '[Nama Mudir Pondok]',
        position: 'Mudir (Direktur)',
        image: 'https://picsum.photos/seed/pondok2/400/400',
        desc: 'Memimpin operasional harian pondok pesantren.'
    },
    {
        id: 6,
        unitId: 'pondok',
        name: '[Nama Kepala Madrasah Diniyah]',
        position: 'Kepala Madrasah Diniyah',
        image: 'https://picsum.photos/seed/pondok3/400/400',
        desc: 'Mengelola program pendidikan diniyah pondok.'
    },
    {
        id: 7,
        unitId: 'pondok',
        name: '[Nama Koordinator Tahfidz]',
        position: 'Koordinator Tahfidz',
        image: 'https://picsum.photos/seed/pondok4/400/400',
        desc: "Mengoordinasikan program hafalan Al-Qur'an santri."
    },
    {
        id: 8,
        unitId: 'pondok',
        name: '[Nama Ustadz 1]',
        position: 'Ustadz Pengajar',
        image: 'https://picsum.photos/seed/pondok5/400/400',
        desc: 'Pengajar kitab kuning dan ilmu agama.'
    },
    {
        id: 9,
        unitId: 'pondok',
        name: '[Nama Ustadz 2]',
        position: 'Ustadz Pengajar',
        image: 'https://picsum.photos/seed/pondok6/400/400',
        desc: 'Pengajar tahsin dan tahfidz Al-Qur\'an.'
    },
    {
        id: 10,
        unitId: 'pondok',
        name: '[Nama Ustadzah 1]',
        position: 'Ustadzah Pengajar',
        image: 'https://picsum.photos/seed/pondok7/400/400',
        desc: 'Pengajar ilmu agama untuk santri putri.'
    },
    {
        id: 11,
        unitId: 'pondok',
        name: '[Nama Staf Pondok]',
        position: 'Staf Administrasi',
        image: 'https://picsum.photos/seed/pondok8/400/400',
        desc: 'Mengelola administrasi dan kesekretariatan pondok.'
    },

    // ============================================
    // SMP — 12 orang (2 halaman: 8 + 4)
    // unitId: 'smp'
    // ============================================
    {
        id: 12,
        unitId: 'smp',
        name: '[Nama Kepala SMP]',
        position: 'Kepala Sekolah',
        image: 'https://picsum.photos/seed/smp1/400/400',
        desc: 'Memimpin dan mengelola seluruh kegiatan SMP.'
    },
    {
        id: 13,
        unitId: 'smp',
        name: '[Nama Wakil Kepala SMP]',
        position: 'Wakil Kepala Sekolah',
        image: 'https://picsum.photos/seed/smp2/400/400',
        desc: 'Membantu kepala sekolah dalam bidang akademik.'
    },
    {
        id: 14,
        unitId: 'smp',
        name: '[Nama Guru 1]',
        position: 'Guru Matematika',
        image: 'https://picsum.photos/seed/smp3/400/400',
        desc: 'Pengajar mata pelajaran Matematika.'
    },
    {
        id: 15,
        unitId: 'smp',
        name: '[Nama Guru 2]',
        position: 'Guru Bahasa Indonesia',
        image: 'https://picsum.photos/seed/smp4/400/400',
        desc: 'Pengajar mata pelajaran Bahasa Indonesia.'
    },
    {
        id: 16,
        unitId: 'smp',
        name: '[Nama Guru 3]',
        position: 'Guru Bahasa Inggris',
        image: 'https://picsum.photos/seed/smp5/400/400',
        desc: 'Pengajar mata pelajaran Bahasa Inggris.'
    },
    {
        id: 17,
        unitId: 'smp',
        name: '[Nama Guru 4]',
        position: 'Guru IPA',
        image: 'https://picsum.photos/seed/smp6/400/400',
        desc: 'Pengajar mata pelajaran Ilmu Pengetahuan Alam.'
    },
    {
        id: 18,
        unitId: 'smp',
        name: '[Nama Guru 5]',
        position: 'Guru IPS',
        image: 'https://picsum.photos/seed/smp7/400/400',
        desc: 'Pengajar mata pelajaran Ilmu Pengetahuan Sosial.'
    },
    {
        id: 19,
        unitId: 'smp',
        name: '[Nama Guru 6]',
        position: 'Guru PAI',
        image: 'https://picsum.photos/seed/smp8/400/400',
        desc: 'Pengajar mata pelajaran Pendidikan Agama Islam.'
    },
    {
        id: 20,
        unitId: 'smp',
        name: '[Nama Guru 7]',
        position: 'Guru Tahfidz',
        image: 'https://picsum.photos/seed/smp9/400/400',
        desc: "Pengajar program tahfidz Al-Qur'an."
    },
    {
        id: 21,
        unitId: 'smp',
        name: '[Nama Guru 8]',
        position: 'Guru Seni Budaya',
        image: 'https://picsum.photos/seed/smp10/400/400',
        desc: 'Pengajar mata pelajaran Seni Budaya.'
    },
    {
        id: 22,
        unitId: 'smp',
        name: '[Nama Staf TU]',
        position: 'Staf Tata Usaha',
        image: 'https://picsum.photos/seed/smp11/400/400',
        desc: 'Mengelola administrasi dan tata usaha sekolah.'
    },
    {
        id: 23,
        unitId: 'smp',
        name: '[Nama Staf Perpustakaan]',
        position: 'Staf Perpustakaan',
        image: 'https://picsum.photos/seed/smp12/400/400',
        desc: 'Mengelola perpustakaan dan literasi sekolah.'
    },

    // ============================================
    // MA — 6 orang (1 halaman, tidak full)
    // unitId: 'ma'
    // ============================================
    {
        id: 24,
        unitId: 'ma',
        name: '[Nama Kepala MA]',
        position: 'Kepala Madrasah',
        image: 'https://picsum.photos/seed/ma1/400/400',
        desc: 'Memimpin dan mengelola seluruh kegiatan madrasah.'
    },
    {
        id: 25,
        unitId: 'ma',
        name: '[Nama Wakil Kepala MA]',
        position: 'Wakil Kepala Madrasah',
        image: 'https://picsum.photos/seed/ma2/400/400',
        desc: 'Membantu kepala madrasah dalam bidang kurikulum.'
    },
    {
        id: 26,
        unitId: 'ma',
        name: '[Nama Guru MA 1]',
        position: 'Guru Fiqih',
        image: 'https://picsum.photos/seed/ma3/400/400',
        desc: 'Pengajar mata pelajaran Fiqih.'
    },
    {
        id: 27,
        unitId: 'ma',
        name: '[Nama Guru MA 2]',
        position: 'Guru Bahasa Arab',
        image: 'https://picsum.photos/seed/ma4/400/400',
        desc: 'Pengajar mata pelajaran Bahasa Arab.'
    },
    {
        id: 28,
        unitId: 'ma',
        name: '[Nama Guru MA 3]',
        position: "Guru Al-Qur'an Hadits",
        image: 'https://picsum.photos/seed/ma5/400/400',
        desc: "Pengajar mata pelajaran Al-Qur'an Hadits."
    },
    {
        id: 29,
        unitId: 'ma',
        name: '[Nama Staf MA]',
        position: 'Staf Administrasi',
        image: 'https://picsum.photos/seed/ma6/400/400',
        desc: 'Mengelola administrasi madrasah.'
    },

    // ============================================
    // TPQ — 4 orang (tidak full)
    // unitId: 'tpq'
    // ============================================
    {
        id: 30,
        unitId: 'tpq',
        name: '[Nama Kepala TPQ]',
        position: 'Kepala TPQ',
        image: 'https://picsum.photos/seed/tpq1/400/400',
        desc: 'Memimpin dan mengelola kegiatan TPQ.'
    },
    {
        id: 31,
        unitId: 'tpq',
        name: '[Nama Ustadzah TPQ 1]',
        position: 'Ustadzah Pengajar',
        image: 'https://picsum.photos/seed/tpq2/400/400',
        desc: "Pengajar baca tulis Al-Qur'an untuk anak-anak."
    },
    {
        id: 32,
        unitId: 'tpq',
        name: '[Nama Ustadzah TPQ 2]',
        position: 'Ustadzah Pengajar',
        image: 'https://picsum.photos/seed/tpq3/400/400',
        desc: "Pengajar hafalan surat pendek Al-Qur'an."
    },
    {
        id: 33,
        unitId: 'tpq',
        name: '[Nama Staf TPQ]',
        position: 'Staf Administrasi',
        image: 'https://picsum.photos/seed/tpq4/400/400',
        desc: 'Mengelola administrasi dan absensi santri TPQ.'
    },

    // ============================================
    // LKSA — 10 orang (2 halaman: 8 + 2)
    // unitId: 'lksa'
    // ============================================
    {
        id: 34,
        unitId: 'lksa',
        name: '[Nama Ketua LKSA]',
        position: 'Ketua LKSA',
        image: 'https://picsum.photos/seed/lksa1/400/400',
        desc: 'Memimpin dan mengelola Lembaga Kesejahteraan Sosial Anak.'
    },
    {
        id: 35,
        unitId: 'lksa',
        name: '[Nama Sekretaris LKSA]',
        position: 'Sekretaris',
        image: 'https://picsum.photos/seed/lksa2/400/400',
        desc: 'Mengelola administrasi dan kesekretariatan LKSA.'
    },
    {
        id: 36,
        unitId: 'lksa',
        name: '[Nama Bendahara LKSA]',
        position: 'Bendahara',
        image: 'https://picsum.photos/seed/lksa3/400/400',
        desc: 'Mengelola keuangan dan pembukuan LKSA.'
    },
    {
        id: 37,
        unitId: 'lksa',
        name: '[Nama Pendamping 1]',
        position: 'Pendamping Anak',
        image: 'https://picsum.photos/seed/lksa4/400/400',
        desc: 'Mendampingi dan membina anak asuh LKSA.'
    },
    {
        id: 38,
        unitId: 'lksa',
        name: '[Nama Pendamping 2]',
        position: 'Pendamping Anak',
        image: 'https://picsum.photos/seed/lksa5/400/400',
        desc: 'Mendampingi dan membina anak asuh LKSA.'
    },
    {
        id: 39,
        unitId: 'lksa',
        name: '[Nama Pengajar LKSA 1]',
        position: 'Pengajar',
        image: 'https://picsum.photos/seed/lksa6/400/400',
        desc: 'Pengajar bimbingan belajar untuk anak asuh.'
    },
    {
        id: 40,
        unitId: 'lksa',
        name: '[Nama Pengajar LKSA 2]',
        position: 'Pengajar',
        image: 'https://picsum.photos/seed/lksa7/400/400',
        desc: 'Pengajar ilmu agama untuk anak asuh.'
    },
    {
        id: 41,
        unitId: 'lksa',
        name: '[Nama Staf Sosial]',
        position: 'Staf Sosial',
        image: 'https://picsum.photos/seed/lksa8/400/400',
        desc: 'Mengelola program sosial dan kesejahteraan anak.'
    },
    {
        id: 42,
        unitId: 'lksa',
        name: '[Nama Staf Kesehatan]',
        position: 'Staf Kesehatan',
        image: 'https://picsum.photos/seed/lksa9/400/400',
        desc: 'Mengelola kesehatan dan gizi anak asuh.'
    },
    {
        id: 43,
        unitId: 'lksa',
        name: '[Nama Staf Administrasi LKSA]',
        position: 'Staf Administrasi',
        image: 'https://picsum.photos/seed/lksa10/400/400',
        desc: 'Mengelola administrasi dan dokumentasi LKSA.'
    }
];