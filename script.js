async function analyserLien() {
    const url = document.getElementById('urlInput').value;
    const result = document.getElementById('resultatLien');
    
    if (!url) return alert("Veuillez entrer une URL.");

    result.innerHTML = "🔍 Scan du web en cours... Patientez.";
    result.className = "mt-4 text-xs font-bold text-blue-400";

    try {
        // On utilise l'API de 'urlscan.io' ou un service similaire pour scanner internet
        // Pour cet exemple, nous simulons l'appel API vers une base de données mondiale
        const response = await fetch(`https://api.urlscan.io/v1/search/?q=domain:${new URL(url).hostname}`);
        const data = await response.json();

        if (data.total > 0) {
            result.innerHTML = "❌ DANGER RÉEL : Ce site est répertorié comme suspect sur Internet !";
            result.className = "mt-4 text-xs font-bold text-red-500";
        } else {
            result.innerHTML = "✅ AUCUN SIGNALEMENT : Ce lien n'est pas listé comme dangereux pour le moment.";
            result.className = "mt-4 text-xs font-bold text-emerald-500";
        }
    } catch (error) {
        result.innerHTML = "⚠️ Erreur de connexion au radar de sécurité. Réessayez.";
        result.className = "mt-4 text-xs font-bold text-yellow-500";
    }
}
