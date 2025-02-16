export async function getGeminiResponse(userMessage, file = null) {
    console.log(" Envoi du message à l'IA:", userMessage, file ? file.name : "Aucun fichier");

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=VOTRE_CLE_API`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: userMessage }] }]
            })
        });

        const data = await response.json();
        console.log(" Réponse de l'IA:", data);

        if (data.candidates && data.candidates.length > 0) {
            return data.candidates[0].content;
        } else {
            return "Aucune réponse reçue de l'IA.";
        }
    } catch (error) {
        console.error(" Erreur lors de la requête à l'API:", error);
        return "Erreur avec l'IA. Vérifiez la console.";
    }
}
