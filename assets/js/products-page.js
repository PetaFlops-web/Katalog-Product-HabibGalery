document.addEventListener("DOMContentLoaded", () => {
  // DATA PRODUK
  const productData = [
    {
      id: 1,
      name: "Rok lilit Tabikseri",
      subtitle: "Rok lilit tapis",
      category: "kain",
      tags: "Rok lilit tapis",
      price: "Rp350.000",
      oldPrice: "",
      label: "Best Seller",
      labelStyle: "highlight",
      image: "assets/img/RoklilitTabikseri.png",
      description:
        "Rok lilit TaBik (Tapis Batik) adalah perpaduan elegan antara keindahan batik dan kehalusan sulaman tapis khas Lampung. Terbuat dari bahan berkualitas tinggi, cocok untuk berbagai acara formal maupun santai.",
    },
    {
      id: 2,
      name: "Kain Tapis Antik Raja Medal",
      subtitle: "Kain Tapis",
      category: "kain",
      tags: "Kain",
      price: "Rp1.250.000 – Rp2.000.000",
      oldPrice: "",
      label: "New",
      labelStyle: "primary",
      image: "assets/img/KainTapisAntik.png",
      description:
        "Kain Tapis Antik Raja Medal dibuat oleh pengrajin berpengalaman, dengan motif khas yang mencerminkan keindahan budaya Lampung.",
    },
    {
      id: 3,
      name: "Kain Tapis Lampung Biru Sulaman Benang Emas Antik",
      subtitle: "Kain Tapis",
      category: "kain",
      tags: "peci",
      price: "Rp2.000.000",
      oldPrice: "",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2025/10/%C2%A9alyntapis_kaintapis-biru-kapal.png.webp",
      description:
        "Kain tapis Lampung biru dengan sulaman benang emas antik, cocok untuk acara resmi, koleksi busana adat, maupun hadiah eksklusif.",
    },
    {
      id: 4,
      name: "Kain Tapis Lampung Motif Bintang Penuntun",
      subtitle: "kain tapis",
      category: "kain",
      tags: "tas tangan tapis",
      price: "Rp2.000.000",
      oldPrice: "",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2025/09/%C2%A9alyntapis_20250829_101550_0007.png.webp",
      description:
        "Tas dengan bahan goni sintetis yang dipadukan tapis Lampung, memberikan tampilan yang elegan dan unik.",
    },
    {
      id: 5,
      name: "Kain Tapis cantik Biru",
      subtitle: "kain tapis",
      category: "kain",
      tags: "Kain Tapis",
      price: "Rp2.000.000",
      oldPrice: "",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2024/03/%C2%A9alyntapis_kaintapis_cantik_biru2.png.webp",
      description:
        "Kain tapis cantik dengan dominan warna biru, disulam dengan motif khas Lampung yang elegan.",
    },
    {
      id: 6,
      name: "Totebag Tapis Lampung",
      subtitle: "Totebag",
      category: "totebag",
      tags: "Totebag",
      price: "Rp53.000 – Rp2.500.000",
      oldPrice: "",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2025/08/%C2%A9alyntapis_totebag-custom-logo-instansi.png.webp",
      description:
        "Totebag Tapis Lampung dengan desain modern, cocok untuk kebutuhan harian maupun acara khusus.",
    },
    {
      id: 7,
      name: "Totebag Tapis tali sumbu",
      subtitle: "Totebag",
      category: "totebag",
      tags: "Totebag",
      price: "Rp100.000",
      oldPrice: "",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2024/12/%C2%A9alyntapis_totebag_talisumbu.png.webp",
      description:
        "Totebag tali sumbu dengan motif Sulam Tapis, memiliki ruang cukup besar dan penutup resleting untuk menjaga barang tetap aman.",
    },
    {
      id: 8,
      name: "Tas Etnik Tapis (Batok Kelapa)",
      subtitle: "Tas Tapis",
      category: "totebag",
      tags: "Totebag",
      price: "Rp215.000",
      oldPrice: "",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2024/08/%C2%A9alyntapis_tasetnik_tapis_batokkelapa2.png.webp",
      description:
        "Kerajinan tangan dari batok kelapa yang disulap menjadi produk tas Etnik berkombinasi dengan corak atau motif sulaman tapis berbahan batik khas Lampung yang disulam tradisional oleh pengrajin Tapis Lampung Berukuran mini sangat cocok untuk kamu yang memiliki nilai estetika tinggi..",
    },
    {
      id: 9,
      name: "Table Runner Tapis Kecil",
      subtitle: "Aksesoris",
      category: "Aksesoris",
      tags: "Aksesoris",
      price: "Rp100.000",
      oldPrice: "",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2025/12/%C2%A9alyntapis_20251202_133208_0000.png.webp",
      description:
        "Percantik meja anda dengan sentuhan etnik elegan melalui Taplak Meja Tapis Merah berukuran 75 x 30 cm",
    },
    {
      id: 10,
      name: "Kalung Tapis Etnik",
      subtitle: "Aksesoris",
      category: "Aksesoris",
      tags: "Aksesoris",
      price: "Rp35.000",
      oldPrice: "",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2021/02/%C2%A9alyntapis_list_kalung_tapis.png.webp",
      description:
        "Aksesoris Fashion yg dijadikan Kalung atau List leher trendy bermotif Sulaman Tapis dengan kancing kedua bagian ujungnyaa. Dapat digunakan untuk pria maupun wanita. Desain simple, elegan dan stylish. List Tapis ini akan membuat kamu terlihat lebih gaya serta tampil lebih elegan setiap kali menggunakannya.",
    },
    {
      id: 11,
      name: "Pouch Kartu Tapis",
      subtitle: "Aksesoris",
      category: "Aksesoris",
      tags: "Aksesoris",
      price: "Rp125.000",
      oldPrice: "",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2021/02/%C2%A9alyntapis_pouch_kartu_tapis.png.webp",
      description:
        "Dompet atau Wrislet berbahan kain tenun/salur merah bermotif Sulam Tapis benang gold dengan penutup utama Resleting… Dapat memuat Handphone, Uang, Kontak kendaraan, dll.Simple serta Ringan dibawa kemana saja Tali tentengdapat dilepas…",
    },
    {
      id: 12,
      name: "Hiasan Dinding Tapis Mini",
      subtitle: "Home Dekor",
      category: "dekor",
      tags: "dekor",
      price: "Rp35.000 – Rp1.750.000",
      oldPrice: "",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2025/06/%C2%A9-alyntapis_Hiasan_Dinding_Tapis_Lampung_10x18.png.webp",
      description:
        "Lengkapi suasana ruangan anda dengan sentuhan budaya melalui Hiasan Dinding Tapis Mini Lampung. Souvenir ekslusif yang terinspirasi dari kekayaan budaya dengan ukuran 10,5 cm x 18 cm dan dilengkapi tali gantung, produk ini siap langsung dipajang di dinding rumah, kamar, kantor, atau ruang tamu, hingga galeri seni.",
    },
    {
      id: 13,
      name: "Plakat Tapis Siger Kuningan",
      subtitle: "Home Dekor",
      category: "dekor",
      tags: "dekor",
      price: "Rp750.000 – Rp1.000.000",
      oldPrice: "",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2024/10/%C2%A9alyntapis_plakat_tapis_siger_kuningan_m.png.webp",
      description:
        "Menggabungkan estetika budaya lokal dengan keindahan modern, hadirlah Plakat Tapis, melalui motif inti metode sulam tangan (sulam tapis) yang menampilkan kilauan benang kristal gradasi warna serta ukiran siger kuningan yang dapat menambah kesan mewah dan ekslusif.",
    },
    {
      id: 14,
      name: "Hiasan Dinding Tapis – Kayu Gantung",
      subtitle: "Home Dekor",
      category: "dekor",
      tags: "dekor",
      price: "Rp600.000",
      oldPrice: "",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2024/03/%C2%A9alyntapis_Hiasan_Gantung_Tapis_Double.png.webp",
      description:
        "Hiasan dinding bermotif Kapal berisikan karakter manusia terbuat dari sulaman tapis benang kristal. Dijual per-set dengan bingkai/pigura yang terbuat dari kayu pilihan dengan proses teknik pembakaran sehingga menghasilkan kayu dengan warna yg berbeda serta lebih ringan dari kayu lainnya.",
    },
    {
      id: 15,
      name: "Hiasan Dinding Benang Asli",
      subtitle: "Home Dekor",
      category: "dekor",
      tags: "dekor",
      price: "Rp275.000",
      oldPrice: "",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2023/09/%C2%A9alyntapis_hiasandinding_tapis_benangasli.png.webp",
      description:
        "Hiasan dinding bermotif bintang terbuat dari sulaman tapis benang asli (L30). Dijual per-set dengan bingkai/pigura motif identik Lampung yang terbuat dari kayu pilihan, sehingga memudahkan untuk dibawa sebagai bingkisan souvenir, cenderamata, maupun home decor untuk rumah. Tidak khawatir perlu rusak diperjalanan, tidak memakan banyak tempat, dan ringan.",
    },
    {
      id: 16,
      name: "Peci Kapal Sungkit",
      subtitle: "Peci Tapis",
      category: "peci",
      tags: "dekor",
      price: "Rp275.000",
      oldPrice: "",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2022/03/%C2%A9alyntapis_peci_kapal_sungkit3.png.webp",
      description:
        "Peci Kiket Sungkit yang digunakan sebagai penutup kepala Pria berbahankain sungkit.",
    },
    {
      id: 17,
      name: "Souvenir Siger-Gajah",
      subtitle: "Souvenir",
      category: "souvenir",
      tags: "dekor",
      price: "Rp45.000",
      oldPrice: "Rp50.000",
      label: "",
      labelStyle: "",
      image:
        "https://alyntapis.com/wp-content/uploads/2022/12/%C2%A9alyntapis_souvenir_cenderamata_miniatur_siger_gajah.png.webp",
      description:
        "Souvenir dengan bentuk Gajah dan Siger Khas Lampung. Terbuat dari kayu, dapat digunakan sebagai hiasan meja kantor, untuk meletakkan Pen atau Pensil.",
    },
  ];

  // ELEMENT DOM
  const searchInput = document.getElementById("product-search-input");
  const productGrid = document.getElementById("product-grid");
  const emptyState = document.getElementById("product-search-empty");
  const categoryButtons = document.querySelectorAll(".category-pill");

  const pagination = document.getElementById("product-pagination");
  const prevBtn = document.getElementById("product-prev");
  const nextBtn = document.getElementById("product-next");
  const pageInfo = document.getElementById("product-page-info");

  const itemsPerPage = 4;
  let activeCategory = "all";
  let currentPage = 1;
  let productCards = [];
  let filteredCards = [];
  let totalPages = 1;

  const params = new URLSearchParams(window.location.search);
  const keyword = (params.get("search") || "").trim().toLowerCase();

  // BUAT CARD
  const createProductCard = (product) => {
    const card = document.createElement("div");
    card.className =
      "group bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col";
    card.dataset.productCard = "";
    card.dataset.productName = product.name;
    card.dataset.productTags = product.tags || "";
    card.dataset.productCategory = product.category || "";
    card.dataset.productPrice = product.price || "";
    card.dataset.productOldPrice = product.oldPrice || "";
    card.dataset.productImage = product.image || "";
    card.dataset.productDesc = product.description || "";

    const labelHtml = product.label
      ? `
        <span class="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-semibold 
          ${
            product.labelStyle === "primary"
              ? "bg-primary/90 text-white"
              : "bg-[#F5F5DC]/90 text-[#243B6B]"
          }">
          ${product.label}
        </span>
      `
      : "";

    card.innerHTML = `
      <div class="relative h-40 md:h-44 overflow-hidden">
        <img src="${product.image}" alt="${product.name}"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        ${labelHtml}
      </div>
      <div class="p-3 flex-1 flex flex-col">
        <p class="text-[10px] uppercase tracking-wide text-gray-400 mb-1">
          ${product.subtitle || ""}
        </p>
        <h3 class="font-semibold text-sm text-gray-800 mb-1 line-clamp-2">
          ${product.name}
        </h3>
        <p class="text-[11px] text-gray-500 mb-3 line-clamp-2">
          ${product.description || ""}
        </p>
        <div class="mt-auto flex items-center justify-between">
          <div>
            <div class="text-sm font-bold text-[#243B6B]">${product.price}</div>
          </div>
          <button type="button"
            class="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#243B6B] text-white hover:bg-[#1F2C5C] transition js-open-product-modal">
            Detail
          </button>
        </div>
      </div>
    `;
    return card;
  };

  // INIT PRODUCTS
  const initProducts = () => {
    if (!productGrid) return;

    productGrid.innerHTML = "";

    productData.forEach((product) => {
      const card = createProductCard(product);
      productGrid.appendChild(card);
    });

    productCards = Array.from(document.querySelectorAll("[data-product-card]"));
    filteredCards = [...productCards];
  };

  const renderPage = () => {
    productCards.forEach((card) => {
      card.classList.add("hidden");
    });

    if (!filteredCards.length) {
      if (emptyState) emptyState.classList.remove("hidden");
      if (pagination) pagination.classList.add("hidden");
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    totalPages = Math.max(1, Math.ceil(filteredCards.length / itemsPerPage));
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    filteredCards.slice(start, end).forEach((card) => {
      card.classList.remove("hidden");
    });

    if (pagination) {
      pagination.classList.toggle("hidden", totalPages <= 1);
      if (pageInfo)
        pageInfo.textContent = `Halaman ${currentPage} dari ${totalPages}`;
      if (prevBtn) prevBtn.disabled = currentPage === 1;
      if (nextBtn) nextBtn.disabled = currentPage === totalPages;
    }
  };

  const runProductFilter = (resetPage = true) => {
    const query = (searchInput?.value || "").trim().toLowerCase();
    filteredCards = [];

    productCards.forEach((card) => {
      const name = (card.dataset.productName || "").toLowerCase();
      const tags = (card.dataset.productTags || "").toLowerCase();
      const category = (card.dataset.productCategory || "").toLowerCase();

      const matchSearch =
        !query || name.includes(query) || tags.includes(query);
      const matchCategory =
        activeCategory === "all" || category === activeCategory;

      if (matchSearch && matchCategory) {
        filteredCards.push(card);
      }
    });

    if (resetPage) currentPage = 1;
    renderPage();
  };

  // INISIALISASI
  initProducts();

  if (searchInput && keyword) {
    searchInput.value = keyword;
  }
  runProductFilter(true);

  if (keyword) {
    const cleanUrl = window.location.pathname + window.location.hash;
    window.history.replaceState(null, "", cleanUrl);
  }

  // EVENTS
  if (searchInput) {
    searchInput.addEventListener("input", () => runProductFilter(true));
  }

  if (categoryButtons.length) {
    categoryButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.filterCategory || "all";

        categoryButtons.forEach((b) => {
          const isActive = b === btn;
          if (isActive) {
            b.classList.add("bg-[#243B6B]", "text-white", "border-[#243B6B]");
            b.classList.remove("border-gray-300", "text-gray-600");
          } else {
            b.classList.remove(
              "bg-[#243B6B]",
              "text-white",
              "border-[#243B6B]"
            );
            b.classList.add("border-gray-300", "text-gray-600");
          }
        });

        runProductFilter(true);
      });
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderPage();
      }
    });
  }

  // RESET FILTER
  const resetBtn = document.getElementById("product-reset-btn");
  const resetFilters = () => {
    activeCategory = "all";
    currentPage = 1;
    if (searchInput) searchInput.value = "";

    categoryButtons.forEach((b) => {
      b.classList.remove("bg-[#243B6B]", "text-white", "border-[#243B6B]");
      b.classList.add("border-gray-300", "text-gray-600");
      if (b.dataset.filterCategory === "all") {
        b.classList.add("bg-[#243B6B]", "text-white", "border-[#243B6B]");
        b.classList.remove("border-gray-300", "text-gray-600");
      }
    });

    runProductFilter(true);
  };

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      resetFilters();
      const cleanUrl = window.location.pathname + window.location.hash;
      window.history.replaceState(null, "", cleanUrl);
    });
  }
});
