// number wa
const WHATSAPP_NUMBER = "6289632127188";
// variables form modal
const formService = document.getElementById("form-service");
const inputName = document.getElementById("name");
const phone = document.getElementById("phone");
const optionServices = document.getElementById("optionServices");
const message = document.getElementById("message");

formService.addEventListener("submit", (e) => {
  e.preventDefault();

  const templateMessage = `
  Halo, saya ingin bertanya tentang layanan ${optionServices.value} 
  
  Nama: ${inputName.value} 
  No. HP: ${phone.value} 
  Jenis Layanan: ${optionServices.value} 
  Detail Tambahan Pesan: ${message.value}
  `;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    templateMessage,
  )}`;

  window.open(url, "_blank");
});
