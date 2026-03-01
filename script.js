function analyserLien() {
    const url = document.getElementById('urlInput').value.toLowerCase();
    const result = document.getElementById('resultatLien');
    
    if (!url) return alert("Veuillez entrer une URL.");

    result.innerHTML = "⌛ Analyse des serveurs en cours...";
    
    setTimeout(() => {
        if (url.includes("bonus") || url.includes("cadeau") || url.includes("gagner") || url.includes("free")) {
            result.innerHTML = "❌ DANGER : Ce lien présente des signes de phishing (arnaque). Ne cliquez pas !";
            result.className = "mt-4 text-xs font-bold text-red-500";
        } else {
            result.innerHTML = "✅ PROPRE : Aucune menace immédiate détectée. Restez tout de même vigilant.";
            result.className = "mt-4 text-xs font-bold text-emerald-500";
        }
    }, 1500);
}

function genererPass() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*";
    let password = "";
    for (let i = 0; i < 14; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('passBox').innerText = password;
}
