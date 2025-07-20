vuelve analizar el archivo, mejoralo por que eliminamos cosas, recuerda vamos a usar yarn de ahra en adelantes yo ejecutare los
 comandos desde otra pestaña tu me ayudas a modificar tdos los archivos recuerda que estamos creando un mcp modelo context
 protocol para conectarlo a gemini cli desde mi linux usando la api de coingecko sabiendo eso tengo intrucciones en
 @readme-coingeko.md modifca todo lo demas para dejarlo listo para yo ir ejecutando comando relacionados con el shell ya cuento
 con la .env ahi en el repo sabiendo eso mejoremos el repo
 
 
 mejoras en el mcp de coingeko y gemini cli la idea es usar esta estructura que me arroja  la doc de coingeko 

sto es parte de la doc en coingecko puede que sea asi la ruta a seguir o mejorasmosla 
{
  "mcpServers": {
    "coingecko_mcp_local": {
      "command": "npx",
      "args": [
        "-y",
        "@coingecko/coingecko-mcp"
      ],
      "env": {
        "COINGECKO_DEMO_API_KEY": "YOUR_DEMO_API_KEY",
        "COINGECKO_ENVIRONMENT": "demo"
      }
    }
  }
}