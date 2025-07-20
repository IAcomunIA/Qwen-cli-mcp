#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const server_1 = require("./server.js");
const tools_1 = require("./tools.js");
const options_1 = require("./options.js");
async function main() {
    const options = parseOptionsOrError();
    if (options.list) {
        listAllTools();
        return;
    }
    const includedTools = selectToolsOrError(tools_1.endpoints, options);
    console.error(`MCP Server starting with ${includedTools.length} tools:`, includedTools.map((e) => e.tool.name));
    (0, server_1.init)({ server: server_1.server, endpoints: includedTools });
    const transport = new stdio_js_1.StdioServerTransport();
    await server_1.server.connect(transport);
    console.error('MCP Server running on stdio');
}
if (require.main === module) {
    main().catch((error) => {
        console.error('Fatal error in main():', error);
        process.exit(1);
    });
}
function parseOptionsOrError() {
    try {
        return (0, options_1.parseOptions)();
    }
    catch (error) {
        console.error('Error parsing options:', error);
        process.exit(1);
    }
}
function selectToolsOrError(endpoints, options) {
    try {
        const includedTools = (0, server_1.selectTools)(endpoints, options);
        if (includedTools.length === 0) {
            console.error('No tools match the provided filters.');
            process.exit(1);
        }
        return includedTools;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error filtering tools:', error.message);
        }
        else {
            console.error('Error filtering tools:', error);
        }
        process.exit(1);
    }
}
function listAllTools() {
    if (tools_1.endpoints.length === 0) {
        console.log('No tools available.');
        return;
    }
    console.log('Available tools:\n');
    // Group endpoints by resource
    const resourceGroups = new Map();
    for (const endpoint of tools_1.endpoints) {
        const resource = endpoint.metadata.resource;
        if (!resourceGroups.has(resource)) {
            resourceGroups.set(resource, []);
        }
        resourceGroups.get(resource).push(endpoint);
    }
    // Sort resources alphabetically
    const sortedResources = Array.from(resourceGroups.keys()).sort();
    // Display hierarchically by resource
    for (const resource of sortedResources) {
        console.log(`Resource: ${resource}`);
        const resourceEndpoints = resourceGroups.get(resource);
        // Sort endpoints by tool name
        resourceEndpoints.sort((a, b) => a.tool.name.localeCompare(b.tool.name));
        for (const endpoint of resourceEndpoints) {
            const { tool, metadata: { operation, tags }, } = endpoint;
            console.log(`  - ${tool.name} (${operation}) ${tags.length > 0 ? `tags: ${tags.join(', ')}` : ''}`);
            console.log(`    Description: ${tool.description}`);
        }
        console.log('');
    }
}
//# sourceMappingURL=index.js.map