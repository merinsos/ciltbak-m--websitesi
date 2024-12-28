document.getElementById("age-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const age = document.getElementById("age").value;
    
    if (age >= 18) {
        document.getElementById("age-check").style.display = "none";
        document.getElementById("skin-type-questions").style.display = "block";
    } else {
        alert("Bu site yalnızca 18 yaş ve üzeri kullanıcılar için geçerlidir.");
    }
});

document.getElementById("skin-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const skinFeel = document.querySelector('input[name="skinFeel"]:checked').value;
    const skinAcne = document.querySelector('input[name="skinAcne"]:checked').value;

    let routineText = "";
    
    if (skinFeel === "dry") {
        routineText += "<p>Cildiniz kuru, bu nedenle nemlendirici ve yatıştırıcı ürünler kullanmalısınız. Haftada bir kez peeling yaparak ölü deri hücrelerinden arının.</p>";
    } else if (skinFeel === "oily") {
        routineText += "<p>Cildiniz yağlı, bu yüzden sebum dengeleyici, gözenek temizleyici ürünler tercih etmelisiniz. Yağlı ciltler için hafif nemlendiriciler de kullanabilirsiniz.</p>";
    } else {
        routineText += "<p>Cildiniz normal, bu da dengeli bir bakım gerektiriyor. İyi bir nemlendirici ve hafif temizleyici kullanabilirsiniz.</p>";
    }

    if (skinAcne === "yes") {
        routineText += "<p>Sivilce problemi yaşıyorsanız, salisilik asit içeren ürünler kullanmanızı öneririm. Düzenli cilt temizliği de çok önemli.</p>";
    } else {
        routineText += "<p>Sivilce problemi yaşamıyorsanız, nazik bir temizleyici ve nemlendirici ile basit bir rutin uygulayabilirsiniz.</p>";
    }

    document.getElementById("routine-output").innerHTML = routineText;
    
    const brands = [
        "The Ordinary",
        "Paula's Choice",
        "CeraVe",
        "Neutrogena",
        "La Roche-Posay"
    ];

    let brandListHTML = "";
    brands.forEach(brand => {
        brandListHTML += `<li>${brand}</li>`;
    });
    
    document.getElementById("brand-list").innerHTML = brandListHTML;

    document.getElementById("skin-type-questions").style.display = "none";
    document.getElementById("skin-care-routine").style.display = "block";
});
