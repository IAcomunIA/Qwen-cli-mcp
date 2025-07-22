Asi esta en la terminal al correr esto yarn start
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


# Servidor MCP para CoinGecko

Este proyecto implementa un servidor MCP (Model-Context-Protocol) para interactuar con la API de CoinGecko. Permite al Gemini CLI obtener datos de criptomonedas utilizando las herramientas proporcionadas por este servidor.

## Requisitos

- Node.js
- Yarn

## Instalación


-------------------------------------------

{
  "theme": "Default",
  "selectedAuthType": "gemini-api-key",
  "preferredEditor": "vscode",
  "mcpServers": {
    "coingecko_mcp_local": {
      "command": "yarn",
      "args": [
        "start"
      ],
      "cwd": "/home/kasnino/coinGeko-mcp/",
      "env": {
        "COINGECKO_ENVIRONMENT": "demo"
      }
    }
  }
}


------------------------------------------------
1. Clona este repositorio.
2. Instala las dependencias usando Yarn:

   ```bash
   yarn install
   ```

## Configuración

1.  Crea un archivo `.env` en la raíz del proyecto.
2.  Añade tu clave de API de CoinGecko al archivo `.env`:

    ```
    COINGECKO_DEMO_API_KEY=tu-api-key
    ```

## Uso

Para iniciar el servidor MCP, ejecuta el siguiente comando:

```bash
yarn start
```

## Configuración del Gemini CLI

Para que el Gemini CLI pueda comunicarse con este servidor MCP, necesitas añadir la siguiente configuración a tu archivo de configuración de Gemini (normalmente `~/.gemini/config.json`):

```json
{
  "mcpServers": {
    "coingecko_mcp_local": {
      "command": "yarn",
      "args": [
        "start"
      ],
      "env": {
        "COINGECKO_ENVIRONMENT": "demo"
      }
    }
  }
}
```

Una vez configurado, puedes usar las herramientas de CoinGecko desde el Gemini CLI.
