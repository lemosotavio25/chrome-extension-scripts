async function extractConnections() {
    console.log("🔍 Iniciando extração de conexões no LinkedIn...");

    let linkedinConnections = [];

    document.querySelectorAll(".mn-connection-card").forEach(card => {
        const nameElement = card.querySelector(".mn-connection-card__name");
        const linkElement = card.querySelector("a[href*='/in/']");
        const jobElement = card.querySelector(".mn-connection-card__occupation");

        const name = nameElement ? nameElement.innerText.trim() : "Sem nome";
        const profileurl = linkElement ? `https://www.linkedin.com${linkElement.getAttribute("href").split("?")[0]}` : "Sem URL";
        const jobtitle = jobElement ? jobElement.innerText.trim() : "N/A";

        // Evita adicionar duplicatas
        if (!linkedinConnections.some(conn => conn.profileurl === profileurl)) {
            linkedinConnections.push({ name, jobtitle, profileurl });
        }
    });

    if (linkedinConnections.length > 0) {
        console.log("📌 Conexões extraídas:", linkedinConnections);
        
        // 🔥 Envia os dados para o popup
        chrome.runtime.sendMessage({ action: "scrapedData", data: linkedinConnections }, (response) => {
            console.log("📤 Dados enviados ao popup:", response);
        });
    } else {
        console.log("⚠️ Nenhuma conexão encontrada.");
    }
}

// 🔄 Executa automaticamente quando injetado
extractConnections();
