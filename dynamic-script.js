function extractData() {
    console.log("🔍 Executando extração de conexões...");

    let linkedinConnections = [];
    
    document.querySelectorAll("a[href*='/in/']").forEach(anchor => {
        const name = anchor.innerText.trim() || "Sem nome";
        const profileurl = anchor.href.split("?")[0];

        linkedinConnections.push({ name, jobtitle: "N/A", profileurl });
        console.log("✅ Conexão encontrada:", { name, jobtitle: "N/A", profileurl });
    });

    return linkedinConnections;
}

