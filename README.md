
# 🚀 Tu Primer Servidor MCP con Gemini CLI: Domina la Terminal con IA 💻

¡Bienvenido a tu aventura para conectar Gemini CLI con un servidor MCP (Model Context Protocol)! 🎉  
Este proyecto te permite interactuar con la API de CoinGecko usando Gemini CLI, desbloqueando un arsenal de herramientas para obtener datos de criptomonedas: precios, tendencias, NFTs y mucho más. Aprende a configurarlo local o remotamente con esta guía paso a paso. 🌐

---

## 🎥 Tutorial en Video  
Aprende en vivo cómo conectar tu primer servidor MCP, explora sus herramientas y automatiza tus proyectos como un experto en IA terminal.  
🔗 [Ver video en YouTube](https://youtu.be/xxxx)  

---

## 🌍 Únete a la Comunidad  
Comparte, aprende y crece con iacomunia.com – tu espacio para innovar con inteligencia artificial y automatización.

---

## 🛠 ¿Qué es este proyecto?  
Un servidor MCP para conectar Gemini CLI con la API de CoinGecko.  
⚡ Al arrancar obtendrás acceso a 46 herramientas para consultas cripto avanzadas, con comandos simples y mucha potencia.

---

## 📋 Requisitos  
- Node.js 20.18.1+ (`node --version`)  
- Yarn (`yarn --version`)  
- Gemini CLI instalado y configurado

---

## ⚙️ Instalación rápida


git clone https://github.com/IAcomunIA/MCP_firts.git
cd MCP_firts
yarn install
---

## 🔧 Configuración

1. Crea archivo `.env` con tu API key (opcional para demo):


COINGECKO_DEMO_API_KEY=tu-api-key

2. Modifica la configuración de Gemini CLI en `~/.gemini/settings.json`  
👉 **Opción Local:**

{
"mcpServers": {
"coingecko_mcp_local": {
"command": "npx",
"args": ["-y", "@coingecko/coingecko-mcp"],
"cwd": "/ruta/a/MCP_firts/",
"env": {
"COINGECKO_DEMO_API_KEY": "YOUR_DEMO_API_KEY",
"COINGECKO_ENVIRONMENT": "demo"
}
}
}
}
👉 **Opción Remota:**

{
"mcpServers": {
"coingecko_mcp": {
"command": "npx",
"args": [
"mcp-remote",
"https://mcp.api.coingecko.com/sse"
]
}
}
}
---

## 🚦 Cómo usar

Arranca el servidor local:

yarn start

Interactúa con Gemini CLI usando comandos como:

gemini get_simple_price
gemini get_coins_markets

¡Explora todas las herramientas y automatiza consultas cripto directas!

---

## 🐛 Solución de problemas comunes

- **No encuentra MCP:** Revisa que la ruta `cwd` en settings.json sea correcta.  
- **API Key inválida:** Usa modo demo o verifica tu `.env`.  
- **Problemas con Yarn:** Instala o actualiza `yarn` y ejecuta `yarn install` otra vez.

---

## 🌟 Recursos útiles

- [Awesome MCP Servers – 1000+ MCP open source](https://github.com/wong2/awesome-mcp-servers)  
- [Documentación oficial CoinGecko API](https://www.coingecko.com/en/api)  
- [Comunidad iacomunia.com](https://iacomunia.com)

---

## 🤝 ¿Quieres contribuir?  
¿Tienes mejoras o ideas? ¡Abre un issue o pull request!  
Sé parte activa y crece junto a la comunidad MCP.

---

*¡A programar y automatizar con inteligencia artificial en tu terminal!* 🚀  
*❤️ Hecho con pasión por la comunidad iAcomunIA*

