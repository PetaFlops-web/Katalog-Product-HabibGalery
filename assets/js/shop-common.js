const WHATSAPP_NUMBER = "6289632127188";
const cart = [];

const cartCheckoutBtn = document.getElementById("cart-checkout-btn");
const cartCountBadge = document.getElementById("cart-count-badge");

const updateCartBadge = () => {
  if (!cartCountBadge) return;
  const totalQty = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
  cartCountBadge.textContent = totalQty;
};

const addToCart = (product) => {
  const existing = cart.find((item) => item.name === product.name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartBadge();
};

const formatRupiahNumber = (priceText) => {
  const digits = (priceText || "").replace(/[^\d]/g, "");
  return digits ? parseInt(digits, 10) : 0;
};

const buildWhatsAppMessage = () => {
  if (!cart.length) {
    return "Halo, saya ingin menanyakan produk Fashion Tapis.";
  }

  let message = "Halo, saya ingin memesan produk berikut:\n\n";
  let totalQty = 0;
  let totalPrice = 0;

  cart.forEach((item, idx) => {
    const qty = item.qty || 1;
    const priceNumber = formatRupiahNumber(item.price);
    const subTotal = priceNumber * qty;

    totalQty += qty;
    totalPrice += subTotal;

    message += `${idx + 1}. ${item.name} (${qty}x - ${item.price})\n`;
  });

  message += `\nTotal item: ${totalQty}`;
  if (totalPrice > 0) {
    message += `\nPerkiraan total harga: Rp${totalPrice.toLocaleString(
      "id-ID"
    )}`;
  }

  message += "\n\nMohon info ketersediaan stok dan detail pengiriman.";
  return message;
};

if (cartCheckoutBtn) {
  cartCheckoutBtn.addEventListener("click", () => {
    const text = buildWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  });
}

// MODAL PRODUK
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("product-modal");
  const body = document.body;

  if (!modal) return;

  const modalTitle = modal.querySelector("[data-modal-title]");
  const modalPrice = modal.querySelector("[data-modal-price]");
  const modalOldPrice = modal.querySelector("[data-modal-old-price]");
  const modalImage = modal.querySelector("[data-modal-image]");
  const modalDesc = modal.querySelector("[data-modal-desc]");
  const closeBtn = modal.querySelector("[data-modal-close]");
  const overlay = modal.querySelector("[data-modal-overlay]");
  const modalAddToCartBtn = document.getElementById("modal-add-to-cart");

  let activeProduct = null;

  const openModal = (data) => {
    activeProduct = {
      name: data.name || "",
      price: data.price || "",
      oldPrice: data.oldPrice || "",
      image: data.image || "",
      desc: data.desc || "",
    };

    if (modalTitle) modalTitle.textContent = activeProduct.name;
    if (modalPrice) modalPrice.textContent = activeProduct.price || "Rp0";

    if (modalOldPrice) {
      if (activeProduct.oldPrice) {
        modalOldPrice.textContent = activeProduct.oldPrice;
        modalOldPrice.classList.remove("invisible");
      } else {
        modalOldPrice.textContent = "";
        modalOldPrice.classList.add("invisible");
      }
    }

    if (modalImage) {
      modalImage.src = activeProduct.image || "";
      modalImage.alt = activeProduct.name || "Produk Fashion";
    }

    if (modalDesc) {
      modalDesc.textContent = activeProduct.desc || "";
    }

    modal.classList.remove("hidden");
    modal.classList.add("flex");

    requestAnimationFrame(() => {
      modal.classList.add("modal-active");
    });

    body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    modal.classList.remove("modal-active");
    body.classList.remove("overflow-hidden");
    setTimeout(() => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      activeProduct = null;
    }, 250);
  };

  // Event delegation untuk tombol Detail
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-open-product-modal");
    if (!btn) return;

    // Coba ambil dari card,  pakai button-nya langsung
    const source = btn.closest("[data-product-card]") || btn;

    const data = {
      name: source.dataset.productName || "",
      price: source.dataset.productPrice || "",
      oldPrice: source.dataset.productOldPrice || "",
      image: source.dataset.productImage || "",
      desc: source.dataset.productDesc || "",
    };

    openModal(data);
  });

  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener("click", () => {
      if (!activeProduct) return;
      addToCart(activeProduct);
      closeModal();
    });
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (overlay) overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
});
