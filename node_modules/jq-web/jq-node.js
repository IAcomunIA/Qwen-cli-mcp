/** @format */

const fs = require("fs");
const path = require("path");

const wasmFile = fs.readFileSync(path.join(__dirname, "jq.wasm"));

const jqFactory = require("./jq.js");

module.exports = jqFactory({
  instantiateWasm: (imports, callback) => {
    const wasmModule = new WebAssembly.Module(wasmFile);
    const instance = new WebAssembly.Instance(wasmModule, imports);
    callback(instance);
    return instance.exports;
  },
});
