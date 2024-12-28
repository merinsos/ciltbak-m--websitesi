document.addEventListener("DOMContentLoaded", function() {
    const starContainer = document.getElementById("stars-container");

    // Yıldızları rastgele eklemek için fonksiyon
    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        // Yıldızın pozisyonunu rastgele ayarlama
        const xPosition = Math.random() * window.innerWidth;
        const delay = Math.random() * 5;  // Yıldızın hareketini rastgele başlatma
        star.style.left = `${xPosition}px`;
        star.style.animationDelay = `${delay}s`;

        // Yıldızın büyüklüğünü rastgele ayarlama
        const size = Math.random() * 3 + 2;  // 2px ile 5px arasında
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Yıldızı container'a ekleme
        starContainer.appendChild(star);
    }

    // Belirli bir sayıda yıldız oluşturma
    for (let i = 0; i < 100; i++) {
        createStar();
    }
});

// Yaş kontrol formu
const ageForm = document.getElementById("age-form");
const ageInput = document.getElementById("age");
const ageCheckSection = document.getElementById("age-check");
const skinTypeQuestionsSection = document.getElementById("skin-type-questions");
const skinCareRoutineSection = document.getElementById("skin-care-routine");
const routineOutput = document.getElementById("routine-output");
const brandList = document.getElementById("brand-list");
const feedbackForm = document.getElementById("feedback-form");
const feedbackSuccess = document.getElementById("feedback-success");

ageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const age = parseInt(ageInput.value, 10);

    if (age >= 18) {
        ageCheckSection.style.display = "none";
        skinTypeQuestionsSection.style.display = "block";
    } else {
        alert("Bu site yalnızca 18 yaş ve üzeri kullanıcılar için geçerlidir.");
    }
});

// Cilt tipi formu
const skinForm = document.getElementById("skin-form");

skinForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const skinFeel = document.querySelector('input[name="skinFeel"]:checked')?.value;
    const skinAcne = document.querySelector('input[name="skinAcne"]:checked')?.value;
    const skinSensitivity = document.querySelector('input[name="skinSensitivity"]:checked')?.value;
    const skinDryness = document.querySelector('input[name="skinDryness"]:checked')?.value;
    const tZoneOily = document.querySelector('input[name="tZoneOily"]:checked')?.value;

    if (!skinFeel || !skinAcne || !skinSensitivity || !skinDryness || !tZoneOily) {
        alert("Lütfen tüm soruları cevaplayın.");
        return;
    }

    let routineText = "";

    // Cilt tipi bazlı öneriler
    if (skinFeel === "dry") {
        routineText += "<p>Cildiniz kuru, bu nedenle nemlendirici ve yatıştırıcı ürünler kullanmalısınız. Haftada bir kez peeling yaparak ölü deri hücrelerinden arının.</p>";
    } else if (skinFeel === "oily") {
        routineText += "<p>Cildiniz yağlı, bu yüzden sebum dengeleyici, gözenek temizleyici ürünler tercih etmelisiniz. Yağlı ciltler için hafif nemlendiriciler de kullanabilirsiniz.</p>";
    } else {
        routineText += "<p>Cildiniz normal, bu da dengeli bir bakım gerektiriyor. İyi bir nemlendirici ve hafif temizleyici kullanabilirsiniz.</p>";
    }

    // Sivilce durumu
    if (skinAcne === "yes") {
        routineText += "<p>Sivilce problemi yaşıyorsanız, salisilik asit içeren ürünler kullanmanızı öneririm. Düzenli cilt temizliği de çok önemli.</p>";
    } else {
        routineText += "<p>Sivilce problemi yaşamıyorsanız, nazik bir temizleyici ve nemlendirici ile basit bir rutin uygulayabilirsiniz.</p>";
    }

    routineOutput.innerHTML = routineText;

    // Önerilen markalar listesi
    const brands = ["The Ordinary", "Paula's Choice", "CeraVe", "Neutrogena", "La Roche-Posay"];
    brandList.innerHTML = brands.map(brand => `<li>${brand}</li>`).join("");

    skinTypeQuestionsSection.style.display = "none";
    skinCareRoutineSection.style.display = "block";
});

// Geri bildirim formu
feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const feedbackMessage = document.getElementById("feedback-message").value.trim();

    if (feedbackMessage) {
        feedbackForm.reset();
        feedbackSuccess.style.display = "block";
        setTimeout(() => {
            feedbackSuccess.style.display = "none";
        }, 3000);
    } else {
        alert("Lütfen geri bildiriminizi yazınız.");
    }
});
