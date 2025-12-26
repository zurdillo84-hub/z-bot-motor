const { ethers } = require("ethers");
const http = require("http");

// Servidor para que Render se mantenga LIVE
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Z-LEGACY CORE RUNNING\n");
}).listen(process.env.PORT || 3000);

const ALCHEMY_URL = "https://polygon-mainnet.g.alchemy.com/v2/1DGf1A_IIPdQDBjNSo0Pw";
const PRIVATE_KEY = process.env.PRIVATE_KEY; 

const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

console.log("--- Z-LEGACY CORE ACTIVADO ---");

async function monitorizar() {
    provider.on("block", async (blockNumber) => {
        console.log(`[Bloque ${blockNumber}] Escaneando arbitraje...`);
    });
}

monitorizar();
