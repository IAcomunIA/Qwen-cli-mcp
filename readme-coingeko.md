🚀 Tu Primer Servidor MCP con Gemini CLI: ¡Domina la Terminal con IA! 💻
¡Bienvenido a tu aventura para conectar Gemini CLI con un servidor MCP (Model Context Protocol)! 🎉 Este proyecto te permite interactuar con la API de CoinGecko usando Gemini CLI, desbloqueando un arsenal de herramientas para obtener datos de criptomonedas, desde precios hasta tendencias. Aprende a configurarlo localmente o remoto en esta guía paso a paso. 🌐

🎥 ¡Mira el Tutorial en Video!
Domina la integración de Gemini CLI con MCP desde cero con nuestro tutorial completo de 2025. 📚 Mira cómo conectar tu primer servidor MCP, explorar sus herramientas y automatizar proyectos como un pro. 👇
🔗 Video en YouTube: [Insertar enlace al video: https://youtu.be/xxxx]🌍 Únete a la comunidad: iacomunia.com

🛠️ ¿Qué es este proyecto?
Este repositorio implementa un servidor MCP para conectar Gemini CLI con la API de CoinGecko. Al ejecutarlo, tendrás acceso a 46 herramientas para obtener datos de criptomonedas, como precios, tendencias, NFTs, y más. 💰 Aquí está la salida al correr yarn start:
yarn run v1.22.19
$ dotenv -- npx -y @coingecko/coingecko-mcp
MCP Server starting with 46 tools: [
  'get_asset_platforms',
  'get_id_coins',
  'get_list_coins_categories',
  'get_coins_list',
  'get_new_coins_list',
  'get_coins_markets',
  'get_coins_top_gainers_losers',
  'get_coins_contract',
  'get_range_contract_coins_market_chart',
  'get_coins_history',
  'get_range_coins_market_chart',
  'get_range_coins_ohlc',
  'get_global',
  'get_id_nfts',
  'get_list_nfts',
  'get_nfts_market_chart',
  'get_onchain_categories',
  'get_pools_onchain_categories',
  'get_onchain_networks',
  'get_networks_onchain_new_pools',
  'get_network_networks_onchain_new_pools',
  'get_networks_onchain_trending_pools',
  'get_network_networks_onchain_trending_pools',
  'get_networks_onchain_dexes',
  'get_pools_networks_onchain_dexes',
  'get_networks_onchain_pools',
  'get_address_networks_onchain_pools',
  'get_pools_networks_onchain_info',
  'get_timeframe_pools_networks_onchain_ohlcv',
  'get_pools_networks_onchain_trades',
  'get_address_networks_onchain_tokens',
  'get_tokens_networks_onchain_info',
  'get_tokens_networks_onchain_top_holders',
  'get_tokens_networks_onchain_holders_chart',
  'get_timeframe_tokens_networks_onchain_ohlcv',
  'get_tokens_networks_onchain_pools',
  'get_tokens_networks_onchain_trades',
  'get_pools_onchain_megafilter',
  'get_pools_onchain_trending_search',
  'get_search_onchain_pools',
  'get_addresses_networks_simple_onchain_token_price',
  'get_search',
  'get_search_trending',
  'get_simple_price',
  'get_simple_supported_vs_currencies',
  'get_id_simple_token_price'
]
MCP Server running on stdio


📋 Requisitos

Node.js: Versión 20.18.1 o superior (node --version para verificar).  
Yarn: Para gestionar dependencias (yarn --version).  
Gemini CLI: Instalado y configurado.


⚙️ Instalación

Clona el repositorio:
git clone https://github.com/tu-usuario/coingecko-mcp.git
cd coingecko-mcp


Instala las dependencias:
yarn install


Crea un archivo .env en la raíz del proyecto:
COINGECKO_DEMO_API_KEY=tu-api-key


💡 Nota: Si usas el modo demo, no necesitas una clave API real. Configura COINGECKO_ENVIRONMENT: "demo" en tu configuración.




🖥️ Configuración de Gemini CLI
Para conectar Gemini CLI con el servidor MCP, edita el archivo settings.json en ~/.gemini/:
cd ~/.gemini/
nano settings.json

Opción 1: Conexión Local
Configura un servidor MCP local ejecutado en tu máquina:
{
  "theme": "Default",
  "selectedAuthType": "gemini-api-key",
  "preferredEditor": "vscode",
  "mcpServers": {
    "coingecko_mcp_local": {
      "command": "npx",
      "args": ["-y", "@coingecko/coingecko-mcp"],
      "cwd": "/home/kasnino/coinGeko-mcp/",
      "env": {
        "COINGECKO_DEMO_API_KEY": "YOUR_DEMO_API_KEY",
        "COINGECKO_ENVIRONMENT": "demo"
      }
    }
  }
}

Opción 2: Conexión Remota
Conecta a un servidor MCP remoto (por ejemplo, uno alojado por CoinGecko):
{
  "theme": "Default",
  "selectedAuthType": "gemini-api-key",
  "preferredEditor": "vscode",
  "mcpServers": {
    "coingecko_mcp": {
      "command": "npx",
      "args": ["mcp-remote", "https://mcp.api.coingecko.com/sse"]
    }
  }
}


🚀 Uso

Inicia el servidor MCP local:
yarn start


Usa Gemini CLI para interactuar con las herramientas de CoinGecko, como get_coins_markets o get_simple_price. Por ejemplo:
gemini get_simple_price




🌟 Recursos Adicionales

📚 Explora más servidores MCP: Encuentra más de 1000 servidores MCP open-source en Awesome MCP Servers.  
🌐 Documentación de CoinGecko API: CoinGecko API.  
🤝 Comunidad de IA: Únete a iacomunia.com para compartir y aprender.


🐛 Solución de Problemas

Error: "No se encuentra el servidor MCP": Asegúrate de que el cwd en settings.json apunte al directorio correcto.  
Error: "Clave API inválida": Verifica tu .env o usa el modo demo (COINGECKO_ENVIRONMENT: "demo").  
Problemas con Yarn: Asegúrate de tener Yarn instalado y ejecuta yarn install nuevamente.


🤝 Contribuye
¿Tienes ideas para mejorar este servidor MCP? ¡Abre un issue o envía un pull request en el repositorio! 🚀