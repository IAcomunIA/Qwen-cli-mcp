# Qwen CLI

<img width="1920" height="1080" alt="qwen-cli-ia-qwen-3-coder-480b" src="https://github.com/user-attachments/assets/e134a442-43e6-4073-a039-9d98f13a6f76" />


Qwen CLI es una potente herramienta de línea de comandos para flujos de trabajo con IA, adaptada de [**Gemini CLI**](https://github.com/google-gemini/gemini-cli) (consulta [README.gemini.md](./README.gemini.md) para más detalles). Está optimizada para el modelo [Qwen3-Coder-480B-A35B-Instruct](https://github.com/QwenLM/Qwen3-Coder), con soporte mejorado para análisis de código y la integración con el Protocolo de Contexto de Modelo (MCP). Permite a los desarrolladores crear juegos, aplicaciones web, repositorios y plataformas de anime desde la terminal.

## Características Principales

- **Comprensión y Edición de Código** - Analiza y edita grandes bases de código con una ventana de contexto de 262,144 tokens.
- **Automatización de Flujos de Trabajo** - Automatiza tareas como la gestión de repositorios en GitHub, pull requests y flujos complejos usando MCP.
- **Análisis Mejorado** - Optimizado para modelos Qwen3-Coder, con soporte para MCP y conexiones con OpenRouter y Hugging Face.
- **Proyectos Creativos** - Crea aplicaciones web, juegos y plataformas como servicios de streaming de anime directamente desde la terminal.


---

## 🎥 Tutorial en Video  Qwen CLI
Aprende en vivo cómo activar modelos IA en tu terminal y conectar tu primer servidor MCP, explora sus herramientas y automatiza tus proyectos como un experto en IA terminal.  
🔗 [Ver video en YouTube]([https://youtu.be/xxxx]([https://www.youtube.com/watch?v=2cD20lagJmg](https://www.youtube.com/watch?v=2cD20lagJmg))

[![Mira el tutorial](https://img.youtube.com/vi/2cD20lagJmg/0.jpg)](https://www.youtube.com/watch?v=2cD20lagJmg)


---

## Inicio Rápido

### Requisitos Previos

Asegúrate de tener instalado [Node.js versión 20](https://nodejs.org/en/download) o superior.

```bash
curl -qL https://www.npmjs.com/install.sh | sh
```

### Instalación

Instala Qwen CLI globalmente:

```bash
npm install -g @qwen-code/qwen-cli
qwen --version
```

Ejecuta Qwen CLI desde cualquier lugar:

```bash
qwen
```

### Configuración de la API

Configura tu clave API para Qwen CLI (también puedes añadirla en un archivo `.env` en tu proyecto):


Configura las variables de entorno para usar OpenRouter:
***Open Router***

```bash
export OPENAI_API_KEY="tu_clave_openrouter"
export OPENAI_BASE_URL="https://openrouter.ai/api/v1"
export OPENAI_MODEL="qwen/qwen3-coder:free"
```

***HuggingFace***

```bash
export OPENAI_API_KEY="tu-clave-hugging-face"
export OPENAI_BASE_URL="https://router.huggingface.co/v1"
export OPENAI_MODEL="Qwen/Qwen3-Coder-480B-A35B-Instruct:hyperbolic"e"
```

***MCP Github***
```bash
export GITHUB_PERSONAL_ACCESS_TOKEN="Aqui la API Keys""
```




O instala desde el código fuente:

```bash
git clone https://github.com/QwenLM/qwen-cli.git
cd qwen-cli
npm install
npm install -g .
```

### Configuración Interna

Configura los ajustes de Qwen CLI editando el archivo `settings.json`:

```bash
cd ~/.qwen
nano settings.json
```

Ejemplo de configuración:

```json
{
  "selectedAuthType": "openai",
  "theme": "GitHub",
  "maxSessionTurns": 50,
  "mcpServers": {
    "Github_mcp_local": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "cwd": "/aqui-tu-ruta-local/Github-mcp"
    }
  },
  "sampling_params": {
    "max_tokens": 4096,
    "temperature": 0.7,
    "top_p": 0.9,
    "top_k": 40,
    "repetition_penalty": 1.1,
    "presence_penalty": 0,
    "frequency_penalty": 0
  },
  "showMemoryUsage": true,
  "usageStatisticsEnabled": false,
  "enableOpenAILogging": false,
  "fileFiltering": {
    "respectGitIgnore": true,
    "enableRecursiveFileSearch": true
  },
  "hideTips": false,
  "hideBanner": false,
  "hideWindowTitle": false
}
```





## Ejemplos de Uso

### Explorar Bases de Código

Navega a tu proyecto y usa Qwen CLI para analizarlo:

```bash
cd tu-proyecto/
qwen
> Describe la arquitectura principal de esta plataforma de anime
```

### Desarrollo de Código

Refactoriza o crea código nuevo con asistencia de IA:

```bash
> Refactoriza este componente React para una landing page usando Tailwind CSS
```

### Automatización de Flujos con MCP

Gestiona repositorios de GitHub usando el servidor GitHub MCP:

```bash
> Crea un issue en el repositorio 'tuusuario/plataforma-anime' con el título 'Añadir scraper de anime'
```

Genera assets para un juego:

```bash
> Convierte todas las imágenes en ./assets a formato WebP para un juego
```

## Tareas Populares

### Comprender Bases de Código Nuevas

```text
> ¿Cuáles son los componentes principales de esta aplicación web?
> ¿Cómo se maneja la autenticación en esta plataforma?
> Explica el flujo de datos para el sistema de recomendaciones de anime
```

### Refactorización y Optimización de Código

```text
> Optimiza este módulo JavaScript para mejorar el rendimiento
> Refactoriza esta clase para seguir principios SOLID
> Añade manejo de errores a este endpoint de API
```

### Documentación y Pruebas

```text
> Genera comentarios JSDoc para esta función
> Escribe pruebas unitarias para este componente de juego
> Crea documentación de API para esta aplicación web
```

### Proyectos Creativos

```text
> Genera una landing page para una plataforma de streaming de anime
> Crea un bucle de juego 2D para un juego estilo anime
> Configura un repositorio en GitHub para una nueva app con automatización MCP
```

## Resultados de Benchmarks

### Terminal-Bench (Julio 2025)

| Agente    | Modelo                          | Precisión (%) |
|-----------|--------------------------------|---------------|
| Qwen CLI  | Qwen3-Coder-480B-A35B-Instruct | 72.0          |

## Estructura del Proyecto

```
qwen-cli/
├── packages/           # Paquetes principales
├── docs/              # Documentación
├── examples/          # Ejemplos de código (aplicaciones web, juegos, plataformas de anime)
└── tests/             # Archivos de pruebas
```

## Desarrollo y Contribución

Consulta [CONTRIBUTING.md](./CONTRIBUTING.md) para aprender cómo contribuir al proyecto.

## Solución de Problemas

Si encuentras problemas, revisa la [guía de solución de problemas](docs/troubleshooting.md).

## Agradecimientos

Qwen CLI está basado en [Google Gemini CLI](https://github.com/google-gemini/gemini-cli). Agradecemos al equipo de Gemini CLI por su excelente trabajo. Nuestras principales contribuciones se centran en optimizaciones de análisis y soporte para MCP con modelos Qwen3-Coder.

## Licencia

[Apache 2.0](./LICENSE)
