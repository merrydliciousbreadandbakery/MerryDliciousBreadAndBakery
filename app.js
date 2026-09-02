// Data Gambar Produk Sesuai Penamaan File Terbaru & Formasi 2 - 3 - 3 - 2
const kelompokProduk = [
  // --- BARIS 1: 2 GAMBAR ---
  {
    layout: 2,
    foto: ['assets/Produk 1.jpg', 'assets/Produk 2.jpg'],
    caption: '🥐 Roti panggang hangat fresh dari oven tiap pagi, teksturnya empuk sampai gigitan terakhir.'
  },
  
  // --- BARIS 2: 3 GAMBAR (3.1, 3.2, 3.3) ---
  {
    layout: 3,
    foto: ['assets/Produk 3.1.jpg', 'assets/Produk 3.2.jpg', 'assets/Produk 3.3.jpg'],
    caption: '☕ Cocok banget buat nemenin waktu santai, ngeteh sore, atau sarapan praktis sebelum aktivitas.'
  },

  // --- BARIS 3: 3 GAMBAR (4.1, 4.2, 4.3) ---
  {
    layout: 3,
    foto: ['assets/Produk 4.1.jpg', 'assets/Produk 4.2.jpg', 'assets/Produk 4.3.jpg'],
    caption: '🎂 Pilihan bolu, custom cake ulang tahun, & roll cake cantik dengan rasa manis yang pas gak bikin enek.'
  },

  // --- BARIS 4: 2 GAMBAR (5.1, 5.2) ---
  {
    layout: 2,
    foto: ['assets/Produk 5.1.jpg', 'assets/Produk 5.2.jpg'],
    caption: '🎁 Bingung cari hadiah? Pilihan paket hampers & gift box estetik kita siap dikirim buat teman/keluarga!'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const containerKatalog = document.getElementById('katalog-roti');
  if (!containerKatalog) return;

  containerKatalog.innerHTML = '';

  kelompokProduk.forEach((group) => {
    const sectionWrapper = document.createElement('div');
    sectionWrapper.className = 'space-y-4 fade-up mb-12';

    // Set kolom grid otomatis sesuai layout (2 foto = grid-cols-2, 3 foto = grid-cols-3)
    const gridCols = group.layout === 3 
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
      : 'grid-cols-1 sm:grid-cols-2';

    // Render Gambar
    const htmlGambar = group.foto.map(imgSrc => `
      <div class="bg-white p-3 rounded-[2.5rem] card-roti">
        <img src="${imgSrc}" 
             onerror="this.onerror=null; this.src='${imgSrc.replace('.jpg', '.png')}';" 
             alt="Produk Merry D'licious" 
             class="w-full h-64 md:h-72 object-cover rounded-[2rem] foto-zoom">
      </div>
    `).join('');

    sectionWrapper.innerHTML = `
      <!-- Grid Foto (Dinamis 2 atau 3 Kolom) -->
      <div class="grid ${gridCols} gap-6 items-center">
        ${htmlGambar}
      </div>

      <!-- Banner Caption Alami -->
      <div class="bg-[#f8f1e7] border border-amber-200/80 py-3.5 px-6 rounded-2xl text-center shadow-sm">
        <p class="text-[#4a3228] font-medium text-xs md:text-sm tracking-wide leading-relaxed">
          ${group.caption}
        </p>
      </div>
    `;

    containerKatalog.appendChild(sectionWrapper);
  });

  // Fade Up Animation Scroll
  const elementsFade = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('muncul');
      }
    });
  }, { threshold: 0.1 });

  elementsFade.forEach(el => observer.observe(el));
});