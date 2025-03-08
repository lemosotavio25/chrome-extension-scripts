function extractData() {
    console.log("🔍 Executando extração de conexões...");

    let linkedinConnections = [];

    document.querySelectorAll(".mn-connection-card").forEach(card => {
        const anchor = card.querySelector("a[href*='/in/']");
        const nameElement = card.querySelector(".mn-connection-card__name");
        const jobElement = card.querySelector(".mn-connection-card__occupation");

        if (anchor) {
            const profileurl = `https://www.linkedin.com${anchor.getAttribute("href").split("?")[0]}`;
            const name = nameElement ? nameElement.innerText.trim() : "Sem nome";
            const jobtitle = jobElement ? jobElement.innerText.trim() : "N/A";

            linkedinConnections.push({ name, jobtitle, profileurl });
            console.log("✅ Conexão encontrada:", { name, jobtitle, profileurl });
        }
    });

    console.log("📌 Conexões extraídas:", linkedinConnections);
    return linkedinConnections;
}
