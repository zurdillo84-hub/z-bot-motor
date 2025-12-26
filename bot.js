const { ethers } = require("ethers");
const http = require("http");

// ESTO ES LO QUE FALTA: Un servidor que responda SIEMPRE
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("MOTOR Z-LEGACY ACTIVO");
});

// Render necesita que el bot escuche en el puerto que ellos digan
const PORT = process.env.PORT || 10000;
server.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

// CONFIGURACIÓN DE BLOQUES
const ALCHEMY_URL = "https://polygon-mainnet.g.alchemy.com/v2/1DGf1A_IIPdQDBjNSo0Pw";
const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_URL);

console.log("--- Z-LEGACY CORE ACTIVADO ---");

provider.on("block", (blockNumber) => {
    console.log(`[POLYGON] Bloque detectado: ${blockNumber} - Escaneando...`);
});

