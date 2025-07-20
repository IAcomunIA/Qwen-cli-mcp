/** @format */

// Import the WASM file statically
import wasmModule from "./jq.wasm";

import jqFactory from "./jq.js";

export default jqFactory({
  instantiateWasm: (imports, callback) => {
    const instance = new WebAssembly.Instance(wasmModule, imports);
    callback(instance);
    return instance.exports;
  },
});
