// Menü butonlarıyla içerik bölümleri geçişi
const buttons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll(".content-section");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Tüm bölümleri gizle
        sections.forEach(section => section.classList.add("hidden"));

        // Seçilen bölümü göster
        const target = document.querySelector(btn.getAttribute("data-target"));
        target.classList.remove("hidden");
    });
});

// Öğrenci Kayıt Formu
const studentRegisterForm = document.getElementById("student-register-form");
studentRegisterForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Öğrenci kaydınız başarıyla tamamlandı!");
    document.getElementById("student-register").classList.add("hidden"); // Kayıt sonrası sekmeyi gizle
    document.getElementById("waste-entry").classList.remove("hidden"); // Veri girişi sekmesini göster
});

// Okul Kayıt Formu
const schoolRegisterForm = document.getElementById("school-register-form");
schoolRegisterForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Okul kaydınız başarıyla tamamlandı!");
    document.getElementById("school-register").classList.add("hidden"); // Kayıt sonrası sekmeyi gizle
    document.getElementById("student-register").classList.remove("hidden"); // Öğrenci kaydı sekmesini göster
});

// Veri Girişi Formu
const wasteEntryForm = document.getElementById("waste-entry-form");
wasteEntryForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Form verilerini al
    const studentName = wasteEntryForm.querySelector('input[placeholder="Öğrenci Adı Soyadı"]').value;
    const wasteType = wasteEntryForm.querySelector('input[placeholder="Atık Türü"]').value;
    const wasteAmount = wasteEntryForm.querySelector('input[placeholder="Atık Miktarı (kg)"]').value;

    // Verileri ekrana yazdır
    const totalWaste = document.getElementById("totalWaste");
    const wasteTypes = document.getElementById("wasteTypes");

    // Verileri güncelle
    totalWaste.textContent = wasteAmount + " kg";
    wasteTypes.textContent = `${wasteType} - ${wasteAmount} kg`;

    alert("Veri başarıyla kaydedildi!");

    // Verilerin girildiği sayfayı gizle
    document.getElementById("waste-entry").classList.add("hidden");
    // Öğrencinin verilerini görmek için yeni bir sayfa göster
    document.getElementById("student-data").classList.remove("hidden");
});

// Veri Görüntüleme Sayfası
const viewDataButton = document.getElementById("viewDataBtn");
viewDataButton.addEventListener("click", function() {
    const totalWaste = document.getElementById("totalWaste");
    const totalPoints = document.getElementById("totalPoints");
    const wasteTypes = document.getElementById("wasteTypes");

    // Bu verileri öğrenciye göstermek için ekrana yerleştirebilirsiniz
    alert(`Toplam Atık: ${totalWaste.textContent}\nToplam Puan: ${totalPoints.textContent}\nAtık Türleri: ${wasteTypes.textContent}`);
});
