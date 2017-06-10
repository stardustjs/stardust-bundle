export * from "stardust-core";
export { WebGLPlatform, WebGLCanvasPlatform2D } from "stardust-webgl";

import { isotype as _isotype } from "stardust-isotype";

export module mark {
    export let isotype = _isotype;
}

import "stardust-webgl";